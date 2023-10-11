import styled from "@emotion/styled";

export const ContainerBook = styled.div`
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
