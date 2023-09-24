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
import { useRouter } from "next/router";

export default function CustomLogOut({}) {
  const [userName, setUserName] = useState("");

  const [mostrarDiv, setMostrarDiv] = useState(false);
  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };
  const Name = users[0].name;

  const router = useRouter();
  const ruta = router.pathname.split("/").pop();

  const routeFixed = ruta.charAt(0).toUpperCase() + ruta.slice(1);
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

  const handleLogOut = () => {
    sessionStorage.clear('userLogged');
    router.push("/");
  };

  useEffect(() => {
    const userLogged = JSON.parse(sessionStorage.getItem('userLogged'));
    if (userLogged && userLogged.name) {
      const firstName = userLogged.name.split(' ')[0]; 
      setUserName(firstName);
    }
  }, []);

  

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
          <NameUse onClick={toggleDiv}>
          {userName}
          <ChevronIcon icon={faChevronDown} />
        </NameUse>
        <LogOut mostrar={mostrarDiv} onClick={handleLogOut}>
          <SignOutAlt icon={faSignOutAlt} />
          Log out
        </LogOut>
      </div>
    </Container>
  );
}