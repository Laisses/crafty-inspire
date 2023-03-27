import styled from "styled-components";
import { COLORS, device } from "../constants";
import { MainButton } from "../components/MainButton";
import dummy from "../assets/dummy.jpg";

export const SignUp = () => {
    return (
        <Container>
            <LeftSide>
                <Image
                    src={dummy}
                    alt="Image of a dress form ornated with flowers"
                />
            </LeftSide>
            <RightSide>
            </RightSide>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;

const LeftSide = styled.div`
    height: 100vh;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.BACKGROUND.LIGHT_GREEN};

    @media ${device.mobileL} {
        display: none;
    }
`;

const RightSide = styled.div`
    height: 100vh;
    flex: 1;
`;

const Image = styled.img`
    border-radius: 20px;
    width: 360px;
    height: 540px;

    @media ${device.tablet} {
        width: 250px;
        height: 370px;
    }
`;