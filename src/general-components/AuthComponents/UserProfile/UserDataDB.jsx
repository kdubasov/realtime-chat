import React from 'react';
import {useGetUserPhoto} from "../../../functions/Auth/useGetUserPhoto";

const UserDataDB = ({data}) => {

    const userPhoto = useGetUserPhoto(data.uid);

    return (
        <div className={"UserDataDB my-2 p-2 border"}>
            {
                !Object.values(userPhoto).length ?
                    <img width={150} src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg" alt=""/>:
                    <img width={150} src={userPhoto?.link} alt={data.name}/>
            }

            <p className={"small"}>
                {data.name}<br />
                {data.surname}
            </p>
        </div>
    );
};

export default UserDataDB;
