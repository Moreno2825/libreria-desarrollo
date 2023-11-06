import styled from "@emotion/styled";
import Image from "next/image";

const responsive = {
  md: "768px",
  lg: "1440px",
  xl: "1920px",
};

export const Text = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  padding: 16px;

  @media (max-width: ${responsive.xl}) {
    font-size: 24px;
  }
`;

export const ContainerSearch = styled.div`
  left: 0px;
  top: -70px;
  position: relative;
`;

export const NextImage = styled(Image)`
  border-radius: 15px;
  margin-bottom: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

  @media (max-width: ${responsive.xl}) {
    width: 1360px;
    height: 330px;
  }

  @media (max-width: ${responsive.lg}) {
    width: 900px;
    height: 240px;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  padding: 24px;
`;

export const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
  padding: 24px;

  @media (min-width: ${responsive.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${responsive.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
