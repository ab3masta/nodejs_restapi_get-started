import * as express from "express";
import { home } from "@controllers/main.controller";

let router = express.Router();
router.get("/", home);

module.exports = router;
