import CustomButton from "@/components/CustomButton";
import CustomIndividualBook from "@/components/CustomIndividualBook";
import { book } from "@/constants";
import { ButtonContainer, ContainerBook } from "@/styles/viewBook.style";
import { useRouter } from "next/router";
import React from "react";

export default function View() {
  const router = useRouter();
  const { id } = router.query;

  const selectedBook = book[id];

  if (!selectedBook) {
    return <div>Libro no encontrado</div>;
  }

  const { name, author, image, details, category, price } = selectedBook;

  return (
    <ContainerBook>
      <CustomIndividualBook
        image={image}
        name={name}
        author={author}
        price={price}
        details={details}
        category={category}
      />
      
      <CustomButton buttonText={"Agregar"}></CustomButton>
    </ContainerBook>
  );
}
