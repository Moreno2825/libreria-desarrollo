import React from "react";
import { ButtonStyled, Container } from "@/styles/Index.style";
import CustomButton from "@/components/CustomButton";


export default function Home() {
  return (
    <Container>
      <h1>Hola</h1>
      <ButtonStyled>Botón de mui</ButtonStyled>
      <CustomButton buttonText="Componente de boton" />
    </Container>
  );
}
