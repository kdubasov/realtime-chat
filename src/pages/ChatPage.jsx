import React from 'react';
import {Alert, Badge} from "react-bootstrap";
import {getLastWordPath} from "../functions/getLastWordPath";
import {useGetUser} from "../functions/Auth/useGetUser";
import MessagesBlock from "../pages-components/ChatPage/MessageBlock/MessagesBlock";
import MessageInput from "../pages-components/ChatPage/MessageInput";
import {useUserAuth} from "../contexts/UserAuthContext";

const ChatPage = () => {

    //юзер который сейчас
    const { user } = useUserAuth();

    //кому пмшем
    const companionUid = getLastWordPath();
    const companionData = useGetUser(companionUid);

    if(Object.values(companionData).length && user){
        return (
            <div className={"ChatPage py-3"}>
                <Badge>Чат c {companionData.name} {companionData.surname}</Badge>

                <MessagesBlock companionData={companionData} nowUser={user} />
                <MessageInput companionData={companionData} nowUser={user} />
            </div>
        );
    }else {
        return (
            <Alert className={"p-2 small"}>
                Пользователь не найден, пожайлуйста сообщите о ошибке в поддержку.
            </Alert>
        )
    }
};

export default ChatPage;
