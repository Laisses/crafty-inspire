import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { COLORS, device } from "../constants";
import { MainButton } from "./MainButton";

export const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchLogo>
                    <BsSearch color="#939393" size="14px" />
                </SearchLogo>
                <TextInput
                    type="text"
                    id="search"
                    name="search"
                    aria-label="search bar"
                    placeholder="Search..."
                />
            </SearchBarContainer>
            <ButtonContainer>
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

    padding-top: 10px;
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

    border: 1px solid ${COLORS.CARD.LIGTH_GREY};
    border-radius: 6px;

    @media ${device.tablet} {
        width: 530px;
    }

    @media ${device.mobileL} {
        width: 100%;
        margin: 0 auto 10px auto;
    }
`;

const SearchLogo = styled.div`
    padding-left: 10px;
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
`;

const ButtonContainer = styled.div`
    @media ${device.mobileL} {
        align-self: flex-end;
    }
`;
