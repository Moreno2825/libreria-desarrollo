import {
  Container,
  FormStyled,
  GridContainer,
  GridForm,
  GridImage,
  LinkStyled,
  LogoContainer,
} from "@/styles/Login.style";
import React from "react";

export default function Login() {
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
            <span>Te damos la bienvenida a nuestra biblioteca digital, donde el conocimiento espera ser explorado. </span>

            <span>Aún no tienes cuenta? <LinkStyled href="#">Registrate</LinkStyled></span> 
          </FormStyled>
        </GridForm>
        <GridImage></GridImage>
      </GridContainer>
    </Container>
  );
}
