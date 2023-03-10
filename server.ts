import * as dotenv from "dotenv";
const http = require('http');
import app from "./app";
import { port } from "@services/environments";
dotenv.config();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(port, () =>
  console.log(
    `🚀 Welcome! ${process.env.NODE_ENV} Server listinnig on port ${port}`
  )
);
