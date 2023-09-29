import React from "react";
import {
  BasicInformation,
  BasicInformationContainer,
  Container,
  ContainerButtons,
  ContainerImageAndSpan,
  ImageContainer,
  ImageStyled,
} from "./index.style";
import CustomButton from "../CustomButton";
import DeleteB from "../Delete";

const CustomIndividualBook = ({
  image,
  name,
  author,
  price,
  details,
  category,
}) => {
  return (
    <Container>
      <BasicInformationContainer>
        <ContainerImageAndSpan>
          <ImageContainer>
            <ImageStyled src={image}></ImageStyled>
          </ImageContainer>
        </ContainerImageAndSpan>
        <div>
          <BasicInformation>
            <div className="NameStyled">{name}</div>
            <div className="DetailOptionsStyled">
              <span className="AutorStyled">{author}</span>
            </div>
            <div className="DetailOptionsStyled">
              <span className="DetailsStyled">{details}</span>
            </div>
            <div className="DetailOptionsStyled">
              <pan className="DetailsStyled">{category}</pan>
            </div>
            <div className="DetailOptionsStyled">
              <span className="PriceOptionsStyled">{price ? `$${price}` : ""}</span>
            </div>
            <DeleteB></DeleteB>
            {/* <ContainerButtons>
            <CustomButton buttonText="Editar"/>
            <CustomButton buttonText="Eliminar"/>
            </ContainerButtons> */}
          </BasicInformation>
        </div>
      </BasicInformationContainer>
    </Container>
  );
};

export default CustomIndividualBook;