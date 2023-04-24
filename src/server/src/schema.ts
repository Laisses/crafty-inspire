export const typeDefs = `#graphql
    type Query {
        health: String!
        projects: [Project!]!
        project(id: ID!): Project
        projectByName(name: String): Project
    }

    type Mutation {
        addProject(input: AddProjectInput): Project!
        updateProject(input: UpdateProjectInput): Project!
        deleteProject(id: ID!): Boolean!
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

    input AddProjectInput {
        name: String!
        link: String
        image: String
        author: String
        description: String
        supplies: String
        notes: String
    }

    input UpdateProjectInput {
        id: ID!
        name: String
        link: String
        image: String
        author: String
        description: String
        supplies: String
        notes: String
    }
`;
