import React from "react";
import {
  LabelStyled,
  OptionStyled,
  SelectStyled,
  SelectWrapper,
} from "./index.style";
import { categories } from "@/constants";

const CustomSelect = ({ label }) => {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <SelectWrapper>
        <SelectStyled>
          {categories.map((option) => (
            <OptionStyled key={option.value} value={option.category}>
              {option.category}
            </OptionStyled>
          ))}
        </SelectStyled>
      </SelectWrapper>
    </div>
  );
};

export default CustomSelect;
