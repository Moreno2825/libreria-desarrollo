import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NameWindow = styled.div`
width: 240px;
height: 59px;
left: 409px; 
margin-top: 43px;
color: #5E5262;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const Dates = styled.p`
color: #5E5262;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const NameUse = styled.button`
    width: 150px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    font-family: Poppins; 
    border: none;
    right: 78px; 
    text-align: right;
    margin-top: 43px;
display: flex;
justify-content: right;
align-items: center;
`;

export const LogOut = styled.button`

ransition: all 0.3s ease; 
overflow:
max-height: ${props => (props.mostrar ? '1000px' : '0')}; 
opacity: ${props => (props.mostrar ? '1' : '0')}; 

    width: 150px;
    height: 40px;

    border-radius: 5px;
    position: fixed;
    top: 0;
    
    border: none;
    color: #434343;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;     right: 78px; 
    text-align: right;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4F2EE; 
`;

export const SignOutAlt = styled(FontAwesomeIcon)`
color: #434343;
left: 5px;
margin-right: 20px;
`;

export const ChevronIcon = styled(FontAwesomeIcon)`
color: #5E5262; 
left: 5px;
margin-right: 16px;
`;

