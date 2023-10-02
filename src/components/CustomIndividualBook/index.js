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
  ImageUpdateContainer,
  LabelStyled,
  ImageContainerBehind,
} from "./index.style";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import CustomTextArea from "../CustomTextArea";
import CustomSelect from "../CustomSelect";
import ImageInput from "../imageInput/ImageInput";
import { useRouter } from "next/router";
import DeleteBookUseCase from "@/application/usecases/bookUseCase/DeleteBookUseCase";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";

const CustomIndividualBook = ({
  bookId,
  image,
  name,
  author,
  price,
  details,
  category,
}) => {
  const [isOpen, setOpenDelete] = useState(false);
  const [isOpenUpdate, setOpenUpdatePassword] = useState(false);
  const [values, setValues] = useState();
  const [bookIdToDelete, setBookIdToDelete] = useState(null);

  const route = useRouter();

  const toggleDeleteModal = () => setOpenDelete((isOpen) => !isOpen);

  const toggleUpdatePasswordModal = () =>
    setOpenUpdatePassword((isOpenUpdate) => !isOpenUpdate);

  const handleUpdateFiles = (pictures) => {
    setValues({ ...values, foto: pictures });
  };

  const handleDeleteClick = (bookId) => {
    setBookIdToDelete(bookId);
    toggleDeleteModal();
    console.log(bookId);
  };

  const handleDeleteConfirmation = async () => {
    const bookRepo = new BookRepo();
    const deleteBookUseCase = new DeleteBookUseCase(bookRepo);
    try {
      const result = await deleteBookUseCase.run(bookIdToDelete);
      console.log(result.message);
      setBookIdToDelete(null);
      toggleDeleteModal();
      route.push("/books");
    } catch (error) {
      console.error("Error al eliminar el libro", error);
    }
  };

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
                <CustomInput label="Título" name="name" control={control} />
                <CustomInput label="Autor" name="autor" control={control} />
                <CustomTextArea
                  label="Sipnosis"
                  name="details"
                  control={control}
                />
                <RowContainer>
                  <CustomInput label="Precio" name="price" control={control} />
                  <CustomSelect
                    label="Categorias"
                    name="category"
                    control={control}
                  />
                </RowContainer>
                <ImageUpdateContainer>
                  <LabelStyled>Portada del libro</LabelStyled>
                  <ImageInput updateFilesCb={handleUpdateFiles} />
                </ImageUpdateContainer>
                <ImageContainerBehind>
                  <LabelStyled>Contraportada del libro</LabelStyled>
                  <ImageInput updateFilesCb={handleUpdateFiles} />
                </ImageContainerBehind>
                <RowContainer>
                  <CustomButton specialStyle buttonText="Cancelar" fullWidth />
                  <CustomButton buttonText="Guardar" fullWidth />
                </RowContainer>
              </CustomModal>

              <CustomButton
                buttonText="Eliminar"
                onClick={() => handleDeleteClick(bookId)}
              />
              <CustomModal
                open={isOpen}
                onClose={toggleDeleteModal}
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
                  <CustomButton
                    buttonText="Cancelar"
                    specialStyle
                    onClick={toggleDeleteModal}
                  />
                  <CustomButton buttonText="Aceptar" onClick={handleDeleteConfirmation}/>
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
