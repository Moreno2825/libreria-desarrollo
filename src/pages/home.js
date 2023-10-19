import GetAllBookUseCase from "@/application/usecases/bookUseCase/GetAllBookUseCase";
import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomModal from "@/components/CustomModal";
import CustomTextArea from "@/components/CustomTextArea";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import CategoryRepo from "@/infraestructure/implementation/httpRequest/axios/CategoryRepo";
import { ContainerUs, Img, Line, Phrase, Text } from "@/styles/HomeUsers";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

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
     <ContainerUs>
      <Phrase>
      Un mundo de historias en tu pantalla.
      </Phrase>
      <Line></Line>
      <Text>
      Bienvenido a eBookCloud, tu destino literario virtual. 
      En nuestra plataforma, te ofrecemos acceso a una amplia y diversa 
      selección de libros de todos los géneros. Navega por nuestra biblioteca 
      digital, donde cada página es una puerta a un mundo nuevo, una aventura por descubrir.
      </Text>
     </ContainerUs>
     <Img>
     <Image src="/img/PhotoRoom.png" width={434} height={390} alt="logo"/>
     </Img>
    </div>
  );
};

export default Home;
