import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({ fullWidth, buttonText, onClick, type, disable}) => {
    return (
        <ButtonStyled fullWidth={fullWidth} onClick={onClick} type={type} disabled={disable}>
            {buttonText}
        </ButtonStyled>
    );
};

export default CustomButton;