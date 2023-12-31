import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomBook from "@/components/CustomBook";
import {
  AddContainer,
  BooksContainer,
  ImageContainer,
  ImageContainerBehind,
  LabelStyled,
  RecentBooks,
  RowContainer,
} from "@/styles/Book.style";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import CustomTextArea from "@/components/CustomTextArea";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import GetAllBookUseCase from "@/application/usecases/bookUseCase/GetAllBookUseCase";
import Book from "@/domain/entities/book";
import CreateBookUseCase from "@/application/usecases/bookUseCase/CreateBookUseCase";
import ImageUploader from "@/components/imageUploader";
import { useSelector } from "react-redux";
import Image from "next/image";
import CustomAlert from "@/components/CustomAlert";

export default function ViewBook() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showAlertForOneSecond, setShowAlertForOneSecond] = useState(false);

  const [isAddModal, setAddModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [files, setFiles] = useState({});
  const userId = useSelector((state) => state.user._id);

  const toggleAddModal = () => setAddModal((isAddModal) => !isAddModal);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const handleFileChange = (name, file) => {
    console.log(name, file);
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: file,
    }));
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    Object.keys(files).forEach((key) => {
      formData.append(key, files[key]);
    });

    const book = new Book(
      null,
      data.name,
      data.author,
      data.details,
      data.category,
      data.price,
      null,
      files.frontImage,
      files.backImage
    );
    const bookRepo = new BookRepo(userId);
    const createBookUseCase = new CreateBookUseCase(bookRepo);
    try {
      const createdBook = await createBookUseCase.run(book);
      console.log("Libro creado:", createdBook);
      fecthBooks();
      toggleAddModal();
      setShowSuccessAlert(true); 
    setShowAlertForOneSecond(true); 
    setTimeout(() => {
      setShowAlertForOneSecond(false); 
    }, 1000);
    } catch (error) {
      console.error("Error creando libro:", error);
    }
  };

  const bookRepo = new BookRepo();
  const getAllBookUseCase = new GetAllBookUseCase(bookRepo);

  const fecthBooks = async () => {
    try {
      const response = await getAllBookUseCase.run();
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthBooks();
  }, []);

  return (
    <div>
      <AddContainer>
        <CustomButton
          buttonText="Agrega un nuevo libro"
          onClick={toggleAddModal}
        />
      </AddContainer>
      <div>
        <RecentBooks>Libros en el cátalogo:</RecentBooks>
        <BooksContainer>
          {books.map((book) => (
            <Link key={book._id} href={`/books/view/${book._id}`}>
              <CustomBook
                key={book._id}
                image={book.frontImage}
                name={book.name}
                author={book.author}
                price={book.price}
              />
            </Link>
          ))}
        </BooksContainer>
      </div>
      <CustomModal
        open={isAddModal}
        onClose={toggleAddModal}
        title="Agregar"
        message="Añade un nuevo libro ingresando los datos correspondientes."
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput label="Título" name="name" control={control} />
          <CustomInput label="Autor" name="author" control={control} />
          <CustomTextArea label="Sipnosis" name="details" control={control} />
          <RowContainer>
            <CustomInput label="Precio" name="price" control={control} />
            <CustomSelect
              label="Categorias"
              name="category"
              control={control}
            />
          </RowContainer>
          <ImageContainer>
            <LabelStyled>Portada del libro</LabelStyled>
            <ImageUploader name="frontImage" onFileChange={handleFileChange} />
          </ImageContainer>
          <ImageContainerBehind>
            <LabelStyled>Contraportada del libro</LabelStyled>
            <ImageUploader name="backImage" onFileChange={handleFileChange} />
          </ImageContainerBehind>
          <RowContainer>
            <div style={{ width: "100%" }}>
              <CustomButton
                specialStyle
                buttonText="Cancelar"
                fullWidth
                onClick={toggleAddModal}
              />
            </div>
            <div style={{ width: "100%" }}>
              <CustomButton buttonText="Guardar" fullWidth type="submit" />
            </div>
          </RowContainer>
        </form>
      </CustomModal>
      {showSuccessAlert && (
        <CustomAlert
          open={showAlertForOneSecond}
          onClose={() => setShowSuccessAlert(false)}
          title="Libro agregado exitosamente"
          text="El libro se ha agregado correctamente a tu cátalogo."
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
}
