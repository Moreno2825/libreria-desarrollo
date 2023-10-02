import GetOneBookUseCase from "@/application/usecases/bookUseCase/GetOneBookUseCase";
import CustomButton from "@/components/CustomButton";
import CustomIndividualBook from "@/components/CustomIndividualBook";
import BookRepo from "@/infraestructure/implementation/httpRequest/axios/BookRepo";
import {
  ButtonContainer,
  ContainerBook,
  ContainerButtons,
} from "@/styles/viewBook.style";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function View() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedBook, setSelectedBook] = useState(null);

  const bookRepo = new BookRepo();
  const getOneBookUseCase = new GetOneBookUseCase(bookRepo);

  const fetchBook = async () => {
    if (id) {
      try {
        const response = await getOneBookUseCase.run(id);
        setSelectedBook(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (!selectedBook) {
    return <div>Libro no encontrado</div>;
  }

  const {
    name,
    author,
    frontImage,
    details,
    id_category: category,
    price,
  } = selectedBook;

  return (
    <ContainerBook>
      <CustomIndividualBook
        bookId={id}
        image={frontImage}
        name={name}
        author={author}
        price={price}
        details={details}
        category={category}
      />
    </ContainerBook>
  );
}
