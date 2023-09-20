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
import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function CustomLogOut() {
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };

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
          Mariana
          <ChevronIcon icon={faChevronDown} />
        </NameUse>
        <LogOut mostrar={mostrarDiv}>
          <SignOutAlt icon={faSignOutAlt} />
          Log out
        </LogOut>
      </div>
    </Container>
  );
}
