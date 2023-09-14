import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f4f2ee;
`;

export const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const GridForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 100px;
  }
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
    font-size: 28px;
    font-weight: 700;
  }
  & span {
    color: #414141;
    font-family: "Poppins", serif;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const LinkStyled = styled(Link)`
  color: #7d6e83;
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 600;
`;

export const GridImage = styled.div`
  background-color: beige;
`;
