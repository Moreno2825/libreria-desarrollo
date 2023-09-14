import CustomInput from "@/components/CustomInput";
import {
  Container,
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
import CustomButton from "@/components/CustomButton";

export default function Login() {
  const [isShowPassword, setShowPassword] = useState(false);
  const { control } = useForm({});

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };
  return (
    <Container>
      <GridContainer>
        <GridForm>
          <LogoContainer>
            <img src="../.././img/BookLogo.png" />
            <span>Bookstore</span>
          </LogoContainer>
          <FormStyled>
            <h1>Iniciar Sesión</h1>
            <span>
              Te damos la bienvenida a nuestra biblioteca digital, donde el
              conocimiento espera ser explorado.{" "}
            </span>
            <div style={{width: "100%", margin: "24px 0px"}}>
              <CustomInput
                label="Correo electronico"
                name="email"
                control={control}
              />
              <CustomInput
                label="Contraseña"
                name="password"
                control={control}
                type={isShowPassword ? "text" : "password"}
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
              <CustomButton buttonText="Entrar" />
            </div>
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
