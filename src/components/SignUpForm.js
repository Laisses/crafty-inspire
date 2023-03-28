import styled from "styled-components";
import { COLORS, device } from "../constants";
import { MainButton } from "../components/MainButton";

export const SignUpForm = () => {
    return (
        <Form>
            <TextLabel htmlFor="name">Name</TextLabel>
            <TextInput
                type="text"
                id="name"
                name="name"
                required
            />
            <TextLabel htmlFor="username">Username</TextLabel>
            <TextInput
                type="text"
                id="username"
                name="username"
                required
            />
            <TextLabel htmlFor="email">Email</TextLabel>
            <TextInput
                type="email"
                id="email"
                name="email"
                required
            />
            <TextLabel htmlFor="password">Password</TextLabel>
            <TextInput
                type="password"
                id="password"
                name="password"
                required
            />
            <ButtonContainer>
                <MainButton
                    text="create account"
                    width="160px"
                    height="40px"
                    fontSize="14px"
                />
            </ButtonContainer>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;

    align-self: flex-start;

    margin-bottom: 20px;
    margin-left: 140px;

    @media ${device.tablet} {
        margin-left: 40px;
    }

    @media ${device.mobileL} {
        width: 80%;
        align-self: auto;
        margin-left: 0;
    }
`;

const TextLabel = styled.label`
    font-size: 14px;
    font-weight: 300;

    color: ${COLORS.FORM.DARK_GREY};

    margin-bottom: 10px;
`;

const TextInput = styled.input`
    width: 500px;
    border: none;
    border-bottom: 1px solid ${COLORS.FORM.DARK_GREY};
    margin-bottom: 30px;
    padding-left: 10px;
    &:focus {
        outline: none;
    }

    @media ${device.tablet} {
        width: 300px;
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`;

const ButtonContainer = styled.div`
    align-self: center;
`;