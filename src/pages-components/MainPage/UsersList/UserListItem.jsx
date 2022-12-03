import React from 'react';
import {Badge, ListGroupItem} from "react-bootstrap";
import {useGetUserPhoto} from "../../../functions/Auth/useGetUserPhoto";
import {useUserAuth} from "../../../contexts/UserAuthContext";
import {useGetUser} from "../../../functions/Auth/useGetUser";
import {Link} from "react-router-dom";

const UserListItem = ({userData}) => {

    const { user } = useUserAuth();
    const userDbData = useGetUser(user?.uid);
    const userPhoto = useGetUserPhoto(userData?.uid);

    //check now user
    if(user && userData.uid === user.uid){
        return false
    }

    return (
        <ListGroupItem className={"d-flex align-items-center"}>
            {
                !Object.values(userPhoto).length ?
                    <img width={100} src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg" alt=""/>:
                    <img width={100} src={userPhoto?.link} alt={userData.name}/>
            }
            <div>
                <Badge className={"mx-2"}>
                    {userData.name + " " + userData.surname}
                </Badge>

                <br />

                {
                    Boolean(Object.values(userDbData).length) &&
                    <Link to={`/chat/${userData.uid}`} className={"m-2"}>
                        Написать сообщение
                    </Link>
                }
            </div>
        </ListGroupItem>
    );
};

export default UserListItem;
