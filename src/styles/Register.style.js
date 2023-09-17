import styled from "@emotion/styled";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f2ee;
`;

export const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridForm = styled.div`
  width: 550px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: auto auto;
  overflow-y: hidden;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  & span {
    font-family: "Libre Baskerville", serif;
    font-weight: 400;
    font-size: 26px;
  }
`;

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    color: #414141;
    font-family: "Libre Baskerville", serif;
    font-size: 26px;
    font-weight: 700;
    margin: 8px 0px;
  }
  & span {
    color: #414141;
    font-family: "Poppins", serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  & span:nth-of-type(2){
    margin: 2px 0px;
    @media (max-width: 400px) {
    margin: 0px;
  }
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  margin: 0px 0px;
`;

export const EyeIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #7d6e83;
`;

export const LinkStyled = styled(Link)`
  color: #7d6e83;
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 600;
`;

export const GridImage = styled.div`

`;
