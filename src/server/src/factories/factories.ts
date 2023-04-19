import { connection } from "../database";
import { faker } from "@faker-js/faker";
import * as r from "../repositories";
import bcrypt from "bcrypt";

export const generateValidBody = () => ({
    name: faker.name.firstName(),
    username: faker.internet.userName(),
    password: faker.internet.password(6),
    email: faker.internet.email(),
});

export const createUser = async ({ name, username, email, password } = generateValidBody()) => {
    const hashPassword = await bcrypt.hash(password, 10);

    return connection.query(`INSERT INTO users (id, name, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING id;`, [faker.datatype.uuid(), name, username, email, hashPassword]);
};

export const generateProject = () => ({
    description: faker.lorem.paragraph(),
    name: faker.company.name(),
});

export const createProject = async (user_id, project = generateProject()) => {
    return await r.createProject({ ...project, user_id });
};