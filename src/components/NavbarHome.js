import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MainButton } from "../components/MainButton";
import { COLORS, device } from "../constants";

export const NavbarHome = ({ clicked }) => {
    return (
        <NavContainer>
            <NavHome>
                <Home to="/dashboard">
                    <Logo
                        src={logo}
                        alt="Logo do Crafty Inspire"
                    />
                </Home>
                <Pages clicked={clicked} >Why Crafty Inspire?</Pages>
                <Pages clicked={clicked} >Get Inspired</Pages>
            </NavHome>
            <NavInfo>
                <ButtonContainer>
                    <MainButton
                        text="Sign in"
                        width="100px"
                        height="42px"
                        fontSize="14px"
                        fontWeight="400"
                        color={COLORS.TEXT.DARK_GREEN}
                        background={COLORS.BACKGROUND.ACCENT_GREY}
                        textTransform="normal"
                    />
                </ButtonContainer>
                <ButtonContainer to="sign-up">
                    <MainButton
                        text="Get Started"
                        width="120px"
                        height="42px"
                        fontSize="12px"
                    />
                </ButtonContainer>
            </NavInfo>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 60px;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.tablet} {
        padding: 15px 30px
    }

    @media ${device.mobileL} {
        flex-direction: column-reverse;
    }
`;

const NavHome = styled.div`
    display: flex;
    align-items: flex-end;

    @media ${device.mobileL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

const Home = styled(Link)`
    margin-right: 60px;

    @media ${device.mobileL} {
        margin: 0 auto 30px auto;
    }
`;

const Logo = styled.img`
    width: 120px;
    cursor: pointer;

    @media ${device.mobileL} {
        width: 180px;
    }
`;

const Pages = styled(Link)`
    font-size: 16px;
    font-weight: ${({ clicked }) => clicked ? "600" : "400"};
    text-decoration: none;

    padding: 10px;
    margin-right: 6px;

    cursor: pointer;
    border-radius: 6px;
    background-color: ${({ clicked }) => clicked ?
        COLORS.BACKGROUND.ACCENT_GREY : "none"};
    color: ${COLORS.TEXT.DARK_GREEN};

    @media ${device.tablet} {
        font-size: 14px;
    }

    @media ${device.mobileL} {
        font-size: 24px;
        color: ${COLORS.TEXT.ACCENT_GREEN};
        margin-bottom: 10px;
        &:active {
            background-color: ${COLORS.BACKGROUND.ACCENT_GREY};
        }
    }
`;

const NavInfo = styled.div`
    display: flex;
    align-items: center;

    @media ${device.mobileL} {
        display: none;
    }
`;

const ButtonContainer = styled(Link)`
    margin-left: 10px;
`;
