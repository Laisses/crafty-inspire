import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { SubmissionForm } from "../components/SubmissionForm";
import { COLORS, device } from "../constants";
import { useParams } from "react-router-dom";
import { useProject, UPDATE_PROJECT } from "../hooks";
import { useMutation } from "@apollo/client";

export const EditProject = () => {
    const { id } = useParams();
    const { data, loading, error } = useProject(id);

    const [updateProject] = useMutation(UPDATE_PROJECT);

    const Display = () => {
        if (loading) {
            return <Text>Loading...</Text>;
        }

        if (error) {
            return <Text>Something went wrong, came back later!</Text>
        }

        const { project } = data;

        const projectFields = {
            id: project.id,
            name: project.name,
            author: project.author,
            description: project.description,
            image: project.image,
            link: project.link,
            notes: project.notes,
            supplies: project.supplies
        };

        return (
            <SubmissionForm
                formTitle="Project"
                buttonText="save"
                project={projectFields}
                submitFn={updateProject}
            />
        );
    };

    return (
        <>
            <Navbar />
            <Container>
                <Display />
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

const Text = styled.p`
    color: ${COLORS.TEXT.DARK_GREEN};
`;
