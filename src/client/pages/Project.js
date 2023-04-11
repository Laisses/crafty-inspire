import styled from "styled-components";
import { device, COLORS } from "../constants";
import { Navbar } from "../components/Navbar";
import { ProjectDisplay } from "../components/ProjectDisplay";

export const Project = () => {
    return (
        <>
            <Navbar />
            <Container>
                <ProjectContainer>
                    <ProjectDisplay />
                </ProjectContainer>
            </Container>
        </>
    );
};

const Container = styled.div`
    background-color: ${COLORS.BACKGROUND.LIGTH_GREY};
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
