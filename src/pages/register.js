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

const registerSchema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
  confirmpassword: yup.string().required("La contraseña es requerida"),
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
      confirmpassword: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const route = useRouter();

  const onSubmit = (data) => {
    route.push("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  const togglePasswordVisibilityConfirm = () => {
    setShowPasswordConfirm(!isShowPasswordConfirm);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente al presionar "Enter" en un campo
      handleSubmit(onSubmit)(); // Ejecuta la función de envío del formulario
    }
  };

  return (
    <Container>
      <GridContainer>
        <GridForm>
          <LogoContainer>
          <Image src="/img/BookLogo.png" alt="logo" width={90} height={90}/>
            <span>Bookstore</span>
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
              <CustomInput
                label="Confirmar contraseña"
                name="confirmpassword"
                control={control}
                error={errors.confirmpassword?.message || ""}
                type={isShowPasswordConfirm ? "text" : "password"}
                onKeyDown={handleEnterKey}
                icon={
                  isShowPasswordConfirm ? (
                    <EyeIcon
                      icon={faEyeSlash}
                      onClick={togglePasswordVisibilityConfirm}
                    />
                  ) : (
                    <EyeIcon icon={faEye} onClick={togglePasswordVisibilityConfirm} />
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
