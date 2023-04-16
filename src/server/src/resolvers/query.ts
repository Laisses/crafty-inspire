export const query = {
    Query: {
        health: () => {
            return "OK";
        },
        tags: (_parents, _args, { db }) => {
            return db.tags;
        },
        projects: (_parents, _args, { db }) => {
            return db.projects;
        },
        project: (_parents, args, { db }) => {
            const { id } = args;

            return db.projects.find(project => project.id === id);
        },
        projectsByTag: (_parents, args, { db }) => {
            const { tag } = args;

            return db.projects.filter(project => project.tags.includes(tag));
        },
    },
};
