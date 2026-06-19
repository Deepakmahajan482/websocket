import { WebSocketServer, WebSocket } from "ws";
import { createServer } from "http";
const server = createServer();
const wss = new WebSocketServer({
    server,
});
let allSocket = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsed = JSON.parse(message.toString());
        if (parsed.type === "Join") {
            allSocket.push({
                socket,
                roomId: parsed.payload.roomId,
                name: parsed.payload.name,
            });
        }
        if (parsed.type === "chat") {
            let currentUser = null;
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i]?.socket === socket) {
                    // @ts-ignore
                    currentUser = allSocket[i];
                    break;
                }
            }
            if (!currentUser)
                return;
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i]?.roomId === currentUser.roomId &&
                    allSocket[i]?.socket !== socket) {
                    allSocket[i]?.socket.send(`${currentUser.name} : ${parsed.payload.message}`);
                }
            }
        }
    });
    socket.on("close", () => {
        allSocket = allSocket.filter((user) => user.socket !== socket);
    });
});
const PORT = Number(process.env.PORT) || 8080;
server.listen(PORT, () => {
    console.log(`WebSocket server running on ${PORT}`);
});
//# sourceMappingURL=index.js.map