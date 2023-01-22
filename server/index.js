const WebSocket = require('ws');

const wss = new WebSocket.Server({
        port: 7071
}, () => console.log("Server started."));

wss.on("connection",function connection(ws){
    ws.on("message",function (message){
        message = JSON.parse(message);
        switch (message.event) {
            case "message":
                broadcastMessage(message);
                break;

            case "connection":
                broadcastMessage(message);
                break;
        }
    })
})

//для отправки сообщения всем клиентам
const broadcastMessage = message => {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}