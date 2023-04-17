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

export type UserLogin = Omit<NewUser , "name" | "username">;
