import styled from "@emotion/styled";

const responsive = {
  md: "768px",
  lg: "1440px",
  xl: "1920px",
};

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${responsive.xl}) {
    flex-direction: row;
  }

  @media (min-width: ${responsive.lg}) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  margin: 0;
  width: 100%;
  margin-right: 0;

  @media (min-width: ${responsive.lg}) {
    margin: ${(props) => (props.hasSidebar ? "0px 310px" : "0px")};
    width: ${(props) => (props.hasSidebar ? "calc(100% - 364px)" : "100%")};
    margin-right: 40px;
  }
  
`;
