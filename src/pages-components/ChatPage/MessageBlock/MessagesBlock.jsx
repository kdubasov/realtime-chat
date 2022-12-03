import React from 'react';
import {Alert} from "react-bootstrap";
import {useGetChat} from "../../../functions/Chat/useGetChat";
import MessagesBlockItem from "./MessagesBlockItem";
import {useUserAuth} from "../../../contexts/UserAuthContext";

const MessagesBlock = ({companionData,nowUser}) => {

    const { user } = useUserAuth();

    //data with messages
    const data = useGetChat(companionData.uid,nowUser.uid);

    if (user && data && data.length){
        return (
            <div className={"MessagesBlock border my-2 p-1"}>
                {
                    data
                        //сортируем сообщения по дате
                        .sort((a,b) => a.date - b.date)
                        .map(mess => (
                            <MessagesBlockItem
                                key={mess.messageId}
                                data={mess}
                                nowUserId={user.uid}
                            />
                    ))
                }
            </div>
        );
    }else {
        return (
            <Alert variant={"danger"} className={"my-2 p-2 small"}>
                Сообщений нет, начните общаться прямо сейчас.
            </Alert>
        )
    }
};

export default MessagesBlock;
