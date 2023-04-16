import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes";
import { connection } from "./database";
import * as migrations from "./migrations";
import { db } from "./mock-data";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs } from "./schema";
import { query } from "./resolvers/query";
import { mutation } from "./resolvers/mutation";
dotenv.config();

export const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());
app.use(cors());

const apollo = new ApolloServer({
    typeDefs,
    resolvers: { ...query, ...mutation },
});

const main = async () => {
    routes(app);
    await migrations.run(connection);

    await apollo.start();
    app.use("/graphql", expressMiddleware(apollo, {
        context: async () => {
            return {
                db
            }
        }
    }));

    app.listen(PORT, () => {
        console.log(`server running on port: ${PORT}`);
    });
}

main();
