import React from "react";
import { useController } from "react-hook-form";
import {
  ErrorMessage,
  InputStyled,
  InputWrapper,
  LabelStyled,
} from "./index.style";

const CustomInput = ({ label, icon, error, control, name, type, ...props }) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputWrapper>
        <InputStyled
          {...props}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          inputRef={field.ref}
          type={type}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default CustomInput;
