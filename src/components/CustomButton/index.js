import React from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({
  fullWidth,
  buttonText,
  onClick,
  type,
  disable,
  specialStyle,
}) => {
  const customStyle = {
    borderRadius: "10px",
    background: "#f4f4f4",
    color: "#7d6e83",
    border: "2px solid #7d6e83",
  };

  return (
    <ButtonStyled
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      disabled={disable}
      style={specialStyle ? customStyle : {}}
    >
      {buttonText}
    </ButtonStyled>
  );
};

export default CustomButton;
