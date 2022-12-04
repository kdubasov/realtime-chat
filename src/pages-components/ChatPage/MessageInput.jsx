import React, {useState} from 'react';
import {Button, FormControl, InputGroup, Spinner} from "react-bootstrap";
import {addMessage} from "../../functions/Chat/addMessage";
import {useGetChatId} from "../../functions/Chat/useGetChatId";

const MessageInput = ({nowUser,companionData}) => {

    const [value,setValue] = useState("");

    const [spinner,setSpinner] = useState(false);

    //проверяем есть ли уже созданный чат
    const activeChatId = useGetChatId(nowUser.uid,companionData.uid);

    //set message in database
    const handleSendMessage = e => {
        e.preventDefault();
        setSpinner(true)
        addMessage(value,nowUser.uid,companionData.uid,activeChatId)
            .catch(() => alert("Ошибка отправки сообщения."))
            .finally(() => setSpinner(false))
        setValue("");
    }

    return (
        <InputGroup size={"sm"}>
            <FormControl
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={"Введите сообщение"}
            />

            <Button onClick={handleSendMessage}>
                {
                    spinner ?
                        <Spinner size={"sm"} variant={"light"} animation={"border"} /> :
                        "Отправить"
                }
            </Button>
        </InputGroup>
    );
};

export default MessageInput;
