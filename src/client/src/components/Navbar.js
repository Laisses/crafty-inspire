import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import logo from "../assets/logo.png";
import { MainButton } from "../components/MainButton";
import { BASE_URL, COLORS, device } from "../constants";

export const Navbar = () => {
    const { user } = useContext(AppContext);
    const navigate = useNavigate();

    const logout = async () => {
        const config = { headers: { Authorization: `Bearer ${user?.token}` } };

        try {
            await axios.delete(`${BASE_URL}/session`, config);
            navigate("/");
        } catch (err) {
            alert("something went wrong, try again later!");
        }
    };

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
                <User>Hello, {user?.name}</User>
                <MainButton
                    onClick={logout}
                    text="Logout"
                    width="90px"
                    height="36px"
                    fontSize="14px"
                    textTransform="none"
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