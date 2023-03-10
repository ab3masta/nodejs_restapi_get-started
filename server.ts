import * as dotenv from "dotenv";

import {server} from "./app";
import { port } from "@services/environments";
dotenv.config();



server.listen(port, () =>
  console.log(
    `🚀 Welcome! ${process.env.NODE_ENV} Server listinnig on port ${port}`
  )
);
