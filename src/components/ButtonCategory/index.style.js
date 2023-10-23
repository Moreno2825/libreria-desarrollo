import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonStyled = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border: none;
  gap: 16px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  &:active {
    scale: 0.98;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #2a2a2a;
  width: 32px;
  height: 32px;
`;
