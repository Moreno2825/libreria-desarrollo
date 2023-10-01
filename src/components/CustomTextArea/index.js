import React from "react";
import { useController } from "react-hook-form";
import { LabelStyled, TextAreaStyled, TextAreatWrapper } from "./index.style";

const CustomTextArea = ({ label, name, control, defaultValue }) => {
  const {
    field,  
    fieldState: { error }, 
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <TextAreatWrapper>
        <TextAreaStyled {...field}  defaultValue={defaultValue}/>
      </TextAreatWrapper>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default CustomTextArea;
