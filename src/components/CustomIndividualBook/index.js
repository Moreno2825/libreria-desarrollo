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
  BasicInformationUser,
  ContainerButtonsUser,
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
import { useRouter } from "next/router";
import DeleteBookUseCase from "@/application/usecases/bookUseCase/DeleteBookUseCase";
import { useSelector } from "react-redux";

const CustomIndividualBook = ({
  bookId,
  image,
  name,
  author,
  price,
  details,
  category,
  onUpdated,
}) => {
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [isOpen, setOpenDelete] = useState(false);
  const [isOpenUpdate, setOpenUpdatePassword] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState(null);
  const userId = useSelector((state) => state.user._id);

  const userRole = useSelector((state) => state.user.rol);
  const route = useRouter();

  const toggleDeleteModal = () => setOpenDelete((isOpen) => !isOpen);

  const toggleUpdateModal = () =>
    setOpenUpdatePassword((isOpenUpdate) => !isOpenUpdate);

  const handleDeleteClick = (bookId) => {
    setBookIdToDelete(bookId);
    toggleDeleteModal();
  };

  const handleDeleteConfirmation = async () => {
    const bookRepo = new BookRepo(userId);
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
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    setValue("name", name);
    setValue("author", author);
    setValue("details", details);
    setValue("price", price);
    setValue("category", category);
  }, [name, author, details, price, category, setValue]);

  const onSubmit = async (data) => {
    const updatedBook = new Book(
      bookId,
      data.name,
      data.author,
      data.details,
      data.category,
      data.price
    );
    const bookRepo = new BookRepo(userId);
    const updateBookUseCase = new UpdateBookUseCase(bookRepo);

    try {
      const response = await updateBookUseCase.run(updatedBook);
      console.log("Book updated successfully: ", response);
      toggleUpdateModal();
      onUpdated();
    } catch (error) {
      console.error("Error updating book: ", error);
    }
  };

  const categoryBook = new CategoryRepo();
  const getOneCategoryUseCase = new GetOneCategoryUseCase(categoryBook);

  const fetchCategory = async () => {
    if (category) {
      try {
        const response = await getOneCategoryUseCase.run(category);
        setCategoryInfo(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      {userRole === "admin" || userRole === "SuperAdmin" ? (
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
                  <pan className="DetailsStyled">
                    {categoryInfo ? categoryInfo.name : category}
                  </pan>
                </div>
                <div className="DetailOptionsStyled">
                  <span className="PriceOptionsStyled">
                    {price ? `$${price}` : ""}
                  </span>
                </div>
                <ContainerButtons>
                  <CustomButton
                    buttonText="Editar"
                    onClick={toggleUpdateModal}
                  />
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
                        src="/img/delete.png"
                        width={109}
                        height={123}
                        alt="logo"
                      />
                    </ImagenD>
                    <Buttons>
                      <CustomButton
                        buttonText="Cancelar"
                        specialStyle
                        onClick={toggleDeleteModal}
                      />
                      <CustomButton
                        buttonText="Aceptar"
                        onClick={handleDeleteConfirmation}
                      />
                    </Buttons>
                  </CustomModal>
                </ContainerButtons>
              </BasicInformation>
            </div>
          </BasicInformationContainer>
        </Container>
      ) : (
        <Container>
          <BasicInformationContainer>
            <ContainerImageAndSpan>
              <ImageContainer>
                <ImageStyled src={image}></ImageStyled>
              </ImageContainer>
            </ContainerImageAndSpan>
            <div>
              <BasicInformationUser>
                <div className="NameStyled">{name}</div>
                <div className="DetailOptionsStyled">
                  <span className="AutorStyled">{author}</span>
                </div>
                <div className="DetailOptionsStyled">
                  <span className="DetailsStyled">{details}</span>
                </div>
                <div className="DetailOptionsStyled">
                  <pan className="DetailsStyled">
                    {categoryInfo ? categoryInfo.name : category}
                  </pan>
                </div>
                <div className="DetailOptionsStyled">
                  <span className="PriceOptionsStyled">
                    {price ? `$${price}` : ""}
                  </span>
                </div>
                <ContainerButtonsUser>
                  <CustomButton buttonText="Agregar al carrito"/>
                </ContainerButtonsUser>
              </BasicInformationUser>
            </div>
          </BasicInformationContainer>
        </Container>
      )}
    </div>
  );
};

export default CustomIndividualBook;
