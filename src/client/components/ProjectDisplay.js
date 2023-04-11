import styled from "styled-components";
import { COLORS, device } from "../constants";
import { MainButton } from "./MainButton";
import { Link } from "react-router-dom";

export const ProjectDisplay = () => {
    return (
        <Container>
            <Title>Handmade Soap</Title>
            <Image
                src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFuZG1hZGUlMjBzb2FwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                alt="Image of the project"
            />
            <DetailsContainer>
                <DetailsTitle>Description</DetailsTitle>
                <DetailsText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non leo sagittis, mattis libero finibus, malesuada sapien. Sed rutrum augue mollis molestie varius. Pellentesque ut metus ac turpis suscipit condimentum nec sed justo. Ut sollicitudin, dui a volutpat venenatis, odio libero porta elit, at efficitur nibh justo ac mauris. Nullam faucibus eleifend semper. Ut at metus sem. Phasellus volutpat mollis interdum. Quisque est felis, commodo vel purus sed, lobortis lacinia ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </DetailsText>
                <DetailsTitle>Supplies</DetailsTitle>
                <DetailsText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non leo sagittis, mattis libero finibus, malesuada sapien. Sed rutrum augue mollis molestie varius. Pellentesque ut metus ac turpis suscipit condimentum nec sed justo. </p>
                </DetailsText>
                <DetailsTitle>Description</DetailsTitle>
                <DetailsText>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non leo sagittis, mattis libero finibus, malesuada sapien. Sed rutrum augue mollis molestie varius. Pellentesque ut metus ac turpis suscipit condimentum nec sed justo. Ut sollicitudin, dui a volutpat venenatis, odio libero porta elit, at efficitur nibh justo ac mauris. Nullam faucibus eleifend semper. Ut at metus sem. Phasellus volutpat mollis interdum. Quisque est felis, commodo vel purus sed, lobortis lacinia ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </DetailsText>
            </DetailsContainer>
            <ButtonContainer to="/dashboard">
                <MainButton
                    text="BACK"
                    background={COLORS.BUTTON.LIGHT_PINK}
                    width="100px"
                    height="38px"
                />
            </ButtonContainer>
        </Container>
    );
};


const Container = styled.div`
    background-color: #ffffff;
    border: 1px solid ${COLORS.CARD.LIGTH_GREY};
    border-radius: 6px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobileL} {
        border: none;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
`;

const Image = styled.img`
    max-width: 330px;
    border-radius: 6px;
    margin-bottom: 10px;
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media ${device.mobileL} {
        padding-left: 20px;
        padding-right: 10px;
    }
`;

const DetailsTitle = styled.h2`
    font-size: 16px;
    margin: 10px 0;
    color: ${COLORS.TEXT.DARK_GREEN};

    @media ${device.mobileL} {
        font-size: 20px;
        margin: 20px 0;
    }
`;

const DetailsText = styled.div`
    width: 500px;
    margin-bottom: 10px;

    p {
        font-size: 12px;
        color: ${COLORS.TEXT.DARK_GREEN};
    }

    @media ${device.mobileL} {
        width: 100%;

        p {
            font-size: 16px;
        }
    }
`;

const ButtonContainer = styled(Link)`
`;
