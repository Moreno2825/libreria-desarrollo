import React from "react";
import { Container, HouseIcon, Position, Select } from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { faHome } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
  return (
    <div>
      <Container>
        <div style={{display: "flex" }}>
          <Image src="/img/BookLogo.png" width={800 / 10} height={740 / 10} />
          <Position>BOOKSTORE</Position>
        </div>

        <div>
          <Link href="/home">
          <Select>
            <HouseIcon
            icon={faHome}/>
          Home
          </Select>
          </Link>

          <Link href="/home">
          <Select>
          <FontAwesomeIcon icon={['fa', 'solid', 'fa-house']} />
          Libros
          </Select>
          </Link>

          <Link href="/home">
          <Select>
          <FontAwesomeIcon icon="fa-solid fa-house" />
          Usuarios
          </Select>
          </Link>
        </div>
      </Container>
    </div>
  );
}
