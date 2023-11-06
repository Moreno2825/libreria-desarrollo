import React from "react";
import {
  Container,
  HouseIcon,
  Position,
  Select,
  Titule,
} from "./index.style";
import Image from "next/image";
import Link from "next/link";
import {
  faBook,
  faHome,
  faUsers,
  faCartShopping,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const userRole = useSelector((state) => state.user.rol);

  return (
    <div>
      <Container>
        <Titule>
          <Image src="/img/BookLogo.png" width={100} height={100} alt="logo" />
          <Position>eBookCloud</Position>
        </Titule>
        <div>
        {userRole === "admin" || userRole === "SuperAdmin" ? (
            <Link href="/homeUser">
            <Select>
              <HouseIcon icon={faHome} />
              Dashboard
            </Select>
          </Link>
          ) : (
            <Link href="/homeUser">
              <Select>
                <HouseIcon icon={faHome} />
                Home
              </Select>
            </Link>
          )}
          {userRole === "admin" || userRole === "SuperAdmin" ? (
            <Link href="/books">
            <Select>
              <HouseIcon icon={faBook} />
              Cátalogo
            </Select>
          </Link>
          ) : (
            <Link href="/booksClient">
            <Select>
              <HouseIcon icon={faBook} />
              Cátalogo
            </Select>
          </Link>
          )}
          {userRole === "admin" || userRole === "SuperAdmin" ? (
            <Link href="/userAdmin">
              <Select>
                <HouseIcon icon={faUsers} />
                Usuarios
              </Select>
            </Link>
          ) : (
            <Link href="/shoppingCart">
              <Select>
                <HouseIcon icon={faCartShopping} />
                Carrito
              </Select>
            </Link>
          )}
          {(userRole !== "admin" && userRole !== "SuperAdmin") && (
            <Link href="/history">
              <Select>
                <HouseIcon icon={faList} />
                Historial de compra
              </Select>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
}
