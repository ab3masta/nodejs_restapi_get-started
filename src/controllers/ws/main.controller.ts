import path from "path";
import { io } from "../../../app";
const socketIoChatView = async (req, res) => {
  return res.sendFile(path.resolve("src/views/socketioChat.html"));
};

const createNewEvent = (req, res) => {
  try {
    io.on("connection", (socket) => {
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
      socket.on(req.query.eventName, (msg) => {
        io.emit(req.query.eventName, msg);
      });
    });
    return res.status(201).json({ msg: "New Events successfully created." });
  } catch (error) {
    return res.status(500).json({ msg: "New Events successfully created." });
  }
};
export { socketIoChatView, createNewEvent };
