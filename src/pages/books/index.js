import React from "react";
import { book } from "@/constants";
import CustomBook from "@/components/CustomBook";
import { Container } from "@/styles/viewBook.style";

export default function ViewBook() {
  return (
    <Container>
      {Object.keys(book).map((key) => {
        const { id, name, author, image, details, category, price } = book[key];
        return (
          <CustomBook
            key={id}
            image={image}
            name={name}
            author={author}
            price={price}
          />
        );
      })}
    </Container>
  );
}
