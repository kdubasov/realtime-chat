import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {realtimeDB} from "../../database/database";

//for get data from realtime database
export const useGetChatId = (nowUserUid,companionUid) =>{

    const [data,setData] = useState("");

    useEffect(() =>{
        onValue(ref(realtimeDB,"/chats"),snapshot => {
            setData("")
            const dataInner = snapshot.val();
            if (dataInner){
                //eslint-disable-next-line
                Object.entries(dataInner,[]).map(elem => {
                    if (elem[0].includes(nowUserUid) && elem[0].includes(companionUid)){
                        setData(elem[0])
                    }
                })
            }else {
                return ""
            }
        })
        // eslint-disable-next-line
    },[nowUserUid,companionUid])

    return data;
}