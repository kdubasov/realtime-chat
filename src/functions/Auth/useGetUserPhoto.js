import {ref, listAll,getDownloadURL,getMetadata } from "firebase/storage";
import {useLayoutEffect, useState} from "react";
import {storageDB} from "../../database/database";

export const useGetUserPhoto = (userUid) => {
    //for file link
    const [photo,setPhoto] = useState({});
    //ref for database
    const listRef = ref(storageDB,`/usersPhoto/${userUid}/`);

    useLayoutEffect(() => {

        setPhoto({})

        listAll(listRef)
            .then(res => {
                res.items.forEach(itemRef => {
                    getDownloadURL(itemRef).then(elemLink => {
                        getMetadata(itemRef).then(elemMD => {
                            //получаем ссылку и метадату
                            setPhoto({link: elemLink, metaData: elemMD})
                        })
                    })
                })
            })
            .catch(() => setPhoto({}))

        //eslint-disable-next-line
    }, [userUid]);

    //удаляем повторяющиеся элементы массива
    return photo
}