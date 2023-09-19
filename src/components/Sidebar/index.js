import React from "react";
import { Container, Divstyled, HouseIcon, Position, Select, Titule } from "./index.style";
import Image from "next/image";
import Link from "next/link";
import { faBook, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div>
      <Container>
        <Titule>
          <Image src="/img/BookLogo.png" width={100} height={100} />
          <Position>Bookstore</Position>
        </Titule>

        <div>
          <Link href="/home">
            <Select>
              <HouseIcon icon={faHome} />
              Home
            </Select>
          </Link>

          <Link href="/Sidebar">
            <Select>
              <HouseIcon icon={faBook} />
              Libros
            </Select>
          </Link>

          <Link href="/home">
            <Select>
              <HouseIcon icon={faUsers} />
              Usuarios
            </Select>
          </Link>
        </div>
      </Container>
    </div>
  );
}
