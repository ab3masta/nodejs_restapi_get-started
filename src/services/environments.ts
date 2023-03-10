import * as dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

const port = process.env.PORT || PORT;

export { port };
