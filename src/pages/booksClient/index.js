import ButtonCategoy from "@/components/ButtonCategory";
import React, { useEffect, useState } from "react";
import {
  BooksContainer,
  CategoriesContainer,
  NextImage,
  Text,
} from "@/styles/BooksClient.style";
import CustomBook from "@/components/CustomBook";
import CategoryRepo from "@/infraestructure/implementation/httpRequest/axios/CategoryRepo";
import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import GetAllBookUseCase from "@/application/usecases/bookUseCase/GetAllBookUseCase";
import Link from "next/link";

export default function BooksClient() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  const categoryRepo = new CategoryRepo();
  const getAllCategoryUseCase = new GetAllCategoryUseCase(categoryRepo);

  const fetchCategory = async () => {
    try {
      const categories = await getAllCategoryUseCase.run();
      setCategories(categories.data);
    } catch (error) {
      console.log(error);
    }
  };

  const bookRepo = new BookRepo();
  const getAllBookUseCase = new GetAllBookUseCase(bookRepo);

  const fecthBooks = async () => {
    try {
      const response = await getAllBookUseCase.run();
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      setFilteredBooks(
        books.filter((bookItem) => bookItem.id_category === selectedCategory)
      );
    } else {
      setFilteredBooks(books);
    }
  }, [books, selectedCategory]);

  const handleShowAllBooks = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    fecthBooks();
    fetchCategory();
  },[]);

  return (
    <div style={{}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NextImage src="/img/sale.png" width={1100} height={280} alt="sale" />
      </div>
      <Text>Categorías</Text>
      <CategoriesContainer>
        <ButtonCategoy category="Todos" onSelect={handleShowAllBooks} />
        {categories.map((category) => (
          <ButtonCategoy
            key={category.name}
            category={category.name}
            onSelect={() => setSelectedCategory(category.name)}
          />
        ))}
      </CategoriesContainer>
      <Text>Todos</Text>
      <BooksContainer>
        {filteredBooks.length === 0 ? (
          <Text>No books in this category.</Text>
        ) : (
          filteredBooks.map((book) => (
            <Link key={book._id} href={`/booksClient/view/${book._id}`}>
              <CustomBook
                key={book._id}
                image={book.frontImage}
                name={book.name}
                author={book.author}
                price={book.price}
              />
            </Link>
          ))
        )}
      </BooksContainer>
    </div>
  );
}
