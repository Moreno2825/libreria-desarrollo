import React, { useState } from "react";
import {
  BasicInformation,
  BasicInformationContainer,
  Container,
  ContainerButtons,
  ContainerImageAndSpan,
  ImageContainer,
  ImageStyled,
  Buttons,
  ImagenD,
} from "./index.style";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";

const CustomIndividualBook = ({
  image,
  name,
  author,
  price,
  details,
  category,
}) => {
  const [isOpen, setOpenForgotPassword] = useState(false);

  const toggleForgotPasswordModal = () =>
    setOpenForgotPassword((isOpen) => !isOpen);
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
            <ContainerButtons>
              <CustomButton buttonText="Editar" />
              <CustomButton
                buttonText="Eliminar"
                onClick={toggleForgotPasswordModal}
              />
              <CustomModal
                open={isOpen}
                onClose={toggleForgotPasswordModal}
                title="Eliminar"
                message="¿Deseas eliminar este libro?"
              >
                <ImagenD>
                  <Image
                    src="/img/Delete.png"
                    width={233}
                    height={127}
                    alt="logo"
                  />
                </ImagenD>
                <Buttons>
                  <CustomButton buttonText="Cancelar" specialStyle/>
                  <CustomButton buttonText="Aceptar" />
                </Buttons>
              </CustomModal>
            </ContainerButtons>
          </BasicInformation>
        </div>
      </BasicInformationContainer>
    </Container>
  );
};

export default CustomIndividualBook;
