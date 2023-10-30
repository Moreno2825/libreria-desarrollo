import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const responsive = {
  md: "768px",
  lg: "1440px",
  xl: "1920px",
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 140px;

  @media (max-width: ${responsive.xl}) {
    gap: 140px;
  }

  @media (max-width: ${responsive.lg}) {
    gap: 100px;
  }

  @media (max-width: ${responsive.md}) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const ContainerUs = styled.div`
  height: 351px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: top;

  @media (max-width: ${responsive.xl}) {
    align-items: center;
    text-align: center;
    height: 100%;
  }

  @media (max-width: ${responsive.md}) {
    align-items: center;
    text-align: center;
  }
`;

export const Phrase = styled.div`
  width: 50%;
  color: #2a2a2a;
  font-family: Libre Baskerville;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: ${responsive.xl}) {
    width: 100%;
    font-size: 30px;
  }

  @media (max-width: ${responsive.lg}) {
    width: 90%;
    font-size: 24px;
  }

  @media (max-width: ${responsive.md}) {
    font-size: 16px;
  }
`;

export const TextStyled = styled.div`
  width: 580px;
  color: #414141;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: justify;

  @media (max-width: ${responsive.xl}) {
    font-size: 20px;
  }

  @media (max-width: ${responsive.lg}) {
    font-size: 16px;
  }

  @media (max-width: ${responsive.md}) {
    font-size: 12px;
  }
`;

export const Line = styled.div`
  width: 430px;
  height: 1px;
  background-color: #2a2a2a;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (max-width: ${responsive.xl}) {
    width: 580px;
  }
`;

export const Why = styled.div`
  width: 300px;
  height: 150px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: ${responsive.xl}) {
    width: 30%;
    height: 150px;
    font-size: 24px;
  }

`;

export const TextWhy = styled.div`
  width: 300px;
  color: #414141;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
`;

export const Inf = styled.div`
  width: 200px;
  height: 200px;
  background: #dad6dc;
  display: flex;
  flex-direction: column;
`;

export const InfIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-left: 18px;
  margin-top: 20px;
`;

export const InfTitles = styled.div`
  width: 197px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 16px 18px 10px;
`;

export const InfText = styled.div`
  width: 170px;
  color: #414141;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 18px;
`;
