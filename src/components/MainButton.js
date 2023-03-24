import styled from "styled-components";
import { COLORS, PRIMARY_FONT } from "../constants";


export const MainButton = props => {
    const { text } = props;

    return (
        <Button {...props}>
            {text}
        </Button>
    );
};

const Button = styled.button`
    width: ${({ width }) => width ? width : "145px"};
    height: ${({height}) => height ? height : "49px"};

    font-family: ${PRIMARY_FONT};
    font-size: ${({fontSize}) => fontSize ? fontSize : "16px"};
    font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "600"};
    text-transform: ${({textTransform}) =>
        !textTransform ? "uppercase" : "none"};
    color: ${({color}) => color ? color : "#ffffff"};

    background-color: ${({ background }) =>
        background ? background : COLORS.BUTTON.LIGHT_GREEN};
    border: none;
    border-radius: 6px;

    cursor: pointer;
`;