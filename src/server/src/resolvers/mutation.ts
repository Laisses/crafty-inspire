import { v4 as uuid } from "uuid";

export const mutation = {
    Mutation: {
        addTag: (_parent, { input }, { db }) => {
            const { name } = input;

            const newTag = {
                id: uuid(),
                name
            }

            db.tags.push(newTag);

            return newTag;
        },
        addProject: (_parent, { input }, { db }) => {
            const newProject = {
                ...input,
                id: uuid(),
            };

            db.projects.push(newProject);

            return newProject;
        },
        addTagToProject: (_parent, { input }, { db }) => {
            const {tag_id, project_id} = input;

            const tag = db.tags.find(t => t.id === tag_id).name;
            const project = db.projects.find(p => p.id === project_id);
            project.tags.push(tag);

            return project;
        },
        deleteProject: (_parent, { id }, { db }) => {
            db.projects = db.projects.filter(p => p.id !== id);
            return true;
        }
    },
};
