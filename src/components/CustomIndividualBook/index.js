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
  RowContainer,
} from "./index.style";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import CustomTextArea from "../CustomTextArea";
import CustomSelect from "../CustomSelect";

const CustomIndividualBook = ({
  image,
  name,
  author,
  price,
  details,
  category,
}) => {
  const [isOpen, setOpenDeletePassword] = useState(false);
  const [isOpenUpdate, setOpenUpdatePassword] = useState(false);

  const toggleDeletePasswordModal = () =>
    setOpenDeletePassword((isOpen) => !isOpen);

  const toggleUpdatePasswordModal = () =>
    setOpenUpdatePassword((isOpenUpdate) => !isOpenUpdate);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

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
              <CustomButton
                buttonText="Editar"
                onClick={toggleUpdatePasswordModal}
              />
              <CustomModal
                open={isOpenUpdate}
                onClose={toggleUpdatePasswordModal}
                title="Editar"
                message="Aquí puedes realizar modificaciones en los datos del libro."
              >
                <CustomInput label="Título" name="title" control={control} />
                <CustomInput label="Autor" name="autor" control={control} />
                <CustomTextArea label="Sipnosis" />
                <RowContainer>
                  <CustomInput label="Precio" name="price" control={control} />
                  <CustomSelect label="Categorias" />
                </RowContainer>
                <RowContainer>
                  <CustomButton specialStyle buttonText="Cancelar" fullWidth />
                  <CustomButton buttonText="Guardar" fullWidth />
                </RowContainer>
              </CustomModal>

              <CustomButton
                buttonText="Eliminar"
                onClick={toggleDeletePasswordModal}
              />
              <CustomModal
                open={isOpen}
                onClose={toggleDeletePasswordModal}
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
                  <CustomButton buttonText="Cancelar" specialStyle />
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
