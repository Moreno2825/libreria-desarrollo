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
  HoverImage,
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
import Order from "@/domain/entities/order";
import OrderRepo from "@/infraestructure/implementation/httpRequest/axios/OrderRepo";
import CreateOrderUseCase from "@/application/usecases/orderUseCase/CreateOrderUseCase";
import CustomAlert from "../CustomAlert";

const CustomIndividualBook = ({
  bookId,
  image,
  imageBack,
  name,
  author,
  price,
  details,
  category,
  onUpdated,
}) => {
  const [isEditSuccessAlert, setEditSuccessAlert] = useState(false);
  const [showEditAlertForOneSecond, setShowEditAlertForOneSecond] =
    useState(false);
  const [isPurchaseSuccess, setPurchaseSuccess] = useState(false);
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

  const resetPurchaseAlert = () => {
    setTimeout(() => {
      setPurchaseSuccess(false);
    }, 1000);
  };

  const bookRepo = new BookRepo(userId);
  const deleteBookUseCase = new DeleteBookUseCase(bookRepo);

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
      setEditSuccessAlert(true);
      setShowEditAlertForOneSecond(true);
      setTimeout(() => {
        setShowEditAlertForOneSecond(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating book: ", error);
    }
  };

  const onSubmitOrder = async ({ quantity, event }) => {
    const data = {
      productId: bookId,
      userId: userId,
      quantity: quantity,
      percentDiscount: 0,
    };

    const newOrder = new Order(
      data.productId,
      data.userId,
      data.quantity,
      null,
      data.percentDiscount,
      null
    );

    const orderRepo = new OrderRepo(userId);
    const createOrderUseCase = new CreateOrderUseCase(orderRepo);

    try {
      const createdOrder = await createOrderUseCase.run(newOrder);
      setPurchaseSuccess(true);
      resetPurchaseAlert();
    } catch (error) {
      console.error("Error creando orden", error);
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

  const handleDeleteClick = (bookId) => {
    setBookIdToDelete(bookId);
    toggleDeleteModal();
  };

  const handleDeleteConfirmation = async () => {
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
                <HoverImage src={imageBack}></HoverImage>
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
                        <div style={{ width: "100%" }}>
                          <CustomButton
                            specialStyle
                            buttonText="Cancelar"
                            fullWidth
                            onClick={toggleUpdateModal}
                          />
                        </div>
                        <div style={{ width: "100%" }}>
                          <CustomButton
                            buttonText="Guardar"
                            fullWidth
                            type="submit"
                          />
                        </div>
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
                        width={200}
                        height={130}
                        alt="logo"
                      />
                    </ImagenD>
                    <RowContainer>
                      <div style={{ width: "100%" }}>
                        <CustomButton
                          buttonText="Cancelar"
                          fullWidth
                          specialStyle
                          onClick={toggleDeleteModal}
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <CustomButton
                          fullWidth
                          buttonText="Aceptar"
                          onClick={handleDeleteConfirmation}
                        />
                      </div>
                    </RowContainer>
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
                <HoverImage src={imageBack}></HoverImage>
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
                  <CustomButton
                    buttonText="Agregar al carrito"
                    showIncrementDecrement
                    onClick={onSubmitOrder}
                  />
                </ContainerButtonsUser>
              </BasicInformationUser>
            </div>
          </BasicInformationContainer>
        </Container>
      )}
      <CustomAlert
        open={isPurchaseSuccess}
        onClose={() => setPurchaseSuccess(false)}
        title="Compra Exitosa"
        text="Se ha agregado correctamente al carrito"
      >
        <Image
          src="/img/correcto.png"
          width={109}
          height={123}
          alt="ok"
        ></Image>
      </CustomAlert>
      {isEditSuccessAlert && (
        <CustomAlert
          open={showEditAlertForOneSecond}
          onClose={() => setEditSuccessAlert(false)}
          title="Edición Exitosa"
          text="El libro se ha editado correctamente."
        >
          <Image
            src="/img/correcto.png"
            width={109}
            height={123}
            alt="ok"
          ></Image>
        </CustomAlert>
      )}
    </div>
  );
};

export default CustomIndividualBook;
