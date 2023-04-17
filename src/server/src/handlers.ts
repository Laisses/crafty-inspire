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

    if (checkEmail.rows[0] || checkUsername.rows[0]) {
        return false;
    }

    return true;
};

export const registerUser = async (req: Request, res: Response) => {
    const user = req.body as NewUser;

    const isUserAvailable = await checkUserAvailability(user.email, user.username);

    if (!isUserAvailable) {
        return res.status(409).send({message: "this email or username is already registered"})
    }

    const hashPassword = await bcrypt.hashSync(user.password, 10);

    const newUser = {
        ...user,
        password: hashPassword,
    };

    await r.InsertNewUser(newUser);
    return res.sendStatus(201);
};
