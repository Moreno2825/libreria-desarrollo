import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
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
import { useSelector } from "react-redux";

export default function CustomLogOut({}) {

  const name = useSelector((state) => state.user.name);
  const [isClient, setIsClient] = useState(false);
  const [diaSemana, setDiaSemana] = useState("");
  const [userName, setUserName] = useState("");
  const [fecha, setFecha] = useState("");
  const router = useRouter();
  const ruta = router.pathname.split("/").pop();

  const [mostrarDiv, setMostrarDiv] = useState(false);
  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };

  const handleLogOut = () => {
    sessionStorage.clear("userLogged");
    router.push("/");
  };

  useEffect(() => {
    const today = () => {
      const fechaHoy = new Date();
      const fechaFormateada = format(fechaHoy, "EEEE d ' ' MMMM ' ' y", {
        locale: es,
      });

      const fechaConPrimeraLetraMayuscula =
        fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
      setFecha(fechaConPrimeraLetraMayuscula);
    };
    today();
  }, []);

  useEffect(() => {
    setIsClient(true);
    const userLogged = JSON.parse(sessionStorage.getItem("userLogged"));
    if (userLogged && userLogged.name) {
      const firstName = userLogged.name.split(" ")[0];
      setUserName(firstName);
    }
  }, []);

  return (
    <Container>
      <div>
        <NameWindow>
          {ruta !== "booksClient" && (
            <Dates>
              {diaSemana} {fecha}
            </Dates>
          )}
        </NameWindow>
      </div>
      <div>
        <NameUse onClick={toggleDiv}>
          {isClient ? name : "Cargando..."}
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
