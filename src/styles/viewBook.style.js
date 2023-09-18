import styled from "@emotion/styled";

export const ContainerBook = styled.div`
  width: ${(props) => (props.fullwidth ? "100%" : "auto")};
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerButtons = styled.div`
  background-color: aliceblue;
`;