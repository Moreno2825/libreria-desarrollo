import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icons = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #414141;
  margin-top: 10px;
  left: 12px;
`;

export const Buscador = styled.div`
  width: 300px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(125, 110, 131, 0.2);
  display: flex;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: end;
`;

export const Write = styled.input`
  left: 16px;
  width: 250px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  color: #414141;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  outline: none;
  background-color: transparent;
`;
