import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  margin: ${props => (props.hasSidebar ? "30px 310px" : "0px")};
  width: ${props => (props.hasSidebar ? "calc(100% - 280px)" : "100%")};
`;