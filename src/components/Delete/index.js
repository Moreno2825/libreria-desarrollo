import Image from "next/image";
import { Buttons, Custom, ImagenD } from "./index.style";
import CustomButton from "../CustomButton";
import CustomModal from "../CustomModal";
import React, { useState } from "react";
import { ContainerButtons } from "../CustomIndividualBook/index.style";

export default function DeleteB() {
  const [isOpen, setOpenForgotPassword] = useState(false);

  const toggleForgotPasswordModal = () =>
    setOpenForgotPassword((isOpen) => !isOpen);

  return (
    <Custom>
      <ContainerButtons>
        <CustomButton buttonText="Editar" />
        <CustomButton
          buttonText="Eliminar"
          onClick={toggleForgotPasswordModal}
        />
        <CustomModal
          open={isOpen}
          title="Eliminar"
          message="¿Deseas eliminar este libro?"
        >
          <ImagenD>
            <Image src="/img/Delete.png" width={233} height={127} alt="logo" />
          </ImagenD>
          <Buttons>
            <CustomButton buttonText="Aceptar" />
            <CustomButton buttonText="Aceptar" />
          </Buttons>
        </CustomModal>
      </ContainerButtons>
    </Custom>
  );
}
