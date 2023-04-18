import { Request } from "express";

export interface User {
    id: String,
    username: String,
    password: String,
    email: String,
    created_at: String
}

export interface NewUser {
    name: string,
    username: string,
    email: string,
    password: string,
}

export type AuthenticatedUser = {
    user: {
        id: String,
        name: String,
        email: String,
    }
}

export type AuthenticatedRequest = Request & AuthenticatedUser;
export type UserLogin = Omit<NewUser, "name" | "username">;

