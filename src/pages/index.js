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
} from "@/styles/Login.style";
import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "@/components/CustomButton";
import { users } from "@/constants";
import { useRouter } from "next/router";

const loginSchema = yup.object().shape({
  email: yup.string().email("Ingresa un correo electrónico válido").required("El correo electrónico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});


export default function Login() {
  const [isShowPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const route = useRouter();

  const onSubmit = (data) => {
    const userExists = users.some((user) => user.email === data.email && user.password === data.password);

    if (userExists) {
      route.push("/home");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  // Función para manejar la tecla "Enter" en los campos de entrada
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
            <img src="../.././img/BookLogo.png" />
            <span>Bookstore</span>
          </LogoContainer>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <h1>Iniciar Sesión</h1>
            <span>
              Te damos la bienvenida a nuestra biblioteca digital, donde el
              conocimiento espera ser explorado.{" "}
            </span>
            <DataContainer>
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
                type={isShowPassword ? "text" : "password"}
                error={errors.password?.message ||""}
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
              <CustomButton buttonText="Entrar" type="submit" onClick={handleSubmit(onSubmit)} />
            </DataContainer>
            <span>
              Aún no tienes cuenta? <LinkStyled href="#">Registrate</LinkStyled>
            </span>
          </FormStyled>
        </GridForm>
        <GridImage></GridImage>
      </GridContainer>
    </Container>
  );
}
