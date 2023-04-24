import styled from "styled-components";
import { Card } from "./Card";
import { COLORS } from "../constants";
import { useProjects } from "../hooks";
import { useEffect } from "react";

export const Cards = () => {
    const { data, loading, error, refetch } = useProjects();

    const Display = () => {
        if (loading) {
            return <Text>Loading...</Text>;
        }

        if (error) {
            return <Text>Something went wrong, came back later!</Text>
        }

        const { projects } = data;
        if (projects.length === 0) {
            return <Text>You haven't saved any projects yet</Text>;
        }

        return (
            projects.map(p => <Card
                key={p.id}
                {...p}
            />)
        );

    };

    return (
        <CardsContainer>
            <Display />
        </CardsContainer>
    );
};

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Text = styled.p`
    color: ${COLORS.TEXT.DARK_GREEN};
`;
