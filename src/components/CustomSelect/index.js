    import React from "react";
    import {
      LabelStyled,
      OptionStyled,
      SelectStyled,
      SelectWrapper,
    } from "./index.style";
    import { categories } from "@/constants";

    const CustomSelect = ({ label, style }) => {
      return (
        <div style={{width: "57%"}}>
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
