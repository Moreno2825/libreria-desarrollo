import ButtonCategoy from "@/components/ButtonCategory";
import React, { useEffect, useState } from "react";
import {
  BooksContainer,
  CategoriesContainer,
  ContainerSearch,
  NextImage,
  Text,
} from "@/styles/BooksClient.style";
import CustomBook from "@/components/CustomBook";
import CategoryRepo from "@/infraestructure/implementation/httpRequest/axios/CategoryRepo";
import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import GetAllBookUseCase from "@/application/usecases/bookUseCase/GetAllBookUseCase";
import Link from "next/link";
import Search from "@/components/Search";

export default function BooksClient() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryRepo = new CategoryRepo();
  const getAllCategoryUseCase = new GetAllCategoryUseCase(categoryRepo);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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
    fetchCategory();
    fecthBooks();
  }, []);

  useEffect(() => {
    let filtered = books;
    if (selectedCategory) {
      filtered = filtered.filter(
        (bookItem) => bookItem.id_category === selectedCategory
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((bookItem) =>
        bookItem.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredBooks(filtered);
  }, [books, selectedCategory, searchQuery]);

  const handleShowAllBooks = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    fecthBooks();
    fetchCategory();
  },[]);

  return (
    <div>
      <ContainerSearch>
        <Search onSearch={handleSearch} />
      </ContainerSearch>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NextImage src="/img/sale.png" width={1300} height={280} alt="sale" />
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
