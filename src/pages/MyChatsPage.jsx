import React from 'react';
import {Badge} from "react-bootstrap";
import ListMyChats from "../pages-components/MyChatsPage/ListMyChats";

const MyChatsPage = () => {
    return (
        <div className={"MyChatsPage py-3"}>
            <Badge>Мои чаты</Badge>

            <ListMyChats />
        </div>
    );
};

export default MyChatsPage;
