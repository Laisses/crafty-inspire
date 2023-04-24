import { useQuery, gql } from "@apollo/client";

const GET_PROJECTS = gql`
    query {
        projects {
            id
            name
            image
            supplies
        }
    }
`;

const GET_PROJECT = gql`
    query getProject($id: ID!){
        project (id: $id) {
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
`;

export const CREATE_PROJECT = gql`
    mutation AddProject($input: AddProjectInput) {
        addProject(input: $input) {
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
`;

export const UPDATE_PROJECT = gql`
    mutation UpdateProject($input: UpdateProjectInput) {
        updateProject(input: $input) {
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
`;

export const DELETE_PROJECT = gql`
    mutation DeleteProject($deleteProjectId: ID!) {
        deleteProject(id: $deleteProjectId)
    }
`;

export const useProjects = () => {
    const { data, loading, error, refetch } = useQuery(GET_PROJECTS);

    return {
        data,
        loading,
        error,
        refetch
    };
};

export const useProject = id => {
    const { data, loading, error } = useQuery(GET_PROJECT, {
        variables: {
            id
        }
    });

    return {
        data,
        loading,
        error
    };
};
