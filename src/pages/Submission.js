import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { SubmissionForm } from "../components/SubmissionForm";
import { COLORS, device } from "../constants";

export const Submission = () => {
    return (
        <>
            <Navbar />
            <Container>
                <SubmissionForm />
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
