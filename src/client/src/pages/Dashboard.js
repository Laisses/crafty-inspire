import styled from "styled-components";
import { COLORS, device } from "../constants";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { Cards } from "../components/Cards";

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Container>
                <DashboardContainer>
                    <SearchBar />
                    <Cards />
                </DashboardContainer>
            </Container>
        </>
    );
};

const Container = styled.div`
    background-color: ${COLORS.BACKGROUND.LIGTH_GREY};
    height: 100vh;

    @media ${device.mobileL} {
        padding-top: 20px;
    }
`;

const DashboardContainer = styled.div`
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.tablet} {
        max-width: 700px;
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`;
