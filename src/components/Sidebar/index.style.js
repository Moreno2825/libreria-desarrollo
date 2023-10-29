import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const responsive = {
  md: "768px",
  lg: "1440px",
  xl: "1920px",
};

export const Container = styled.div`
  width: 280px;
  height: 100vh;
  background: #f4f2ee;
  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  z-index: 1;

  @media (max-width: ${responsive.lg}) {
    width: 240px;
  }
`;

export const Select = styled.div`
  width: 240px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5e5262;
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
  :hover {
    background: #cec9d1;
    transition: background-color 0.3s ease;
    color: #5e5262;
  }
  :active {
    transform: scale(1);
  }

  @media (max-width: ${responsive.lg}) {
    font-size: 14px;
    padding-left: 24px;
    width: 200px;
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
  color: inherit; 
  margin-right: 16px;
  font-size: 18px;
`;

export const Titule = styled.div`
  display: flex;
  margin-left: 16px;
  justify-content: center;
  align-items: center;
`;
