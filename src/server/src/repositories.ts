import { QueryResult } from "pg";
import { connection } from "./database";
import { NewUser, UserLogin, User } from "./protocols";
import { v4 as uuid } from "uuid";


export const selectUserByEmail = (email: string): Promise<QueryResult<User>> => {
    return connection.query(`SELECT FROM users WHERE email=$1;`, [email]);
};

export const selectUserByUsername = (username: String): Promise<QueryResult<User>> => {
    return connection.query(`SELECT FROM users WHERE username=$1;`, [username]);
};

export const InsertNewUser = ({name, username, email, password}): Promise<QueryResult<NewUser>> => {
    return connection.query(`INSERT INTO users (id, name, username, email, password) VALUES ($1, $2, $3, $4, $5);`, [uuid(), name, username, email, password]);
};
