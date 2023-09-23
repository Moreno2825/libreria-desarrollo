import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { users } from "@/constants";
import {
  ChevronIcon,
  Container,
  Dates,
  LogOut,
  NameUse,
  NameWindow,
  SignOutAlt,
} from "./index.style";
import { faChevronDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function CustomLogOut() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };
  const Name = users[0].name;

  const routeFixed = "Your Route";
  const [fecha, setFecha] = useState("");
  const [diaSemana, setDiaSemana] = useState("");

  useEffect(() => {
    const today = () => {
      const fechaHoy = new Date();
      const fechaFormateada = format(fechaHoy, "EEEE d ' ' MMMM ' ' y");
      setFecha(fechaFormateada);
    };
    today();
  }, []);

  useEffect(() => {
    //se  Agrega un evento para solicitar inicio de sesión aun despues de darle cerrar sesion" 
    const handleBeforeUnload = (e) => {
      if (!isLoggedIn) {
        const confirmationMessage = "inicia sesion";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };
    //este evento nos serivra para verificar el estado de inicio de sesion
    window.addEventListener("beforeunload", handleBeforeUnload);
    //remueve el el estado al darle click en cerrar sesion "setisloggedin"
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isLoggedIn]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Redirige directamente a la página del login
    window.location.href = "/";
    // si no esta iniciada  la sesion no muestra la pagina anterior (dashboard)
    window.history.replaceState(null, null, "/");
  };

  return (
    <Container>
      <div>
        <NameWindow>
          {routeFixed}
          <Dates>
            {diaSemana} {fecha}
          </Dates>
        </NameWindow>
      </div>
      <div>
        {isLoggedIn ? ( 
                <div>
            <NameUse onClick={toggleDiv}>
              {Name}
              <ChevronIcon icon={faChevronDown} />
            </NameUse>
            <LogOut mostrar={mostrarDiv} onClick={handleLogout}>
              <SignOutAlt icon={faSignOutAlt} />
              Log out
            </LogOut>
          </div>
        ) : null}
      </div>
    </Container>
  );
}