import { app, build } from "../src/server";
import supertest from "supertest";
import { connection } from "../src/database";
import { faker } from "@faker-js/faker";
import * as migrations from "../src/migrations";
import { generateValidBody, createUser } from "../src/factories/factories";

const api = supertest(app);

beforeAll(async () => {
    await build();
    await migrations.run(connection, { verbose: false });
    await connection.query(`DELETE FROM sessions`);
    await connection.query(`DELETE FROM projects;`);
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

        it("should respond with status 409 when the email is already in use", async () => {
            const body = generateValidBody();
            await createUser(body);
            const user = { ...body, username: "Test" }

            const res = await api.post("/register").send(user);

            expect(res.status).toBe(409);
            expect(res.body.message).toMatch("user is alredy registered");
        });

        it("should respond with status 409 when the username is already in use", async () => {
            const body = generateValidBody();
            await createUser(body);

            const user = { ...body, email: "teste@email.com" }

            const res = await api.post("/register").send(user);

            expect(res.status).toBe(409);
            expect(res.body.message).toMatch("this username is already in use");
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
