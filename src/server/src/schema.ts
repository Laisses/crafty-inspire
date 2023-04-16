export const typeDefs = `#graphql
    type Query {
        health: String!
        tags: [Tag!]!
        projects: [Project!]!
        project(id: ID!): Project
        projectsByTag(tag: String!): [Project!]!
    }

    type Mutation {
        addTag(input: AddTagInput): Tag!
        addProject(input: AddProjectInput): Project!
        addTagToProject(input: addTagToProjectInput): Project!
        deleteProject(id: ID!): Boolean!
    }

    type Tag {
        id: ID!
        name: String!
    }

    type Project {
        id: ID!
        name: String!
        link: String
        image: String
        author: String
        description: String
        supplies: String
        notes: String
        tags: [String!]!
    }

    input AddTagInput {
        name: String!
    }

    input AddProjectInput {
        name: String!
        link: String
        image: String
        author: String
        description: String
        supplies: String
        notes: String
    }

    input addTagToProjectInput {
        tag_id: ID!
        project_id: ID!
    }
`;
