import React from 'react';
import {useGetDBItems} from "../../../functions/GetDBItems/useGetDBItems";
import {Alert, Badge, ListGroup} from "react-bootstrap";
import UserListItem from "./UserListItem";

const UsersList = () => {

    //users list
    const users = useGetDBItems("/users");
    // console.log(users);

    if (users.length) {
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
    }else {
        return (
            <Alert className={"my-2 p-2 small"}>
                Пользователей пока нет или они загружаются.
            </Alert>
        )
    }
};

export default UsersList;
