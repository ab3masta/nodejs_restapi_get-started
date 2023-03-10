import express from "express";
import cors from "cors";
import * as errorHandlers from "@handlers/errorHandlers";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("@routes/main.routes"));
app.use(errorHandlers.notFound);

export default app;
