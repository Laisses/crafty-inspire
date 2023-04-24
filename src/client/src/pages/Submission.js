import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { SubmissionForm } from "../components/SubmissionForm";
import { COLORS, device } from "../constants";
import { CREATE_PROJECT } from "../hooks";
import { useMutation, gql } from "@apollo/client";

export const Submission = () => {
    const project = { name: "", link: "", image: "", author: "", description: "", supplies: "", notes: "" };

    const [createProject] = useMutation(CREATE_PROJECT, {
        update: (cache, { data: { addProject }}) => {
            cache.modify({
                fields: {
                    projects: (refs) => [
                        ...refs,
                        cache.writeFragment({
                            data: addProject,
                            fragment: gql`
                                fragment NewProject on Project {
                                    id
                                    name
                                    link
                                    image
                                    author
                                    description
                                    supplies
                                    notes
                                }
                            `,
                        }),
                    ],
                }
            })
        },
    });

    return (
        <>
            <Navbar />
            <Container>
                <SubmissionForm
                    formTitle="Create New Project"
                    buttonText="create"
                    project={project}
                    submitFn={createProject}
                    />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;

    background-color: ${COLORS.BACKGROUND.LIGTH_GREY};

    @media ${device.mobileL} {
        background-color: #ffffff;
    }
`;
