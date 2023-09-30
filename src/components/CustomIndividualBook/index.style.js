import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  .NameStyled {
    font-size: 22px;
    font-weight: 500;
    padding: 16px 0px;
  }

  .DetailOptionsStyled {
    display: block;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 12px;
  }

  .PriceOptionsStyled {
    display: block;
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 12px;
  }

  .AutorStyled {
    color: #7d6e83;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px 0px;
`;

export const ImagenD = styled.div`
    display: flex;     
    justify-content: center;
    align-items: center;
`;

export const Buttons = styled.div`
    display: flex;     
    justify-content: center;
    margin-top: 30px;

    & > button {
        min-width: 225px; 
        flex-basis: 0;
        margin-right: 18px; 
    }
    & > button:last-child {
        margin-right: 0; 
    }
`;