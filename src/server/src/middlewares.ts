import { Request, Response, NextFunction } from "express";
import {AuthenticatedRequest} from "./protocols";
import { validator } from "./joi-schemas";
import * as r from "./repositories";

export const validate = schema => (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const { error } = validator(schema, payload);

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send({
            message: "Unprocessable Entity",
            errors,
        });
    }

    next();
};

export const asyncError = handlerFn => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await handlerFn(req, res, next);
    } catch (err) {
        console.warn(err);
        res.status(500).send({
            message: "Internal Server Error"
        });
    }
};

export const authenticate = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).send({ message: "Unauthorized" });
    }

    const userInfo = await r.selectUserByToken(token);

    if (userInfo.rows.length === 0) {
        return res.status(401).send({ message: "Unauthorized" });
    }

    req.user = userInfo.rows[0];

    return next();
};
