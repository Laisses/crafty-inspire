import { Request, Response } from "express";
import { AuthenticatedRequest, NewUser, UserLogin } from "./protocols";
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
            available: false,
            conflictMessage: "user is alredy registered"
        }
    }

    if (checkUsername.rows.length !== 0) {
        return {
            available: false,
            conflictMessage: "this username is already in use"
        }
    }

    return {
        available: true,
        conflictMessage: null
    };
};

export const registerUser = async (req: Request, res: Response) => {
    const user = req.body as NewUser;

    const isUserAvailable = await checkUserAvailability(user.email, user.username);

    if (!isUserAvailable.available) {
        return res.status(409).send({ message: isUserAvailable.conflictMessage })
    }

    const hashPassword = await bcrypt.hashSync(user.password, 10);

    const newUser = {
        ...user,
        password: hashPassword,
    };

    await r.InsertNewUser(newUser);
    return res.sendStatus(201);
};

const validateUser = async (email: string, password: String) => {
    const userExistis = await r.selectUserByEmail(email);
    const user = userExistis.rows[0];
    const validPassword = bcrypt.compareSync(password, user?.password || "");

    if (userExistis.rows.length === 0 || !validPassword) {
        return {
            validation: false,
            id: null,
            unauthorizedMessage: "invalid username or password"
        };
    }

    return {
        validation: true,
        id: user.id,
        unauthorizedMessage: null
    };
};

const checkForActiveSession = async (id: string) => {
    const openSession = await r.selectSessionByUserId(id);

    if (openSession.rows.length === 0) {
        return false;
    }

    return true;
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body as UserLogin;

    const validUser = await validateUser(email, password);

    if (!validUser.validation) {
        return res.status(401).send({ message: validUser.unauthorizedMessage });
    }

    const activeSession = await checkForActiveSession(validUser.id);

    if (activeSession) {
        return res.status(401).send({ message: "this account is already logged in" });
    }

    const token = await r.createSession(validUser.id);

    res.status(200).send(token.rows[0]);
};

export const endSession = async (req: AuthenticatedRequest, res: Response) => {
    const user_id = req.user.id
    await r.deleteSession(user_id);

    res.sendStatus(200)
};
