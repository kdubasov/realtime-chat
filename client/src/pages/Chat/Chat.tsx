import React, {useState, useRef} from 'react';
import {Button, Alert, Card, FormControl, ListGroup, ListGroupItem} from "react-bootstrap";
import {getGraphDate} from "../../functions/getDate";
import {IMessage, IUserConnect} from "./IChat";


const Chat:React.FC = () => {

    const [connected, setConnected] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");

    const [messages, setMessages] = useState<any>([]);
    const [value, setValue] = useState<string>("");
    const socket = useRef();
    
    const handleConnect = () => {
        // @ts-ignore
        socket.current = new WebSocket("ws://localhost:7071")

        //момент подключения
        // @ts-ignore
        socket.current.onopen = () => {
            setConnected(true)

            const message:IUserConnect = {
                event: "connection",
                userName,
                id: Date.now(),
                date: getGraphDate(Date.now()),
            }
            // @ts-ignore
            socket.current.send(JSON.stringify(message));

            console.log("Socket was open")
        }
        //момент получения сообщения
        // @ts-ignore
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            // @ts-ignore
            setMessages(prev => [message, ...prev])
        }
        //момент закрытия подключения
        // @ts-ignore
        socket.current.onclose = () => {
            console.log("Socket was closed")
        }
        //момент получения ошибки
        // @ts-ignore
        socket.current.onerror = () => {
            console.log("Socket error!")
        }
    }

    //send message
    const handleSend = () => {
        if (!value){
            alert("Enter message");
        }
        const message:IMessage = {
            event: "message",
            userName,
            id: Date.now(),
            date: getGraphDate(Date.now()),
            message: value,
        };
        // @ts-ignore
        socket.current.send(JSON.stringify(message));
        setValue("")
    }

    if (!connected){
        return (
            <Card>
                <FormControl
                    placeholder="Enter name"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <Button onClick={handleConnect}>Enter</Button>
            </Card>
        )
    }

    return (
        <div className={"Chat"}>
            <Card>
                <FormControl
                    placeholder="Enter message"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button onClick={handleSend}>Send</Button>
            </Card>
            <ListGroup className={"mt-3"}>
                {// @ts-ignore
                    messages.map(elem => (
                        <ListGroupItem key={elem.id}>
                            {
                                elem.event === "connection" ?
                                    <Alert variant={"success"} className={"small m-0 p-2"}>
                                        Пользователь {elem.userName} подключился. <br/>
                                        <i className="small">{elem.date}</i>
                                    </Alert>:
                                    <Alert className={"small m-0 p-2"}>
                                        {elem.userName} <br/>
                                        <i className="small">{elem.message}</i>
                                    </Alert>
                            }
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
        </div>
    );
};

export default Chat;
