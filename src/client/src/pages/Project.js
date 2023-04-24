import styled from "styled-components";
import { device, COLORS } from "../constants";
import { Navbar } from "../components/Navbar";
import { ProjectDisplay } from "../components/ProjectDisplay";
import { useParams } from "react-router-dom";
import { useProject } from "../hooks";

export const Project = () => {
    const { id } = useParams();
    const { data, loading, error } = useProject(id);

    const Display = () => {
        if (loading) {
            return <Text>Loading...</Text>;
        }

        if (error) {
            return <Text>Something went wrong, came back later!</Text>
        }

        const { project } = data;

        return (
            <ProjectDisplay project={project} />
        );
    };

    return (
        <>
            <Navbar />
            <Container>
                <ProjectContainer>
                    <Display />
                </ProjectContainer>
            </Container>
        </>
    );
};

const Container = styled.div`
    background-color: ${COLORS.BACKGROUND.LIGTH_GREY};
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 20px;

    @media ${device.mobileL} {
        background-color: #ffffff;
        padding-bottom: 0;
    }
`;

const ProjectContainer = styled.div`
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.tablet} {
        max-width: 700px;
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`;

const Text = styled.p`
    color: ${COLORS.TEXT.DARK_GREEN};
`;
