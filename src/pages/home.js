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
      
    </div>
  );
};

export default Home;
