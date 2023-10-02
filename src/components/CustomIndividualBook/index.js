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
} from "./index.style";
import Image from "next/image";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import CustomTextArea from "../CustomTextArea";
import CustomSelect from "../CustomSelect";
import UpdateBookUseCase from "@/application/usecases/bookUseCase/UpdateBookUseCase";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import Book from "@/domain/entities/book";
import CategoryRepo from "@/infraestructure/implementation/httpRequest/axios/CategoryRepo";
import GetOneCategoryUseCase from "@/application/usecases/categoryUseCase/GetOneCategoryUseCase";

const CustomIndividualBook = ({
  id,
  image,
  name,
  author,
  price,
  details,
  category,
}) => {
  const [isOpen, setOpenDeletePassword] = useState(false);
  const [isOpenUpdate, setOpenUpdate] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState(null);

  const toggleDeletePasswordModal = () =>
    setOpenDeletePassword((isOpen) => !isOpen);

  const toggleUpdateModal = () =>
    setOpenUpdate((isOpenUpdate) => !isOpenUpdate);

  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    setValue('name', name);
    setValue('author', author);
    setValue('details', details);
    setValue('price', price);
    setValue('category', category);
  }, [
    name,
    author,
    details,
    price,
    category,
    setValue,
  ]);

  const onSubmit = async (data) => {
    const updatedBook = new Book(
      id,
      data.name,
      data.author,
      data.details,
      data.category,
      data.price,
    );
    const bookRepo = new BookRepo();
    const updateBookUseCase = new UpdateBookUseCase(bookRepo);

    try {
      const response = await updateBookUseCase.run(updatedBook);
      console.log("Book updated successfully: ", response);
      toggleUpdateModal();
    } catch (error) {
      console.error("Error updating book: ", error);
    }
  };

  const categoryBook = new CategoryRepo();
  const getOneCategoryUseCase = new GetOneCategoryUseCase(categoryBook);

  const fetchCategory = async () => {
    if(category){
      console.log(category);
      try{
        const response = await getOneCategoryUseCase.run(category);
        console.log('API response:', response);
        setCategoryInfo(response);
      }catch(error){
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [category]); 

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
              <pan className="DetailsStyled">{categoryInfo ? categoryInfo.name : category}</pan>
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
