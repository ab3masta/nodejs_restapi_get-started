import express from "express";
import cors from "cors";
const http = require("http");
import * as errorHandlers from "@handlers/errorHandlers";
//
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("@routes/main.routes"));
app.use(require("@routes/ws/main.routes"));
app.use(errorHandlers.notFound);
//

const server = http.createServer(app);
//
const io = new Server(server);
// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });
// });
export { server, app, io };
