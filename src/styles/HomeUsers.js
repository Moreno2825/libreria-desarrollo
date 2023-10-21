import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

export const ContainerUs = styled.div`
  height: 351px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: top;
`;

export const Phrase = styled.div`
  width: 437px;
  color: #2a2a2a;
  font-family: Libre Baskerville;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Text = styled.div`
  width: 532px;
  color: #414141;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Line = styled.div`
  width: 430px;
  height: 1px;
  background-color: #2A2A2A;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Why = styled.div`
  width: 300px;
  height: 150px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
`;

export const TextWhy = styled.div`
  width: 300px;
  color: #414141;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 16px;
`;

export const Inf = styled.div`
  width: 200px;
  height: 200px;
  background: #dad6dc;
  display: flex;
  flex-direction: column;
`;

export const InfIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-left: 18px;
  margin-top: 20px;
`;

export const InfTitles = styled.div`
  width: 197px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 16px 18px 10px;
`;

export const InfText = styled.div`
  width: 170px;
  color: #414141;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 18px;
`;
