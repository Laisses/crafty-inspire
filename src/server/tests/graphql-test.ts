import { createUser, createProject } from "../src/factories/factories";
import { app, build } from "../src/server";
import supertest from "supertest";
import * as r from "../src/repositories";

const api = supertest(app);

beforeAll(async () => {
    await build();
});

describe("", () => {
    it("", async () => {
        const userID = (await createUser()).rows[0].id;
        const projectID = (await createProject(userID)).rows[0].id;
        const token = (await r.createSession(userID)).rows[0].token;

        const res = await api
            .post("/graphql")
            .set("Authorization", "Bearer " + token)
            .send({
            query: `
                query($projectID: ID!) {
                    health
                    projects {
                        id
                        name
                        link
                        image
                        author
                        description
                        supplies
                        notes
                    }
                    project(id: $projectID) {
                        id
                        name
                        link
                        image
                        author
                        description
                        supplies
                        notes
                    }
                }
            `,
            variables: {
                projectID,
            },
        });

        const dbProjects = (await r.selectProjectsByUserID(userID)).rows;
        const projects = dbProjects.map(({ id, name, description }) => ({
            id, name, description,
        }));
        const expected = {
            data: {
                health: "OK",
                projects,
                project: projects[0],
            }
        };

        expect(res.status).toBe(200);
        expect(res.body).toMatchObject(expected);
    });
});