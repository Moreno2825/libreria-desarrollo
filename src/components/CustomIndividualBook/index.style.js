import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0px 18px;
  @media (max-width: 800px) {
    padding: 16px 0px;
    width: 650px;
  }
`;

export const BasicInformationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 431px;
  height: 568px;
  margin-bottom: 4px;
  border-radius: 15px;
`;

export const ImageStyled = styled.img`
  position: relative;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
`;

export const ContainerImageAndSpan = styled.div`
  flex-direction: column;
`;

export const BasicInformation = styled.div`
  width: 490px;
  flex-direction: column;
  margin-left: 24px;
  color: #000;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;

  .NameStyled {
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .DetailOptionsStyled {
    display: block;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 12px;
  }

  .AutorStyled {
    color: #7d6e83;
    font-size: 16px;
    font-weight: 500;
  }
`;
