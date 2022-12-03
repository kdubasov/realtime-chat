import React from 'react';
import {useUserAuth} from "../../contexts/UserAuthContext";
import {useGetUserChats} from "../../functions/Chat/useGetUserChats";
import {Alert, ListGroup} from "react-bootstrap";
import ListMyChatsItem from "./ListMyChatsItem";

const ListMyChats = () => {

    const { user } = useUserAuth();

    // all chats for user
    const chats = useGetUserChats(user?.uid);
    // console.log(chats,'ListMyChats');

    if (chats.length){
        return (
            <ListGroup className={"ListMyChats"}>
                {
                    chats.map((chat,ids) => (
                        <ListMyChatsItem key={ids} chat={chat} />
                    ))
                }
            </ListGroup>
        );
    }else {
        return (
            <Alert className={"my-2 p-2 small"}>
                У вас пока нет активных чатов.
            </Alert>
        )
    }
};

export default ListMyChats;
