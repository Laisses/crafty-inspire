import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { COLORS, device } from "../constants";
import { MainButton } from "./MainButton";
import { Link } from "react-router-dom";

export const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchLogo>
                    <BsSearch color="#939393" size="16px" />
                </SearchLogo>
                <TextInput
                    type="text"
                    id="search"
                    name="search"
                    aria-label="search bar"
                    placeholder="Search..."
                />
            </SearchBarContainer>
            <ButtonContainer to="/dashboard/submit">
                <MainButton
                    text="add new"
                    height="34px"
                    width="100px"
                    background={COLORS.BUTTON.LIGHT_PINK}
                />
            </ButtonContainer>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 15px;
    margin-bottom: 20px;

    @media ${device.mobileL} {
        flex-direction: column;
        padding-top: 0;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;

    width: 1000px;
    height: 34px;
    margin-right: 20px;

    background-color: #ffffff;
    border: 1px solid ${COLORS.CARD.LIGTH_GREY};
    border-radius: 6px;

    @media ${device.tablet} {
        width: 530px;
    }

    @media ${device.mobileL} {
        width: 100%;
        margin-right: 0;
        margin-bottom: 6px;
        flex-direction: row-reverse;
        justify-content: space-between
    }
`;

const SearchLogo = styled.div`
    padding-left: 10px;

    @media ${device.mobileL} {
        padding-left: 0;
        padding-right: 10px;
    }
`;

const TextInput = styled.input`
    border: none;
    padding-left: 10px;

    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #939393
    }

    @media ${device.mobileL} {
        font-size: 16px;
        padding-right: 10px;
    }
`;

const ButtonContainer = styled(Link)`
    @media ${device.mobileL} {
        align-self: flex-end;
    }
`;
