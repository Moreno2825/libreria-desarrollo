import React, { useEffect, useState } from "react";
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
import ImageUploader from "../imageUploader";
import UpdateBookUseCase from "@/application/usecases/bookUseCase/UpdateBookUseCase";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import Book from "@/domain/entities/book";

const CustomIndividualBook = ({
  image,
  name,
  author,
  price,
  details,
  category,
  frontImage,
  backImage,
}) => {
  const [isOpen, setOpenDeletePassword] = useState(false);
  const [isOpenUpdate, setOpenUpdate] = useState(false);
  const [values, setValues] = useState();

  const toggleDeletePasswordModal = () =>
    setOpenDeletePassword((isOpen) => !isOpen);

  const toggleUpdateModal = () =>
    setOpenUpdate((isOpenUpdate) => !isOpenUpdate);

  const handleFileChange = (name, file) => {
    console.log(name, file);
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: file,
    }));
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    if (name) setValues("name", name);
    if (author) setValues("author", author);
    if (details) setValues("details", details);
    if (price) setValues("price", price);
    if (category) setValues("category", category);
    if (frontImage) setValues("frontImage", frontImage);
    if (backImage) setValues("backImage", backImage);
  }, [
    name,
    author,
    details,
    price,
    category,
    frontImage,
    backImage,
    setValues,
  ]);

  const onSubmit = async (data) => {
    const bookRepo = new BookRepo();
    const updateBookUseCase = new UpdateBookUseCase(bookRepo);

    const updatedBook = new Book(
      bookId,
      data.name,
      data.author,
      data.details,
      data.category,
      data.price,
      data.priceDiscount,
      values.frontImage,
      values.backImage
    );

    try {
      const response = await updateBookUseCase.run(updatedBook);
      console.log('Book updated successfully: ', response);
    } catch (error) {
      console.error('Error updating book: ', error);
    }
  };

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
              <CustomButton buttonText="Editar" onClick={toggleUpdateModal} />
              <CustomModal
                open={isOpenUpdate}
                onClose={toggleUpdateModal}
                title="Editar"
                message="Aquí puedes realizar modificaciones en los datos del libro."
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <CustomInput
                    label="Título"
                    name="name"
                    control={control}
                    defaultValue={name}
                  />
                  <CustomInput
                    label="Autor"
                    name="author"
                    control={control}
                    defaultValue={author}
                  />
                  <CustomTextArea
                    label="Sipnosis"
                    name="details"
                    control={control}
                    defaultValue={details}
                  />
                  <RowContainer>
                    <CustomInput
                      label="Precio"
                      name="price"
                      control={control}
                      defaultValue={price}
                    />
                    <CustomSelect
                      label="Categorias"
                      name="category"
                      control={control}
                      defaultValue={category}
                    />
                  </RowContainer>
                  <ImageUpdateContainer>
                    <LabelStyled>Portada del libro</LabelStyled>
                    <ImageUploader
                      name="frontImage"
                      onFileChange={handleFileChange}
                      defaultValue={frontImage ? frontImage.secureUrl : null}
                    />
                  </ImageUpdateContainer>
                  <ImageContainerBehind>
                    <LabelStyled>Contraportada del libro</LabelStyled>
                    <ImageUploader
                      name="backImage"
                      onFileChange={handleFileChange}
                    />
                  </ImageContainerBehind>
                  <RowContainer>
                    <CustomButton
                      specialStyle
                      buttonText="Cancelar"
                      fullWidth
                      onClick={toggleUpdateModal}
                    />
                    <CustomButton
                      buttonText="Guardar"
                      fullWidth
                      type="submit"
                    />
                  </RowContainer>
                </form>
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
