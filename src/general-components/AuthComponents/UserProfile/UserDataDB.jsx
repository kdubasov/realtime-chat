import React from 'react';
import {useGetUserPhoto} from "../../../functions/Auth/useGetUserPhoto";

const UserDataDB = ({data}) => {

    const userPhoto = useGetUserPhoto(data.uid);

    return (
        <div className={"UserDataDB"}>
            {
                !Object.values(userPhoto).length ?
                    <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg" alt=""/>:
                    <img src={userPhoto?.link} alt={data.name}/>
            }

            {data.name}
            {data.surname}
        </div>
    );
};

export default UserDataDB;
