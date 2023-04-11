import { Express } from "express";
import * as h from "./handlers";

export const routes = (app: Express) => {
    app.get("/health", h.health);
};
