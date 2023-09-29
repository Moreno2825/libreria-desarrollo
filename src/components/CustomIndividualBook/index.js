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
              <span className="PriceOptionsStyled">
                {price ? `$${price}` : ""}
              </span>
            </div>
            {/* <ContainerButtons>
            <CustomButton buttonText="Editar"/>
            <CustomButton
            buttonText="Eliminar"
            onClick={toggleForgotPasswordModal}
            />
            <CustomModal
              open={isOpen}
              title="Eliminar"
              message="¿Deseas eliminar este libro?"
            >
      </CustomModal>
      
            </ContainerButtons> */}
            <DeleteB></DeleteB>
          </BasicInformation>
        </div>
      </BasicInformationContainer>
    </Container>
  );
};

export default CustomIndividualBook;
