import styled from "styled-components";
import { COLORS, device } from "../constants";
import { MainButton } from "./MainButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SubmissionForm = ({ formTitle, buttonText, project, submitFn }) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(project);
    const navigate = useNavigate();

    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitForm = e => {
        e.preventDefault();

        setLoading(true);

        try {
            submitFn({
                variables: {
                    input: form
                }
            });
            setLoading(false);
            navigate("/dashboard");
        } catch (e) {
            alert("Something went wrong, try again later!");
            setLoading(false);
        }
    };

    return (
        <FormContainer>
            <Form>
                <TitleContainer>
                    <FormTitle>{formTitle}</FormTitle>
                </TitleContainer>
                <TextLabel htmlFor="name">Project Name</TextLabel>
                <TextInput
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    disabled={loading}
                    required
                />
                <TextLabel htmlFor="link">Video or Blog post</TextLabel>
                <TextInput
                    type="text"
                    id="link"
                    name="link"
                    placeholder="https/..."
                    value={form.link}
                    onChange={handleForm}
                    disabled={loading}
                />
                <TextLabel htmlFor="image">Image</TextLabel>
                <TextInput
                    type="text"
                    id="image"
                    name="image"
                    placeholder="https/..."
                    value={form.image}
                    onChange={handleForm}
                    disabled={loading}
                />
                <TextLabel htmlFor="author">Author</TextLabel>
                <TextInput
                    type="text"
                    id="author"
                    name="author"
                    value={form.author}
                    onChange={handleForm}
                    disabled={loading}
                />
                <TextLabel htmlFor="description">Description</TextLabel>
                <TextAreaInput
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleForm}
                    disabled={loading}
                ></TextAreaInput>
                <TextLabel htmlFor="supplies">Supplies
                    <TitleComment> (separate with comma)</TitleComment>
                </TextLabel>
                <TextAreaInput
                    id="supplies"
                    name="supplies"
                    value={form.supplies}
                    onChange={handleForm}
                    disabled={loading}
                ></TextAreaInput>
                <TextLabel htmlFor="notes">Notes
                    <TitleComment> (anything you want to remember)</TitleComment>
                </TextLabel>
                <TextAreaInput
                    id="notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleForm}
                    disabled={loading}
                ></TextAreaInput>
                <ButtonContainer>
                    <MainButton
                        text={buttonText}
                        background={COLORS.BUTTON.LIGHT_PINK}
                        width="110px"
                        height="40px"
                        fontSize="14px"
                        onClick={(e) => submitForm(e)}
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
