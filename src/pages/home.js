import { Container, Message, TextContainer, Title } from "@/styles/Home.style";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <Container>
      <Image src="/img/libros.png" width={1200} height={300} alt="book" />
      <TextContainer>
        <Title>Bienvenido a eBookCloud</Title>
        <Message>
          Nos agrada tenerte de vuelta, gracias por estar aquí.
        </Message>
      </TextContainer>
    </Container>
  );
};

export default Home;
