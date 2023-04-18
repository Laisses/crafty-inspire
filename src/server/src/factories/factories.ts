import { connection } from "../database";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateValidBody = () => ({
    name: faker.name.firstName(),
    username: faker.internet.userName(),
    password: faker.internet.password(6),
    email: faker.internet.email(),
});

export const createUser = async ({ name, username, email, password }) => {
    const hashPassword = await bcrypt.hash(password, 10);

    return connection.query(`INSERT INTO users (id, name, username, email, password) VALUES ($1, $2, $3, $4, $5);`, [faker.datatype.uuid(), name, username, email, hashPassword]);
};
