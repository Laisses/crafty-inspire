import { Request, Response, NextFunction } from "express";
import { validator } from "./joi-schemas";

export const validate = schema => (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const {error} = validator(schema, payload);

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
