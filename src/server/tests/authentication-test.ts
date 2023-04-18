import { connection } from "../src/database";
import { faker } from "@faker-js/faker";
import * as migrations from "../src/migrations";
import * as r from "../src/repositories";
import { generateValidBody, createUser } from "../src/factories/factories";
import * as m from "../src/middlewares";
import { AuthenticatedRequest } from "../src/protocols";

beforeAll(async () => {
    await migrations.run(connection, { verbose: false });
    await connection.query(`DELETE FROM sessions`);
    await connection.query(`DELETE FROM users`);
});

describe("DELETE /session", () => {

    it("responds with 401 when given an empty 'Authorization'", async () => {
        const req = {
            headers: {
                authorization: ""
            }
        };

        let code;
        let body;
        const res = {
            status: c => ({
                send: b => {
                    code = c;
                    body = b;
                }
            })
        };

        await m.authenticate(req as any, res as any, null);
        expect(code).toEqual(401);
        expect(body.message).toEqual("Unauthorized");
    });

    it("responds with 401 when the token does not exist", async () => {
        const req = {
            headers: {
                authorization: "Bearer " + faker.datatype.uuid()
            }
        };

        let code;
        let body;
        const res = {
            status: c => ({
                send: b => {
                    code = c;
                    body = b;
                }
            })
        };

        await m.authenticate(req as any, res as any, null);
        expect(code).toEqual(401);
        expect(body.message).toEqual("Unauthorized");
    });

    it("responds with 401 when the token does not fgexist", async () => {

        const input = generateValidBody();
        await createUser(input);

        const user = await r.selectUserByEmail(input.email);

        const session = await r.createSession(user.rows[0].id);
        const token = session.rows[0].token;

        const req = {
            headers: {
                authorization: `Bearer ${token}`
            }
        };

        let callCount = 0;
        const next = () => {callCount++};

        await m.authenticate(req as any, null, next);
        expect(user.rows[0]).toMatchObject((req as AuthenticatedRequest).user)
        expect(callCount).toBe(1);

    });
});
