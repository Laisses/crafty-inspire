import styled from "styled-components";
import { Card } from "./Card";

export const Cards = () => {
    return (
        <CardsContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CardsContainer>
    );
};

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;