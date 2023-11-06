import styled from "@emotion/styled";

export const BooksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 24px;
`;

export const RecentBooks = styled.span`
  margin: 16px 0px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 19px;
  font-weight: 500;
`;

export const AddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 0px;
  margin-bottom: 8px;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 26px;
`;

export const RowImageContainer = styled.div`
  display: flex;
  gap: 160px;
`;

export const LabelStyled = styled.label`
  color: #2a2a2a;
  font-family: "Poppins", serif;
  font-size: 16px;
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  margin: 16px 0px;
`;
export const ImageContainerBehind = styled.div`
  margin: 26px 0px 16px 0;
`;
