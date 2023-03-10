import { socketIoChatView } from "@controllers/ws/main.controller";
import * as express from "express";

let router = express.Router();
router.get("/socket-io-chat", socketIoChatView);

module.exports = router;
