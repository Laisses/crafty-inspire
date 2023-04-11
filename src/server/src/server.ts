import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const main = () => {
    routes(app);

    app.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`);
    });
}

main();
