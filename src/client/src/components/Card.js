import styled from "styled-components";
import { COLORS, device } from "../constants";
import ideas from "../assets/ideas.jpg";
import { useNavigate } from "react-router-dom";

export const Card = project => {
    const {id, name, image, supplies} = project;
    const suppliesArray = supplies.split(", ");
    const navigate = useNavigate();

    const selectProject = () => {
        navigate(`/project/${id}`);
    };

    const Supply = ({item })=> {
        return (
            <SupplyStyle>
                {item}
                </SupplyStyle>
        );
    };

    return (
        <CardContainer onClick={() => selectProject()}>
            <Title>{name}</Title>
            <DetailsContainer>
                <DetailsImage
                    src=
                    {
                        image !== ''
                        ?
                        image
                        :
                        ideas
                    }
                    alt="Image of the project"
                />
                <Details>
                    <Supplies>
                        <ListTitle>Supplies:</ListTitle>
                        {suppliesArray.map((s, index) => <Supply key={index} item={s}/>)}
                    </Supplies>
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
    font-size: 18px;
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
`;

const Supplies = styled.ul`
    font-size: 13px;
    font-weight: 300;
`;

const ListTitle = styled.h2`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const SupplyStyle = styled.li`
    font-size: 13px;
    font-weight: 300;
    padding-bottom: 6px;
`;
