import styled from "@emotion/styled";

export const BooksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 24px;
`;

export const RecentBooks = styled.span`
  margin: 32px 0px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 500;
`;

export const AddContainer= styled.div`
  display: flex;
  justify-content: flex-end;
`;