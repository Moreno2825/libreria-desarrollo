import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 40px;
  background: #7d6e83;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  display: flex;
  justify-content: center;
  padding: 8px;
  align-items: center;
  padding: 16px;
  margin: 16px 0px;
  font-family: "Poppins";
  line-height: normal; 
  cursor: pointer;
  letter-spacing: 0.5px;
  :hover{
    background-color: #8d8093;
    transition: background-color 0.3s ease; 
  }
  :active {
    transform: scale(1.0);
  }
`;

export const QuantityControlStyled = styled.div`
  button {
    background-color: #7d6e83;
    color: #ffffff;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
    :hover {
      background-color: #8d8093;
    }
  }
  span {
    margin: 0 10px;
    font-size: 18px;
    font-family: "Poppins";
  }
`;
