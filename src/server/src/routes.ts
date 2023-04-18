import { Express } from "express";
import * as h from "./handlers";
import * as m from "./middlewares";
import * as s from "./joi-schemas";

export const routes = (app: Express) => {
    app.get("/health", h.health);

    app.post("/register", m.validate(s.newUser), m.asyncError(h.registerUser));
    app.post("/login", m.validate(s.user), m.asyncError(h.login));
};
