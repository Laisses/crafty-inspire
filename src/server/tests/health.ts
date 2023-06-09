import { app, build } from "../src/server";
import supertest from "supertest";

const api = supertest(app);

beforeAll(async () => {
    await build();
});

describe("GET /health", () => {
    it("should respond with status 200 and 'OK'", async () => {
        const health = await api.get("/health");
        expect(health.status).toBe(200);
        expect(health.text).toBe("OK");
    });
});
