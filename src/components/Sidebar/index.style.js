import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    width: 350px;
    height: 1024px;
    flex-shrink: 0;
    background: #F4F2EE;
    box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    z-index: 1;
`;


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
  font-weight: bold;
  color: #414141;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal; 

  margin: 10% 20px;

  letter-spacing: 0.5px;
  :hover{
    background: #CEC9D1; 
    transition: background-color 0.3s ease; 
    color: #5E5262; 
  }
  :active {
    transform: scale(1.0);
  }
`;

export const Position = styled.h1`
color: #000;
font-family: Libre Baskerville;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal; 
margin: 24px;
left: -25px;
`;

export const HouseIcon = styled(FontAwesomeIcon)`

color: #5E5262; 
margin-right: 16px;
`;

export const Titule = styled.div`
display: flex;
margin-left: 16px;
`;