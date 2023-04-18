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

describe("DELETE /session", () => {

    it("should respond with status 200 and remove users session", async () => {
        const body = generateValidBody();
            await createUser(body);
            const user = await r.selectUserByEmail(body.email);
            const user_id = user.rows[0].id;

            const session = await r.createSession(user_id);
            const token = session.rows[0].token;

            const res = await api.delete("/session").send(user_id).set("Authorization", `Bearer ${token}`);

            const checkSession = await r.findSession(user_id);

            expect(res.status).toBe(200);
            expect(checkSession.rows.length).toBe(0);
    });
});

