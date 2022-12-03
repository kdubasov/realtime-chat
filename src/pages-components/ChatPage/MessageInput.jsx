import React, {useState} from 'react';
import {Button, FormControl, InputGroup, Spinner} from "react-bootstrap";
import {addMessage} from "../../functions/Chat/addMessage";

const MessageInput = ({nowUser,companionData}) => {

    const [value,setValue] = useState("");

    const [spinner,setSpinner] = useState(false);

    //set message in database
    const handleSendMessage = e => {
        e.preventDefault();
        setSpinner(true)
        addMessage(value,nowUser.uid,companionData.uid)
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
