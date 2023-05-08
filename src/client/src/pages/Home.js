import styled from "styled-components";
import { COLORS, device } from "../constants";
import { NavbarHome } from "../components/NavbarHome";
import { MainButton } from "../components/MainButton";
import { Link } from "react-router-dom";
import seal from "../assets/seal.jpg";
import sewing from "../assets/sewing.jpg";

export const Home = () => {
    return (
        <>
            <NavbarHome />
            <Container>
                <LeftSide>
                    <Title>
                        Create with confidence UPDATE test:
                        <br />
                        <ConstrastWord>never</ConstrastWord> forget a project again
                    </Title>
                    <Text>
                        Create and organize your crafting projects, whether you're into knitting, sewing, woodworking, or any other craft.
                    </Text>
                    <ButtonContainer to="sign-up">
                        <MainButton text="get started" />
                    </ButtonContainer>
                </LeftSide>
                <RightSide>
                    <ImageRigth
                        src={seal}
                        alt="Person making a wax seal"
                    />
                </RightSide>
                <ImageCenter
                    src={sewing}
                    alt="Person sewing"
                />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
`;

const LeftSide = styled.div`
    height: 100vh;
    flex: 1;
    display: flex;
    padding-top: 20px;
    flex-direction: column;

    @media ${device.mobileL} {
        height: auto;
    }
`;

const RightSide = styled.div`
    height: 100vh;
    padding-top: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${COLORS.BACKGROUND.ACCENT_GREY};

    @media ${device.mobileL} {
        display: none;
    }
`;

const Title = styled.h1`
    font-size: 50px;
    margin-left: 160px;
    margin-bottom: 30px;
    color: ${COLORS.TEXT.LIGHT_GREEN};

    @media ${device.tablet} {
        margin-left: 60px;
    }

    @media ${device.mobileL} {
        margin-left: 20px;
        font-size: 44px;
    }
`;

const ConstrastWord = styled.span`
    color: ${COLORS.TEXT.ACCENT_GREEN};
`;

const Text = styled.div`
    width: 350px;
    font-size: 28px;
    font-weight: 400;
    color: ${COLORS.TEXT.DARK_GREEN};
    margin-left: 160px;

    @media ${device.tablet} {
        margin-left: 60px;
    }

    @media ${device.mobileL} {
        margin-left: 20px;
        font-size: 28px;
    }
`;

const ButtonContainer = styled(Link)`
    margin-top: 40px;
    margin-left: 160px;

    @media ${device.tablet} {
        margin-left: 60px;
    }

    @media ${device.mobileL} {
        margin-left: auto;
        margin-right: auto;
    }
`;

const ImageRigth = styled.img`
    width: 260px;
    border-radius: 6px;
`;

const ImageCenter = styled.img`
    width: 380px;
    border-radius: 6px;

    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 20px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.tablet} {
        display: none;
    }
`;
