import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../context";
import { BASE_URL, COLORS, device } from "../constants";
import { MainButton } from "../components/MainButton";

export const SignInForm = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const { setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleForm = e => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const submitForm = async e => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await axios.post(`${BASE_URL}/login`, form);
            const user = {
                name: res.data.name,
                token: res.data.token,
            };
            setLoading(false);
            setUser(user);
            navigate("/dashboard");
        } catch (err) {
            alert(err.response.data.message);
            setLoading(false);
        }
    };

    return (
        <Form>
            <TextLabel htmlFor="email">Email</TextLabel>
            <TextInput
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                disabled={loading}
                required
            />
            <TextLabel htmlFor="password">Password</TextLabel>
            <TextInput
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleForm}
                disabled={loading}
                required
            />
            <ButtonContainer>
                <MainButton
                    onClick={e => submitForm(e)}
                    text={
                        loading
                            ?
                            "loading..."
                            :
                            "login"
                    }
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

    margin-top: 60px;
    margin-bottom: 20px;
    margin-left: 140px;

    @media ${device.tablet} {
        margin-left: 40px;
    }

    @media ${device.mobileL} {
        width: 80%;
        align-self: auto;
        margin-top: 30px;
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
    margin-top: 40px;

    @media ${device.mobileL} {
        margin-top: 20px;
    }
`;
