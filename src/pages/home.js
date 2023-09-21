import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomModal from "@/components/CustomModal";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const [isOpenForgotPassword, setOpenForgotPassword] = useState(false);

  const toggleForgotPasswordModal = () =>
    setOpenForgotPassword((isOpenForgotPassword) => !isOpenForgotPassword);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <CustomButton
        buttonText="Agrega un nuevo libro"
        onClick={toggleForgotPasswordModal}
      />
      <CustomModal
        open={isOpenForgotPassword}
        onClose={toggleForgotPasswordModal}
        title="Agregar"
        message="Añade un nuevo libro ingresando los datos correspondientes."
      >
        <CustomInput label="Título" name="title" control={control} />
        <CustomInput label="Autor" name="autor" control={control} />
        <CustomInput label="Sipnosis" name="sipnosis" control={control} />
        <div style={{ display: "flex", gap: "26px" }}>
          <CustomInput label="Sipnosis" name="sipnosis" control={control} />
          <CustomInput label="Sipnosis" name="sipnosis" control={control} />
          <select>
            <option>Hola</option>
            <option>Como</option>
          </select>
        </div>
      </CustomModal>
    </div>
  );
};

export default Home;
