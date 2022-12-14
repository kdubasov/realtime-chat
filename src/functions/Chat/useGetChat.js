import {ref,onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {realtimeDB} from "../../database/database";

//for get data from realtime database
export const useGetChat = (nowUser,companion) =>{

    const [data,setData] = useState([]);

    const idDef = nowUser + "-" + companion;
    const idRev = companion + "-" + nowUser;

    useEffect(() =>{
        onValue(ref(realtimeDB,"/chats"),snapshot => {
            setData([])
            const dataInner = snapshot.val();
            if (dataInner){
                //eslint-disable-next-line
                Object.entries(dataInner,[]).map(elem => {
                    if (elem[0] === idRev || elem[0] === idDef){
                        setData(old => [...old,...Object.values(elem[1])])
                    }
                })
            }else {
                return []
            }
        })
        // eslint-disable-next-line
    },[nowUser,companion])

    return data;
}