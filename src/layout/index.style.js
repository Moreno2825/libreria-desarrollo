import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  margin: ${props => (props.hasSidebar ? "0px 310px" : "0px")};
  width: ${props => (props.hasSidebar ? "calc(100% - 280px)" : "100%")};
  margin-right: 30px;
`;