import { QueryResult } from "pg";
import { connection } from "./database";
import { NewUser, User, AuthenticatedUser } from "./protocols";
import { v4 as uuid } from "uuid";

export const tx = async bodyFn => {
    try {
        await connection.query("BEGIN  TRANSACTION;");
        const ret = await bodyFn();
        await connection.query("COMMIT TRANSACTION;");
        return ret;
    } catch (e) {
        await connection.query("ROLLBACK;");
        throw e;
    }
};

export const selectUserByEmail = (email: string): Promise<QueryResult<User>> => {
    return connection.query(`SELECT * FROM users WHERE email=$1;`, [email]);
};

export const selectUserByUsername = (username: String): Promise<QueryResult<User>> => {
    return connection.query(`SELECT * FROM users WHERE username=$1;`, [username]);
};

export const InsertNewUser = ({name, username, email, password}): Promise<QueryResult<NewUser>> => {
    return connection.query(`INSERT INTO users (id, name, username, email, password) VALUES ($1, $2, $3, $4, $5);`, [uuid(), name, username, email, password]);
};

export const selectSessionByUserId = (user_id: String): Promise<QueryResult<String>> => {
    return connection.query(`SELECT token FROM sessions WHERE user_id=$1;`, [user_id]);
};

export const createSession = (user_id: String) => {
    return connection.query(`INSERT INTO sessions (id, user_id, token) VALUES ($1, $2, $3) RETURNING token;`, [uuid(), user_id, uuid()]);
};

export const selectUserByToken = (token: String) => {
    return connection.query(`
        SELECT
            u.name,
            u.email,
            u.id
        FROM
            sessions as s
        JOIN
            users as u
        ON
            s.user_id = u.id
        WHERE
            token=$1
        ;`,
    [token]);
};

export const deleteSession = (id: String) => {
    return connection.query(`DELETE FROM sessions WHERE user_id=$1;`, [id]);
};

export const findSession = (user_id: String) => {
    return connection.query(`SELECT * FROM sessions WHERE user_id=$1;`, [user_id]);
};

export const selectProjectsByUserID = (id: String) => {
    return connection.query(`SELECT * FROM projects WHERE user_id=$1`, [id]);
};

export const selectProjectByID = (id: String) => {
    return connection.query(`SELECT * FROM projects WHERE id=$1;`, [id]);
};

export const createProject = ({
    user_id,
    name,
    link,
    image,
    author,
    description,
    supplies,
    notes,
}: {
    user_id: string,
    name: string,
    link?: string,
    image?: string,
    author?: string,
    description?: string,
    supplies?: string,
    notes?: string,
}) => {
    return connection.query(`
        INSERT INTO projects (
            id,
            user_id,
            name,
            link,
            image,
            author,
            description,
            supplies,
            notes
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id;
    `, [uuid(),
        user_id,
        name,
        link,
        image,
        author,
        description,
        supplies,
        notes,
    ]);
};

export const updateProject = ({
    id,
    name,
    link,
    image,
    author,
    description,
    supplies,
    notes,
}: {
    id: String,
    name?: string,
    link?: string,
    image?: string,
    author?: string,
    description?: string,
    supplies?: string,
    notes?: string,
}) => {
    return connection.query(`
        UPDATE
            projects
        SET
            name=$1,
            link=$2,
            image=$3,
            author=$4,
            description=$5,
            supplies=$6,
            notes=$7
        WHERE
            id=$8;
    `, [name,
        link,
        image,
        author,
        description,
        supplies,
        notes,
        id
    ]);
};

export const deleteProject = (id: String) => {
    return connection.query(`DELETE FROM projects WHERE id=$1;`, [id]);
};
