import React from 'react';
import {ListGroupItem} from "react-bootstrap";
import {useGetUser} from "../../functions/Auth/useGetUser";
import {useGetUserPhoto} from "../../functions/Auth/useGetUserPhoto";
import {getDate} from "../../functions/getDate";
import {Link} from "react-router-dom";

const ListMyChatsItem = ({chat,user}) => {

    //ищем послднее собещние чтобы показать его
    const lastMessage = (chat.sort((a,b) => b.date - a.date))[0];

    //ищем компаньена
    const getCompanionUid = () => {
        if(lastMessage.from === user.uid){
            return lastMessage.to;
        }else {
            return lastMessage.from;
        }
    }

    //с кем чат
    const companion = useGetUser(getCompanionUid());
    const companionPhoto = useGetUserPhoto(getCompanionUid());

    if(Object.values(companion).length && Object.values(companionPhoto).length){
        return (
            <ListGroupItem className={"d-flex align-items-center"}>
                {//photo
                    companionPhoto?.link ?
                        <img width={75} src={companionPhoto.link} alt={companion.name} />:
                        <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg" alt=""/>
                }

                <div className={"w-100 mx-2"}>
                    <header className={"w-100 d-flex justify-content-between"}>
                        <h6>{companion.name + " " + companion.surname}</h6>
                        <p className="small opacity-75">
                            <i className="small">{getDate(lastMessage.date)}</i>
                        </p>
                    </header>
                    <p className={"m-0"}>
                        <small className={"opacity-50"}>
                            {lastMessage.from === user.uid && "Вы: "}
                        </small>
                        {lastMessage.message}
                    </p>
                    <Link to={`/chat/${companion.uid}`}>Перейти к чату</Link>
                </div>
            </ListGroupItem>
        );
    }
};

export default ListMyChatsItem;
