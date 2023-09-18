import styled from "@emotion/styled";

export const Container = styled.div`
  width: ${(props) => props.fullwidth ? "100%" : "auto"};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;