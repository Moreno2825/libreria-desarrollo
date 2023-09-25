import styled from "@emotion/styled";

export const SelectStyled = styled.select`
  width: 100%;
  height: 47px;
  margin: 4px 8px 8px 0px;
  border-radius: 10px;
  border: 1.5px solid #6c6b6b95;
  background-color: transparent;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 300;
  caret-color: #7d6e83;
  cursor: pointer;
  &:focus {
    padding: 12px;
    border: 1.8px solid #7d6e83;
    outline: none;
  }
  &:not(:focus) {
    padding: 12px;
    outline: none;
  }
`;

export const LabelStyled = styled.label`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const OptionStyled = styled.option`
  color: #2A2A2A; 
  font-family: fantasy;
`;
