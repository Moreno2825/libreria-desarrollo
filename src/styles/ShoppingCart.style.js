import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleText = styled.h1`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
`;

export const ClearText = styled.span`
  color: #5e5262;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
`;

export const CustomTable = styled.table`
margin: 24px 0px;
  width: 100%;
  border-collapse: collapse;
  td {
    border-bottom: 0.5px solid #7d6e83;
    padding: 8px;
    text-align: center;
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const CustomThead = styled.tr`
  background-color: rgba(125, 110, 131, 0.25);
  height: 30px;
  & th {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 0.5px solid #7d6e83;
    padding: 8px;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 18px;
  height: 20px;
  color: #2a2a2a;
  cursor: pointer;
`;

export const ContainerView = styled.form`
  display: flex;
  justify-content: end;
  margin: 48px 0px;
`;

export const ViewDetails = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 15px;
  background: rgba(197, 189, 200, 0.24);
  box-shadow: 0px 4px 4px 0px rgba(54, 54, 54, 0.23);
  padding: 24px;
`;

export const TitleDetails = styled.span`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
`;

export const SubTotalText = styled.span`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
`;

export const TotalText = styled.span`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
`;

export const Line = styled.div`
  border-bottom: 0.5px solid #CEC9D1;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 20px;
`;