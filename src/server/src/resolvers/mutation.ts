import * as r from "../repositories";

const userOwnsProject = async (userID, projectID) => {
    const project = (await r.selectProjectByID(projectID)).rows[0];
    if (!project || project.user_id === userID) {
        return false;
    }
    return true;
};

export const mutation = {
    Mutation: {
        addProject: async (_parent, { input }, { user }) => {
            return (await r.createProject({ user_id: user.id, ...input })).rows[0];
        },
        updateProject: async (_parent, { input }, { user }) => {
            if (!await userOwnsProject(user.id, input.id)) {
                throw new Error("forbidden");
            }
            return await r.updateProject(input);
        },
        deleteProject: async (_parent, { id }, { user }) => {
            if (!await userOwnsProject(user.id, id)) {
                throw new Error("forbidden");
            }
            return await r.tx(async () => {
                const ret = await r.selectProjectByID(id);
                const exists = ret.rows.length !== 0;

                if (!exists) {
                    return false;
                }
                await r.deleteProject(id);
                return true;
            });
        },
    },
};
