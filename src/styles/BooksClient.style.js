import styled from "@emotion/styled";
import Image from "next/image";

export const Text = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  padding: 16px;
`;

export const NextImage = styled(Image)`
  border-radius: 15px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 56px;
  justify-content: center;
  padding: 24px;
`;

export const BooksContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  padding: 24px;
`;
