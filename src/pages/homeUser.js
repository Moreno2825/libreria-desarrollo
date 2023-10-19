import { ContainerUs, Down, Img, Inf, InfIcon, InfText, InfTitles, Line, Phrase, Text, TextWhy, Why } from "@/styles/HomeUsers";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import { faBookOpenReader, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

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
      <CustomButton
        buttonText="Comenzar a descubrir"
      />
     </ContainerUs>
     <Img>
     <Image src="/img/PhotoRoom.png" width={434} height={390} alt="logo"/>
     </Img>

    <Down>
     <Why>
     ¿Por qué deberías elegirnos?
     <TextWhy>Descubre nuevas historias, autores innovadores 
      y expande tus horizontes literarios con nosotros.</TextWhy>
     </Why>
     <Inf>
     <InfIcon icon={faBookOpenReader} />
     <InfTitles>Variedad de títulos</InfTitles>
     <InfText>
     Ofrecemos una inmensa variedad de títulos que abarcan desde clásicos
      literarios hasta las últimas novedades en todos los géneros imaginables.
     </InfText>
     </Inf>
     <Inf>
      <InfIcon icon={faCircleInfo} />
      <InfTitles>Información detallada</InfTitles>
      <InfText>
      Proporcionamos información sobre cada libro, lo que te permite tomar decisiones 
      informadas sobre tus compras y explorar cada libro antes de adquirirlo.
      </InfText>
     </Inf>
     </Down>
    </div>
  );
};

export default Home;