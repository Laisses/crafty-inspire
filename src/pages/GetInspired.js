import styled from "styled-components";
import { COLORS, device } from "../constants";
import { NavbarHome } from "../components/NavbarHome";
import journal from "../assets/journal.jpg";

export const GetInspired = () => {
    return (
        <>
            <NavbarHome getInspired="true" />
            <Container>
                <Image
                    src={journal}
                    alt="girl writing on a journal"
                />
                <Text>
                    We're working on this feature. Keep an eye on our website for update!
                </Text>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.tablet} {
        padding: 20px;
    }

    @media ${device.mobileL} {
        flex-direction: column-reverse;
        align-items: center;
        padding: 0;
    }
`;

const Image = styled.img`
    width: 400px;
    border-radius: 6px;

    @media ${device.tablet} {
        width: 360px;
    }
`;

const Text = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: ${COLORS.TEXT.DARK_GREEN};
    margin-top: 20px;
    margin-left: 60px;

    @media ${device.tablet} {
        margin-left: 30px;
    }

    @media ${device.mobileL} {
        margin: 0 0 20px 30px;
    }
`;
