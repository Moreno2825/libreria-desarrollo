import React from "react";
import Image from "next/image";
import {
  Container,
  DetailsContiner,
  PriceIconContainer,
} from "./index.style";

const CustomBook = ({ image, name, author, price }) => {
  return (
    <Container>
      <Image src={image} alt={name} width={250} height={230} />
      <DetailsContiner>
        <div className="NameStyle">{name}</div>
        <div className="AuthorStyle">{author}</div>
      </DetailsContiner>
      {price > 0.0 ? (
        <PriceIconContainer>
          <span>$ {price}</span>
        </PriceIconContainer>
      ) : null}
    </Container>
  );
};

export default CustomBook;
