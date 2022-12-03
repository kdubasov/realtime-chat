import {ref, uploadBytesResumable} from "firebase/storage";
import {storageDB} from "../../database/database";

export const addUserPhoto = (userId,image) => {
    let fileRef = ref(storageDB,`/usersPhoto/${userId}/${userId}`);
    uploadBytesResumable(fileRef,image)
        .then(() => console.log('Фото профиля загружено.'))
}