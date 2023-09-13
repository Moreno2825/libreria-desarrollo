import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({ buttonText, onClick, type, disable}) => {
    return (
        <ButtonStyled onClick={onClick} type={type} disabled={disable}>
            {buttonText}
        </ButtonStyled>
    );
};

export default CustomButton;