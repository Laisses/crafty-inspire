import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import styled from "styled-components";
import { device } from "../constants";

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <DashboardContainer>
                <SearchBar />
            </DashboardContainer>
        </>
    );
};

const DashboardContainer = styled.div`
    height: 100vh;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;

    @media ${device.tablet} {
        max-width: 700px;
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`;