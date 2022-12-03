import React from 'react';
import {useUserAuth} from "../../contexts/UserAuthContext";
import {useGetUser} from "../../functions/Auth/useGetUser";
import {Alert} from "react-bootstrap";

const CheckUserAlert = () => {

    const { user } = useUserAuth();
    const userDbData = useGetUser(user?.uid);

    if(Boolean(Object.values(userDbData).length)){
        return(
            <Alert variant={"success"} className={"p-2 mt-2 small text-center"}>
                Вы заполнили свои данные, теперь можете общаться.
            </Alert>
        )
    }else {
        return (
            <Alert className={"small p-2 text-center"} variant={"danger"}>
                Авторизуйтесь и заполните данные профиля для возможности вести переписку.
            </Alert>
        )
    }
};

export default CheckUserAlert;
