import {set,ref} from "firebase/database";
import {realtimeDB} from "../../database/database";

export const addMessage = (message,nowUserId,companionId) => {

    const date = Date.now();
    const url = `/chats/${nowUserId}-${companionId}/${date}-${nowUserId}`;

    return set(ref(realtimeDB, url),{
        messageId: date + "-" + nowUserId,
        from:nowUserId,
        to:companionId,
        message:message,
        date:date,
    })
}