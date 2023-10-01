import React, { useEffect, useState } from "react";
import {
  LabelStyled,
  OptionStyled,
  SelectStyled,
  SelectWrapper,
} from "./index.style";
import CategoryRepo from "@/infraestructure/implementation/httpRequest/axios/CategoryRepo";
import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import { useController } from "react-hook-form";

const CustomSelect = ({ label, style, name, control, defaultValue }) => {
  const [categories, setCategories] = useState([]);
  const categoryRepo = new CategoryRepo();

  const fetchCategories = async () => {
    try {
      const getAllCategoryUseCase = new GetAllCategoryUseCase(categoryRepo);
      const response = await getAllCategoryUseCase.run();
      const fetchedCategories = response.data;
      setCategories(fetchedCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <div style={{ width: "57%" }}>
      <LabelStyled>{label}</LabelStyled>
      <SelectWrapper>
        <SelectStyled {...inputProps} >
          {categories.map((category) => (
            <OptionStyled key={category._id} value={category._id}>
              {category.name}
            </OptionStyled>
          ))}
        </SelectStyled>
      </SelectWrapper>
    </div>
  );
};

export default CustomSelect;
