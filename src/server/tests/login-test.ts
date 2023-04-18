import { app } from "../src/server";
import supertest from "supertest";
import { connection } from "../src/database";
import { faker } from "@faker-js/faker";
import * as migrations from "../src/migrations";
import * as r from "../src/repositories";
import { generateValidBody, createUser } from "../src/factories/factories";

const api = supertest(app);

beforeAll(async () => {
    await migrations.run(connection, { verbose: false });
    await connection.query(`DELETE FROM sessions`);
    await connection.query(`DELETE FROM users`);
});

describe("POST /login", () => {

    it("should respond with 422 when body is not given", async () => {
        const res = await api.post("/login");

        expect(res.status).toBe(422);
    });

    it("should respond with 422 when body is not valid", async () => {
        const invalidBody = { [faker.lorem.word()]: faker.lorem.word() };

        const res = await api.post("/login").send(invalidBody);

        expect(res.status).toBe(422);
    });

    describe("when body is valid", () => {

        it("should respond with status 401 if email is incorrect", async () => {
            const body = generateValidBody();
            await createUser(body);
            const invalidEmail = {email: "invalid@email.com", password: body.password};

            const res = await api.post("/login").send(invalidEmail);

            expect(res.status).toBe(401);
            expect(res.body.message).toMatch("invalid username or password");
        });

        it("should respond with status 401 if email is incorrect", async () => {
            const body = generateValidBody();
            await createUser(body);
            const invalidPassword = {email: body.email, password: "invalidPassword"};

            const res = await api.post("/login").send(invalidPassword);

            expect(res.status).toBe(401);
            expect(res.body.message).toMatch("invalid username or password");
        });

        it("should respond with status 401 if user is already logged in", async () => {
            const body = generateValidBody();
            await createUser(body);
            const login = {email: body.email, password: body.password};

            const user = await r.selectUserByEmail(body.email)
            await r.createSession(user.rows[0].id);

            const res = await api.post("/login").send(login);

            expect(res.status).toBe(401);
            expect(res.body.message).toMatch("this account is already logged in");
        });

        it ("should respond with status 200 and return token when given e-mail and password are correct", async () => {
            const body = generateValidBody();
            await createUser(body);
            const user = await r.selectUserByEmail(body.email);
            const login = {email: body.email, password: body.password};

            const res = await api.post("/login").send(login);

            const userSession = await r.findSession(user.rows[0].id);
            const token = userSession.rows[0].token;

            expect(res.status).toBe(200);
            expect(res.body).toEqual({token});
        });

        it("should save new session on database", async () => {
            const body = generateValidBody();
            await createUser(body);

            const user = await r.selectUserByEmail(body.email);

            const login = {email: body.email, password: body.password};
            const res = await api.post("/login").send(login);

            const savedSession = await r.selectUserByToken(res.body.token);

            expect(user.rows[0].id).toBe(savedSession.rows[0].id);
        });
    });
});
