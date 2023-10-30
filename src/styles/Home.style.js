import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  text-align: left;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: start;
  color: white;
  width: 500px;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: Libre Baskerville;
  font-size: 30px;
  font-weight: 400;
`;

export const Message = styled.span`
width: 357px;
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
`;
