import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { book } from "@/constants";
import CustomBook from "@/components/CustomBook";
import {
  AddContainer,
  BooksContainer,
  RecentBooks,
  RowContainer,
} from "@/styles/Book.style";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import CustomModal from "@/components/CustomModal";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import CustomTextArea from "@/components/CustomTextArea";

export default function ViewBook() {
  const [isAddModal, setAddModal] = useState(false);

  const toggleAddModal = () => setAddModal((isAddModal) => !isAddModal);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <AddContainer>
        <CustomButton
          buttonText="Agrega un nuevo libro"
          onClick={toggleAddModal}
        />
      </AddContainer>
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
      <CustomModal
        open={isAddModal}
        onClose={toggleAddModal}
        title="Agregar"
        message="Añade un nuevo libro ingresando los datos correspondientes."
      >
        <CustomInput label="Título" name="title" control={control} />
        <CustomInput label="Autor" name="autor" control={control} />
        <CustomTextArea label="Sipnosis" />
        <RowContainer>
          <CustomInput
            label="Precio"
            name="price"
            control={control}
          />
          <CustomSelect label="Categorias"/>
        </RowContainer>
        <RowContainer>
          <CustomButton specialStyle buttonText="Cancelar" fullWidth />
          <CustomButton buttonText="Guardar" fullWidth />
        </RowContainer>
      </CustomModal>
    </div>
  );
}
