import styled from "@emotion/styled";
import { AppBar as MuiAppBar, Tabs as MuiTabs, Tab as MuiTab } from '@mui/material';

export const StyledDiv = styled.div`
  width: 820px;
`;

export const AppBar = styled(MuiAppBar)`
  background-color: #ffffff;
  box-shadow: none;
`;

export const Tabs = styled(MuiTabs)`
  .MuiTabs-indicator {
    background-color: #7D6E83;
  }
`;

export const Tab = styled(MuiTab)`
  color: #7D6E83;
`;

export const TitleText = styled.h1`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  margin: 8px 0px;
`;

export const DescriptionText = styled.span`
  color: #414141;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.16px;
`;

export const CustomTable = styled.table`
  margin: 24px 0px;
  width: 100%;
  border-collapse: collapse;
  td {
    border-bottom: 0.5px solid #7d6e83;
    padding: 16px 0px;
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

export const Icon = styled.td`
  text-align: left !important;
  padding-left: 70px !important;
  cursor: pointer;
  & > svg:hover {
    color: #7D9D9C;
  }
`;

