import { Request, Response } from "express";
import { NewUser, UserLogin, User } from "./protocols";
import * as r from "./repositories";
import bcrypt from "bcrypt";

export const health = (_req: Request, res: Response) => {
    res.status(200).send("OK");
};

const checkUserAvailability = async (email: string, username: String) => {
    const checkEmail = await r.selectUserByEmail(email);
    const checkUsername = await r.selectUserByUsername(username);

    if (checkEmail.rows.length !== 0) {
        return {
            conflictMessage: "user is alredy registered"
        }
    }

    if (checkUsername.rows.length !== 0) {
        return {
            conflictMessage: "this username is already in use"
        }
    }

    return {available: true};
};

export const registerUser = async (req: Request, res: Response) => {
    const user = req.body as NewUser;

    const isUserAvailable = await checkUserAvailability(user.email, user.username);

    if (isUserAvailable.conflictMessage) {
        return res.status(409).send(isUserAvailable.conflictMessage)
    }

    const hashPassword = await bcrypt.hashSync(user.password, 10);

    const newUser = {
        ...user,
        password: hashPassword,
    };

    await r.InsertNewUser(newUser);
    return res.sendStatus(201);
};
