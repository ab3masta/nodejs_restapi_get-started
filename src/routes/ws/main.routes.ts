import { socketIoChatView,createNewEvent } from "@controllers/ws/main.controller";
import * as express from "express";

let router = express.Router();
router.get("/socket-io-chat", socketIoChatView);
router.post("/create-new-event", createNewEvent);

module.exports = router;
