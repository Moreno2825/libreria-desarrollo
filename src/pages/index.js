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
import { useRouter } from "next/router";
import Image from "next/image";
import SignInUserUseCase from "@/application/usecases/userUseCase/SignInUserUseCase";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import User from "@/domain/entities/user";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/actions/userActions";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});

export default function Login() {
  const [isShowPassword, setShowPassword] = useState(false);
  const userRole = useSelector((state) => state.user.rol);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const route = useRouter();

  const onSubmit = async (data) => {
    try {
      const user = new User(null, null, null, data.email, data.password, null);
      const userRepo = new UserRepo(dispatch);
      const signInUseCase = new SignInUserUseCase(userRepo);
      const signInResponse = await signInUseCase.run(user);

      if (signInResponse && signInResponse._id) {
        dispatch(setUser(signInResponse));
        {
          userRole === "admin" || userRole === "SuperAdmin"
            ? route.push("/home")
            : route.push("/homeUser");
        }
      } else {
        window.alert("El usuario no existe o la contraseña es incorrecta");
      }
    } catch (error) {
      console.error("Error", error);
      if (error.response && error.response.status === 400) {
        window.alert("El usuario no existe o la contraseña es incorrecta");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <Container>
      <GridContainer>
        <GridForm>
          <LogoContainer>
            <Image
              src="/img/BookLogo.png"
              alt="logo"
              width={100}
              height={100}
            />
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
                error={errors.password?.message || ""}
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
              <CustomButton
                buttonText="Entrar"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                fullWidth
              />
            </DataContainer>
            <span>
              Aún no tienes cuenta?{" "}
              <LinkStyled href="/register">Registrate</LinkStyled>
            </span>
          </FormStyled>
        </GridForm>
        <GridImage>
          <Image src="/img/image.png" width={768} height={703}></Image>
        </GridImage>
      </GridContainer>
    </Container>
  );
}
