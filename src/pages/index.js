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
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <GridContainer>
        <GridForm>
          <LogoContainer>
            <Image src="/img/BookLogo.png" alt="logo" width={100} height={100}/>
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
              Aún no tienes cuenta? <LinkStyled href="/register">Registrate</LinkStyled>
            </span>
          </FormStyled>
        </GridForm>
        <GridImage></GridImage>
      </GridContainer>
    </Container>
  );
}
