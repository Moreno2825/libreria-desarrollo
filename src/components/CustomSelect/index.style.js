import styled from "@emotion/styled";

export const Select = styled.div`
  width: 302px;
  height: 52px;
  flex-shrink: 0;  
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5E5262; 
  justify-content: flex-start;
  padding-left: 20px;

  margin: 10% 20px;

  letter-spacing: 0.5px;
  :hover{
    background: #CEC9D1; 
    transition: background-color 0.3s ease; 
  }
  :active {
    transform: scale(1.0);
  }
`;



