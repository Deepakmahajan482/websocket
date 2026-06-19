import { WebSocketServer, WebSocket } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
let allSocket = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsed = JSON.parse(message);
        if (parsed.type == 'Join') {
            allSocket.push({ socket,
                roomId: parsed.payload.roomId,
                name: parsed.payload.name
            });
        }
        if (parsed.type == 'chat') {
            let currentUser = null;
            for (let i = 0; i < allSocket.length; i++) {
                if (socket === allSocket[i]?.socket) {
                    currentUser = allSocket[i] || null;
                }
            }
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i]?.roomId === currentUser?.roomId && allSocket[i]?.socket != socket) {
                    allSocket[i]?.socket.send(`${currentUser?.name} : ${parsed.payload.message}`);
                }
            }
        }
    });
    socket.on("disconnect", (message) => {
        allSocket = allSocket.filter(s => s.socket != socket);
    });
});
//# sourceMappingURL=index.js.map