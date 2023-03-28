import styled from "styled-components";
import { COLORS, device } from "../constants";
import { SignUpForm } from "../components/SignUpForm";
import dummy from "../assets/dummy.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
                <Logo
                    src={logo}
                    alt="Crafty Inspire logo"
                />
                <Subtitle>Welcome to Crafty Inspire</Subtitle>
                <SignUpForm />
                <Paragraph>
                    Already have an account? <Underline to="/sign-in">Sign-in</Underline>
                </Paragraph>
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
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Logo = styled.img`
    width: 190px;
    height: 57px;

    cursor: pointer;

    margin-top: 20px;

    @media ${device.tablet} {
        width: 170px;
        height: 52px;
    }
`;

const Subtitle = styled.h1`
    margin: 30px 0;

    font-size: 24px;
    font-weight: 300;
    color: ${COLORS.FORM.DARK_GREY};

    @media ${device.tablet} {
        font-size: 18px;
    }
`;

const Paragraph = styled.p`
    font-size: 14px;
    color: ${COLORS.FORM.DARK_GREY};
    margin-top: 50px;
`;

const Underline = styled(Link)`
    color: ${COLORS.FORM.DARK_GREY};
    text-decoration: none;
    border-bottom: 1px solid ${COLORS.TEXT.LIGHT_GREEN};
    cursor: pointer;
`;
