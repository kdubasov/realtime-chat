import {set,ref} from "firebase/database";
import {addUserPhoto} from "./addUserPhoto";
import {realtimeDB} from "../../database/database";

export const addUserData = (user,data) => {

    console.log(user,data)

    const url = `/users/${user.uid}`;

    //add photo in storage
    if (data.photo){
        addUserPhoto(user.uid,data.photo)
    }

    return set(ref(realtimeDB, url),{
        uid: user.uid,
        name: data.name,
        surname: data.surname,
        dateRegistration: Date.now(),
    })
}