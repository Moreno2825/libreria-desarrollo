import React, { useState } from "react";
import { ButtonStyled, QuantityControlStyled } from "./index.style";

const CustomButton = ({
  fullWidth,
  buttonText,
  onClick,
  type,
  disable,
  specialStyle,
  showIncrementDecrement,
}) => {
  const [quantity, setQuantity] = useState(1);

  const customStyle = {
    borderRadius: "10px",
    background: "#f4f4f4",
    color: "#7d6e83",
    border: "2px solid #7d6e83",
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleClick = (event) => {
    if (onClick) {
      if (showIncrementDecrement) {
        onClick({ quantity, event });
      } else {
        onClick(event);  
      }
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "40px"}}>
      {showIncrementDecrement && (
        <QuantityControlStyled>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </QuantityControlStyled>
      )}
      <ButtonStyled
        fullWidth={fullWidth}
        onClick={handleClick}
        type={type}
        disabled={disable}
        style={specialStyle ? customStyle : {}}
      >
        {buttonText}
      </ButtonStyled>
      
    </div>
  );
};

export default CustomButton;
