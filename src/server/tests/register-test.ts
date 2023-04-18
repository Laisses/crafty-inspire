import { app } from "../src/server";
import supertest from "supertest";
import { connection } from "../src/database";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import * as migrations from "../src/migrations";

const api = supertest(app);

beforeAll(async () => {
    await migrations.run(connection, { verbose: false });
    await connection.query(`DELETE FROM users`);
});

describe("POST /register", () => {
    it("should respond with 422 when body is not given", async () => {
        const res = await api.post("/register");

        expect(res.status).toBe(422);
    });

    it("should respond with 422 when body is not valid", async () => {
        const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

        const res = await api.post("/register").send(invalidBody);

        expect(res.status).toBe(422);
    });

    describe("when body is valid", () => {
        const generateValidBody = () => ({
            name: faker.name.firstName(),
            username: faker.internet.userName(),
            password: faker.internet.password(6),
            email: faker.internet.email(),
        });

        const createUser = async ({ name, username, email, password }) => {
            const hashPassword = await bcrypt.hash(password, 10);

            return connection.query(`INSERT INTO users (id, name, username, email, password) VALUES ($1, $2, $3, $4, $5);`, [faker.datatype.uuid(), name, username, email, hashPassword]);
        };

        it("should respond with status 409 when there is an user with given email or username", async () => {
            const body = generateValidBody();
            await createUser(body);

            const res = await api.post("/register").send(body);

            expect(res.status).toBe(409);
            expect(res.body).toEqual(
                {
                    message: "this email or username is already registered"
                }
            );
        });

        it("should respond with status 201 and create user when given email and username are unique", async () => {
            const body = generateValidBody();

            const res = await api.post("/register").send(body);
            expect(res.status).toBe(201);
        });

        it("should save user on database", async () => {
            const body = generateValidBody();

            await api.post("/register").send(body);

            const user = await connection.query(`SELECT * FROM users WHERE email=$1;`, [body.email]);

            expect(user.rows[0].email).toBe(body.email);
        });
    });
});
