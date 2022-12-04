import {set,ref} from "firebase/database";
import {realtimeDB} from "../../database/database";

export const addMessage = (message,nowUserId,companionId,chatId = false) => {

    const date = Date.now();

    //если чат уже был создан то пишем в него если нет то создаем новый
    const url = () => {
        if (chatId) {
            return `/chats/${chatId}/${date}-${nowUserId}`
        }else {
            return `/chats/${nowUserId}-${companionId}/${date}-${nowUserId}`
        }
    };

    return set(ref(realtimeDB, url()),{
        messageId: date + "-" + nowUserId,
        from:nowUserId,
        to:companionId,
        message:message,
        date:date,
    })
}