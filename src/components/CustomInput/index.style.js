import styled from "@emotion/styled";

export const InputStyled = styled.input`
  width: 100%;
  height: 47px;
  margin: 4px 0px 8px 0px;
  border-radius: 10px;
  border: 1.5px solid #6c6b6b95;
  background-color: transparent;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 300;
  caret-color: #7D6E83;
  &:focus{
    padding: 12px;
    border: 1.8px solid #7D6E83; 
    outline: none;
  }
  &:not(:focus){
    padding: 12px;
    outline: none;
  }
`;

export const LabelStyled = styled.label`
  color: #2a2a2a;
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-58%);
  font-size: 24px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  padding: 0px 8px;
  color: red;
  margin: 4px 0px 8px;
`;
