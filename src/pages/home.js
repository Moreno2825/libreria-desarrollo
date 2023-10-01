import GetAllBookUseCase from "@/application/usecases/bookUseCase/GetAllBookUseCase";
import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomModal from "@/components/CustomModal";
import CustomTextArea from "@/components/CustomTextArea";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import CategoryRepo from "@/infraestructure/implementation/httpRequest/axios/CategoryRepo";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const [isOpenForgotPassword, setOpenForgotPassword] = useState(false);
  const [categories, setCategories] = useState([]);

  const toggleForgotPasswordModal = () =>
    setOpenForgotPassword((isOpenForgotPassword) => !isOpenForgotPassword);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const categoryRepo = new CategoryRepo();
  const getAllCategoryUseCase = new GetAllCategoryUseCase(categoryRepo);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategoryUseCase.run();
      const fetchedCategories = response.data;  // Paso 2: Extraer categorías de la propiedad data
      setCategories(fetchedCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBook();
  }, []);

  const bookRepo = new BookRepo();
  const getAllBookUseCase = new GetAllBookUseCase(bookRepo);
  
  const fetchBook = async () => {
    try {
      const response = await getAllBookUseCase.run();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <ul>
        {categories.map(category => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
      <CustomButton
        buttonText="Agrega un nuevo libro"
        onClick={toggleForgotPasswordModal}
      />
      <CustomModal
        open={isOpenForgotPassword}
        onClose={toggleForgotPasswordModal}
        title="Agregar"
        message="Añade un nuevo libro ingresando los datos correspondientes."
      >
        <CustomInput label="Título" name="title" control={control} />
        <CustomInput label="Autor" name="autor" control={control} />
        <CustomTextArea label="Sipnosis" sipnosis="hshshsh" />
        <div style={{ display: "flex", gap: "26px" }}>
          <CustomInput label="Sipnosis" name="sipnosis" control={control} />
          <CustomInput label="Sipnosis" name="sipnosis" control={control} />
        </div>
      </CustomModal>
    </div>
  );
};

export default Home;
