import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema";
import { query } from "./resolvers/query";
import { mutation } from "./resolvers/mutation";
import { db } from "./mock-data";
import dotenv from "dotenv";
dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers: { ...query, ...mutation },
});

const PORT = Number(process.env.PORT) || 5000;

const main = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: {port: PORT},
        context: async () => {
            return {
                db
            }
        }
    });
    console.log(`🚀 Server ready at: ${url}`);
};
main();


/* import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes";
import * as migrations from "./migrations";
dotenv.config();

export const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const main = async () => {
    routes(app);

    await migrations.run();

    app.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`);
    });
}

main(); */
