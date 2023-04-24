import styled from "styled-components";
import { COLORS, device } from "../constants";
import { MainButton } from "./MainButton";
import { Link, useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../hooks";
import { useMutation } from "@apollo/client";
import ideas from "../assets/ideas.jpg";

export const ProjectDisplay = ({ project }) => {
    const navigate = useNavigate();
    const [deleteProjectMutation] = useMutation(DELETE_PROJECT, {
        update: (cache, _) => {
            cache.modify({
                fields: {
                    projects: (refs) =>
                        refs.filter(r => r.__ref !== `Project:${project.id}`)
                }
            })
        }
    });

    const deleteProject = () => {
        window.confirm("Are you sure you want to delete this projetc?");

        try {
            deleteProjectMutation({
                variables: {
                    deleteProjectId: project.id
                }
            });
            navigate("/dashboard");
        } catch (e) {
            alert("Something went wrong, try again later!");
        }
    };

    const editProject = () => {
        navigate(`/project/edit/${project.id}`);
    };

    return (
        <Container>
            <Title>{project.name}</Title>
            <DetailsTitle>{project.author}</DetailsTitle>
            <Image
                src={
                    project.image !== ""
                    ?
                    project.image
                    :
                    ideas
                }
                alt="Image of the project"
            />
            <DetailsTitle>{project.link}</DetailsTitle>
            <DetailsContainer>
                <DetailsTitle>Description</DetailsTitle>
                <DetailsText>
                    <p>{project.description}</p>
                </DetailsText>
                <DetailsTitle>Supplies</DetailsTitle>
                <DetailsText>
                    <p>{project.supplies}</p>
                </DetailsText>
                <DetailsTitle>Notes</DetailsTitle>
                <DetailsText>
                    <p>{project.notes}</p>
                </DetailsText>
            </DetailsContainer>
            <ButtonsContainer>
                <GoBackButton to="/dashboard">
                    <MainButton
                        text="go back"
                        width="80px"
                        height="34px"
                        color={COLORS.TEXT.DARK_GREEN}
                        background={COLORS.BACKGROUND.ACCENT_GREY}
                        textTransform="normal"
                        fontWeight="400"
                    />
                </GoBackButton>
                <EditButtons>
                    <ButtonContainer onClick={() => editProject()} >
                        <MainButton
                            text="edit"
                            background="#11633a"
                            width="80px"
                            height="34px"
                            textTransform="normal"
                            fontWeight="400"
                        />
                    </ButtonContainer>
                    <ButtonContainer onClick={() => deleteProject()}>
                        <MainButton
                            text="delete"
                            background="#c0392b"
                            width="80px"
                            height="34px"
                            textTransform="normal"
                            fontWeight="400"
                        />
                    </ButtonContainer>
                </EditButtons>
            </ButtonsContainer>
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
    font-size: 18px;
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
        font-size: 14px;
        font-weight: 300;
        color: ${COLORS.TEXT.DARK_GREEN};
    }

    @media ${device.mobileL} {
        width: 100%;

        p {
            font-size: 16px;
        }
    }
`;

const ButtonsContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`;

const GoBackButton = styled(Link)`
    margin-left: 20px;
`;

const EditButtons = styled.div`
    display: flex;
`;

const ButtonContainer = styled.div`
    margin-right: 20px;
`;
