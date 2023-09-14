import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 45px;
  background: #7d6e83;
  color: #ffffff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
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
