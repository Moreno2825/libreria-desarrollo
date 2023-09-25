import React from "react";
import { book } from "@/constants";
import CustomBook from "@/components/CustomBook";
import { BooksContainer, RecentBooks } from "@/styles/Book.style";
import Link from "next/link";

export default function ViewBook() {
  return (
    <div>
      <RecentBooks>Añadidos recientemente</RecentBooks>
      <BooksContainer>
        {Object.keys(book).map((key) => {
          const { id, name, author, image, details, category, price } =
            book[key];
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
      </BooksContainer>
    </div>
  );
}
