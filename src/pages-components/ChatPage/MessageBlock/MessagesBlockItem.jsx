import React from 'react';
import {Alert, Spinner} from "react-bootstrap";
import {getDate} from "../../../functions/getDate";
import {useGetUser} from "../../../functions/Auth/useGetUser";
import {useGetUserPhoto} from "../../../functions/Auth/useGetUserPhoto";

const MessagesBlockItem = ({data,nowUserId}) => {

    const userFrom = useGetUser(data.from);
    const userFromPhoto = useGetUserPhoto(data.from);
    // console.log(userFrom);
    // console.log(userFromPhoto);

    if(nowUserId && userFrom){
        return (
            <Alert className={"w-50 p-2 d-flex align-items-center"}>
                <img
                    width={50}
                    src={
                        userFromPhoto?.link ?
                            userFromPhoto?.link:
                            "https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg"
                    }
                    alt={userFrom.name}
                    style={{borderRadius:10,marginRight:10}}
                />

                <div>
                    <header className={"d-flex"}>
                        <h6 className={"m-0"}>{userFrom.name}</h6>
                        <i className={"m-0 mx-2 small opacity-75"}>
                            {getDate(data.date)}
                        </i>
                    </header>

                    <p className={"m-0 small"}>
                        {data.message}
                    </p>
                </div>
                </Alert>
        );
    }else {
        return <Spinner variant={"primary"} animation={"border"} />;
    }
};

export default MessagesBlockItem;
