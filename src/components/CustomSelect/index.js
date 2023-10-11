import React, { useEffect, useState } from "react";
import {
  LabelStyled,
  OptionStyled,
  SelectStyled,
  SelectWrapper,
} from "./index.style";
import CategoryRepo from "@/infraestructure/implementation/httpRequest/axios/CategoryRepo";
import GetAllCategoryUseCase from "@/application/usecases/categoryUseCase/GetAllCategoryUseCase";
import { Controller } from "react-hook-form";

const CustomSelect = ({ label, style, name, control, defaultValue }) => {
  const [categories, setCategories] = useState([]);
  const categoryRepo = new CategoryRepo();
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

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
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  return (
    <div style={{ width: "57%" }}>
      <LabelStyled>{label}</LabelStyled>
      <SelectWrapper>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || ""}
          render={({ field }) => (
            <SelectStyled
              {...field}
              value={selectedValue}
              onChange={(e) => {
                field.onChange(e);
                setSelectedValue(e.target.value);
              }}
            >
              <OptionStyled value="" disabled hidden>
                Selecciona una categoria
              </OptionStyled>
              {categories.map((category) => (
                <OptionStyled key={category._id} value={category._id}>
                  {category.name}
                </OptionStyled>
              ))}
            </SelectStyled>
          )}
        />
      </SelectWrapper>
    </div>
  );
};

export default CustomSelect;
