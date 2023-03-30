import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MainButton } from "../components/MainButton";
import { COLORS, device } from "../constants";

export const Navbar = () => {
    return (
        <NavContainer>
            <NavHome>
                <Home to="/dashboard">
                    <Logo
                        src={logo}
                        alt="Logo do Crafty Inspire"
                    />
                </Home>
                <Projects to="/dashboard">My Projects</Projects>
            </NavHome>
            <NavInfo>
                <User>Hello, Laisse Lima</User>
                <MainButton
                    text="Sign Out"
                    width="90px"
                    height="36px"
                    fontSize="14px"
                />
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

    @media ${device.laptop} {
        padding: 15px 30px
    }

    @media ${device.mobileL} {
        flex-direction: column-reverse;
        padding-bottom: 0;
    }
`;

const NavHome = styled.div`
    display: flex;
    align-items: flex-end;

    @media ${device.mobileL} {
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

const Home = styled(Link)`
    margin-right: 60px;

    @media ${device.tablet} {
        margin-right: 30px;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

const Logo = styled.img`
    width: 120px;
    cursor: pointer;
`;

const Projects = styled(Link)`
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    color: ${COLORS.TEXT.DARK_GREEN};

    @media ${device.mobileL} {
        font-size: 20px;
        color: ${COLORS.TEXT.ACCENT_GREEN};
    }
`;

const NavInfo = styled.div`
    display: flex;
    align-items: center;

    @media ${device.mobileL} {
        justify-content: space-between;
    }
`;

const User = styled.p`
    font-size: 16px;
    color: ${COLORS.TEXT.DARK_GREEN};
    margin-right: 20px;

    @media ${device.mobileL} {
        margin-right: auto;
        font-size: 18px;
    }
`;