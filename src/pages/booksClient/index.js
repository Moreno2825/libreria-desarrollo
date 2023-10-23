import ButtonCategoy from "@/components/ButtonCategory";
import React, { useState } from "react";
import { categories, book } from "@/constants";
import {
  BooksContainer,
  CategoriesContainer,
  NextImage,
  Text,
} from "@/styles/BooksClient.style";
import CustomBook from "@/components/CustomBook";

export default function BooksClient() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredBooks = selectedCategory
    ? Object.values(book).filter((book) => book.category === selectedCategory)
    : Object.values(book);

  const handleShowAllBooks = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <div>
        <NextImage src="/img/sale.png" width={1200} height={300} alt="sale" />
      </div>
      <Text>Categorías</Text>
      <CategoriesContainer>
        <ButtonCategoy category="Todos" onSelect={handleShowAllBooks} />
        {categories.map((category) => (
          <ButtonCategoy
            key={category.id}
            category={category.category}
            onSelect={setSelectedCategory}
          />
        ))}
      </CategoriesContainer>
      <Text>Todos</Text>
      <BooksContainer>
      {filteredBooks.length === 0 ? ( 
          <Text>No books in this category.</Text>
        ) : (
          filteredBooks.map((book) => (
            <CustomBook
              key={book.id}
              image={book.image}
              name={book.name}
              author={book.author}
              price={book.price}
            />
          ))
        )}
      </BooksContainer>
    </div>
  );
}
