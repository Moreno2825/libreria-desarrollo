import styled from "@emotion/styled";

export const LabelStyled = styled.label`
  color: #2a2a2a;
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 500;
`;

export const TextAreatWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TextAreaStyled = styled.textarea`
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
  resize: vertical;
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