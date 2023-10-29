import React, { useState, useEffect } from "react"; 
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
import Search from "../Search";
import { ContainerButton } from "../Search/index.style";


export default function CustomLogOut({}) {
  const [userName, setUserName] = useState("");

  const [mostrarDiv, setMostrarDiv] = useState(false);
  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };

  const router = useRouter();
  const isBooksClientPage = router.pathname === "/booksClient";
  const ruta = router.pathname.split("/").pop();

  const routeFixed = ruta.charAt(0).toUpperCase() + ruta.slice(1);
  const [fecha, setFecha] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  
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
      {isBooksClientPage ? null : (
        <div>
          <NameWindow>
            {routeFixed}
            <Dates>
              {diaSemana} {fecha}
            </Dates>
          </NameWindow>
          <Search />
        </div>
      )}
      <ContainerButton>
          <NameUse onClick={toggleDiv}>
          {userName}
          <ChevronIcon icon={faChevronDown} />
        </NameUse>
        <LogOut mostrar={mostrarDiv} onClick={handleLogOut}>
          <SignOutAlt icon={faSignOutAlt} />
          Log out
        </LogOut>
      </ContainerButton>
    </Container>
  );
}