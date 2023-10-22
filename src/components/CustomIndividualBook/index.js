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
import CustomAlert from "../CustomAlert";

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
              <CustomAlert
                open={isOpen}
                onClose={toggleForgotPasswordModal}
                title="Agregado correctamente"
                text="Tu producto seleccionado se ha agregado correctamente a tu carrito de compras."
              >
                <ImagenD>
                  <Image
                    src="/img/correcto.png"
                    width={109}
                    height={123}
                    alt="logo"
                  />
                </ImagenD>
              </CustomAlert>
            </ContainerButtons>
          </BasicInformation>
        </div>
      </BasicInformationContainer>
    </Container>
  );
};

export default CustomIndividualBook;
