import styled from "styled-components";
import { COLORS, device } from "../constants";
import { BsTagFill } from "react-icons/bs";

export const Card = () => {
    return (
        <CardContainer>
            <Title>Handmande Soap</Title>
            <DetailsContainer>
                <DetailsImage
                    src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZG1hZGUlMjBzb2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                    alt="Image of the project"
                />
                <Details>
                    <Supplies>
                        <ListTitle>Supplies:</ListTitle>
                        <Supply>goat milk</Supply>
                        <Supply>Essential Oil</Supply>
                        <Supply>Sharp Knife</Supply>
                    </Supplies>
                    <TagsContainer>
                        <BsTagFill width="24px" color={COLORS.BACKGROUND.LIGHT_GREEN} />
                        <Tags>Soap</Tags>
                    </TagsContainer>
                </Details>
            </DetailsContainer>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    width: 330px;
    height: 185px;
    background-color: #ffffff;

    margin: 14px;
    padding: 16px;

    border: 1px solid ${COLORS.CARD.LIGTH_GREY};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media ${device.tablet} {
        margin: 10px;
    }
`;

const Title = styled.h1`
    font-size: 16px;
    text-align: center;
    color: ${COLORS.CARD.DARK_GREEN};

    cursor: pointer;
`;

const DetailsContainer = styled.div`
    display: flex;

    margin-top: 15px;
`;

const DetailsImage = styled.img`
    width: 180px;
    height: 125px;
    border-radius: 6px;

    cursor: pointer;
`;

const Details = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Supplies = styled.ul`
    font-size: 13px;
    font-weight: 300;
`;

const ListTitle = styled.h2`
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 12px;
`;

const Supply = styled.li`
    font-size: 13px;
    font-weight: 300;
    padding-bottom: 6px;
`;

const TagsContainer = styled.div`
    display: flex;
`;

const Tags = styled.span`
    font-size: 12px;
    font-weight: 300;
    padding-left: 10px;
    color: ${COLORS.CARD.DARK_GREEN};
`;
