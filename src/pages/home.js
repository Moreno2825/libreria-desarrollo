import { ContainerUs, Img, Line, Phrase, Text } from "@/styles/HomeUsers";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

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
    </div>
  );
};

export default Home;
