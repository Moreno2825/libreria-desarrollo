import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import {
  Container,
  DataContainer,
  EyeIcon,
  FormStyled,
  GridContainer,
  GridForm,
  GridImage,
  LinkStyled,
  LogoContainer,
} from "@/styles/Register.style";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import SignUpUserUseCase from "@/application/usecases/userUseCase/SignUpUserUseCase";
import User from "@/domain/entities/user";

const registerSchema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});

export default function Register() {
  const [isShowPassword, setShowPassword] = useState(false);
  const [isShowPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const route = useRouter();

  const onSubmit = async (data) => {
    const user = new User( null, data.name, null,  data.email, data.password);
      const userRepo = new UserRepo();
      const signUpUserUseCase = new SignUpUserUseCase(userRepo);
    try{
      const registeredUser = await signUpUserUseCase.run(user);
      console.log("Usuario creado:", registeredUser);
      route.push("/");
    } catch (error) {
      console.error("Error creando usuario:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Container>
      <GridContainer>
        <GridForm>
          <LogoContainer>
          <Image src="/img/BookLogo.png" alt="logo" width={90} height={90}/>
            <span>eBookCloud</span>
          </LogoContainer>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <h1>Registrate</h1>
            <span>
              ¿Listo para unirse a nuestra comunidad de lectores? ¡Regístrate
              ahora para descubrir un mundo de libros!
            </span>
            <DataContainer>
              <CustomInput
                label="Nombre"
                name="name"
                control={control}
                error={errors.name?.message || ""}
                onKeyDown={handleEnterKey}
              />
              <CustomInput
                label="Correo electronico"
                name="email"
                control={control}
                error={errors.email?.message || ""}
                onKeyDown={handleEnterKey}
              />
              <CustomInput
                label="Contraseña"
                name="password"
                control={control}
                error={errors.password?.message || ""}
                type={isShowPassword ? "text" : "password"}
                onKeyDown={handleEnterKey}
                icon={
                  isShowPassword ? (
                    <EyeIcon
                      icon={faEyeSlash}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <EyeIcon icon={faEye} onClick={togglePasswordVisibility} />
                  )
                }
              />
              <CustomButton buttonText="Registrarse" type="submit" onClick={handleSubmit(onSubmit)} fullWidth/>
            </DataContainer>
            <span>
              Ya tienes cuenta? <LinkStyled href="/">Inicia sesión</LinkStyled>
            </span>
          </FormStyled>
        </GridForm>
        <GridImage></GridImage>
      </GridContainer>
    </Container>
  );
}
