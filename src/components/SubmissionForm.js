import styled from "styled-components";
import { COLORS, device } from "../constants";
import { MainButton } from "./MainButton";

export const SubmissionForm = () => {
    return (
        <FormContainer>
            <Form>
                <TitleContainer>
                    <FormTitle>Create New Project</FormTitle>
                </TitleContainer>
                <TextLabel htmlFor="project-name">Project Name</TextLabel>
                <TextInput
                    type="text"
                    id="project-name"
                    name="project-name"
                    required
                />
                <TextLabel htmlFor="html">Video or Blog post</TextLabel>
                <TextInput
                    type="text"
                    id="html"
                    name="html"
                    placeholder="https/..."
                    required
                />
                <TextLabel htmlFor="file">Image</TextLabel>
                <ImageContainer>
                    <ImageBackground>
                    </ImageBackground>
                    <ChangeImageButton>
                        <FileLabel htmlFor="file">Change Image</FileLabel>
                        <FileInput id="file" type="file" />
                    </ChangeImageButton>
                </ImageContainer>
                <TextLabel htmlFor="author">Author</TextLabel>
                <TextInput
                    type="text"
                    id="author"
                    name="author"
                    required
                />
                <TextLabel htmlFor="description">Description</TextLabel>
                <TextAreaInput
                    id="description"
                    name="description"
                ></TextAreaInput>
                <TextLabel htmlFor="supplies">Supplies
                    <TitleComment> (separate with comma)</TitleComment>
                </TextLabel>
                <TextAreaInput
                    id="supplies"
                    name="supplies"
                ></TextAreaInput>
                <TextLabel htmlFor="notes">Notes
                    <TitleComment> (anything you want to remember)</TitleComment>
                </TextLabel>
                <TextAreaInput
                    id="notes"
                    name="notes"
                ></TextAreaInput>
                <TextLabel htmlFor="keywords"> Keywords
                    <TitleComment> (separate with comma)</TitleComment>
                </TextLabel>
                <TextInput
                    type="text"
                    id="keywords"
                    name="keywords"
                />
                <ButtonContainer>
                    <MainButton
                        text="create"
                        background={COLORS.BUTTON.LIGHT_PINK}
                        width="110px"
                        height="40px"
                        fontSize="14px"
                    />
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
};

const FormContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 12px 20px;

    width: 800px;

    background-color: #FFFFFF;
    border: 1px solid ${COLORS.CARD.LIGTH_GREY};
    border-radius: 6px;

    @media ${device.tablet} {
        width: 600px;
    }

    @media ${device.mobileL} {
        width: 100%;
        border: none;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    border-bottom: 1px solid ${COLORS.FORM.LIGTH_GREY};
    margin-bottom: 20px;
`;

const FormTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: ${COLORS.TEXT.DARK_GREEN};

    padding: 14px;
`;

const TextLabel = styled.label`
    font-size: 14px;
    font-weight: 500;

    color: ${COLORS.FORM.DARK_GREY};
`;

const TextInput = styled.input`
    width: 100%;
    height: 30px;

    margin-top: 10px;
    margin-bottom: 30px;
    padding-left: 10px;

    background-color: #ffffff;
    border: none;
    border: 1px solid ${COLORS.FORM.LIGTH_GREY};
    border-radius: 6px;

    &:focus {
        outline: none;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const ImageBackground = styled.div`
    width: 260px;
    height: 150px;

    background-color: #ffffff;
    border: 1px solid ${COLORS.FORM.LIGTH_GREY};
    border-radius: 6px;
`;

const ChangeImageButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${COLORS.BUTTON.LIGHT_PINK};
    border-radius: 6px;

    width: 110px;
    height: 30px;
    margin-left: 50px;

    @media ${device.mobileL} {
        width: 140px;
        height: 40px;
    }
`;

const FileLabel = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;

    cursor: pointer;
`;

const FileInput = styled.input`
    display: none;
`;

const TextAreaInput = styled.textarea`
    width: 100%;
    height: 80px;

    margin-top: 10px;
    margin-bottom: 30px;
    padding: 10px;

    background-color: #ffffff;
    border: none;
    border: 1px solid ${COLORS.FORM.LIGTH_GREY};
    border-radius: 6px;

    resize: none;

    &:focus {
        outline: none;
    }
`;

const TitleComment = styled.span`
    color: #969696;
`;

const ButtonContainer = styled.div`
    align-self: center;
`;
