import * as dotenv from "dotenv";
import app from "./app";
import { port } from "@services/environments";
dotenv.config();

app.listen(port, () =>
  console.log(
    `🚀 Welcome! ${process.env.NODE_ENV} Server listinnig on port ${port}`
  )
);
