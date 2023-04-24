import * as r from "../repositories";

export const query = {
    Query: {
        health: () => {
            return "OK";
        },
        projects: async (_parents, _args, { user }) => {
            return (await r.selectProjectsByUserID(user.id)).rows;
        },
        project: async (_parents, args, _context) => {
            const { id } = args;
            return (await r.selectProjectByID(id)).rows[0];
        },
        projectByName: async ({ _parents, args, _context }) => {
            const { name } = args;
            return (await r.selectProjectByName(name)).rows;
        },
    },
};
