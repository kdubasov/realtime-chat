import React from 'react';
import {useGetDBItems} from "../../../functions/GetDBItems/useGetDBItems";
import {Badge, ListGroup} from "react-bootstrap";
import UserListItem from "./UserListItem";

const UsersList = () => {

    //users list
    const users = useGetDBItems("/users");
    // console.log(users);

    return (
        <>
            <Badge className={"mb-1"}>Все пользователи</Badge>

            <ListGroup className={"UsersList"}>
                {
                    users.map(user => (
                        <UserListItem key={user.uid} userData={user} />
                    ))
                }
            </ListGroup>
        </>
    );
};

export default UsersList;
