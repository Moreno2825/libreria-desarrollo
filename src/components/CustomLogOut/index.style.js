import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 26px 0px;
`;

export const NameWindow = styled.div`
  width: 280px;
  height: 59px;
  /* margin-top: 43px; */
  color: #5e5262;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Dates = styled.p`
  color: #5e5262;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const NameUse = styled.button`
  width: 150px;
  height: 40px;
  /* flex-shrink: 0; */
  /* border-radius: 5px; */
  background-color: rgba(0, 0, 0, 0);
  /* position: fixed; */
  /* top: 0; */
  font-family: Poppins;
  border: none;
  /* right: 78px; */
  text-align: right;
  /* margin-top: 43px; */
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
  color: #5e5262;
  font-family: "Poppins", serif;
  font-size: 18px;
  font-weight: 500;
`;

export const LogOut = styled.button`
  transition: all 0.3s ease;
  max-height: ${(props) => (props.mostrar ? "1000px" : "0")};
  opacity: ${(props) => (props.mostrar ? "1" : "0")};
  width: 150px;
  height: 40px;
  border-radius: 5px;
  position: fixed;
  /* top: 0; */
  border: none;
  color: #434343;
  font-family: "Poppins", serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* right: 78px; */
  text-align: right;
  /* margin-top: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f2ee;
  cursor: pointer;
  :hover{
    background: #cec9d1;
    transition: background-color 0.3s ease;
    color: #5e5262;
  }
  :active {
    transform: scale(1.0);
  }
`;

export const SignOutAlt = styled(FontAwesomeIcon)`
  color: #434343;
  left: 8px;
  margin-right: 20px;
  color: inherit; 
`;

export const ChevronIcon = styled(FontAwesomeIcon)`
  color: #5e5262;
  left: 8px;
  /* margin-right: 16px; */
  font-size: 14px;
`;
