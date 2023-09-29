import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({ fullWidth, buttonText, onClick, type, disable, style}) => {
    const customStyle = {
        borderRadius: "10px",
        background: "#FFF",
        color: "#7d6e83",
        border: "2px solid #7d6e83"
    }

    return (
        <ButtonStyled fullWidth={fullWidth} onClick={onClick} type={type} disabled={disable} style={customStyle}>
            {buttonText} 
        </ButtonStyled>
    );
};

export default CustomButton;