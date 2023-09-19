import React from "react";
import { book } from "@/constants";
import CustomBook from "@/components/CustomBook";
import { Container } from "@/styles/Book.style";
import Link from "next/link";

export default function ViewBook() {
  return (
    <Container>
      {Object.keys(book).map((key) => {
        const { id, name, author, image, details, category, price } = book[key];
        return (
          <Link key={id} href={`/books/view/${id}`}>
            <CustomBook
              key={id}
              image={image}
              name={name}
              author={author}
              price={price}
            />
          </Link>
        );
      })}
    </Container>
  );
}
