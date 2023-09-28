import React from "react";
import { LabelStyled, TextAreaStyled, TextAreatWrapper } from "./index.style";

const CustomTextArea = ({label, sipnosis}) => {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <TextAreatWrapper>
        <TextAreaStyled>{sipnosis}</TextAreaStyled>
      </TextAreatWrapper>
    </div>
  );
};

export default CustomTextArea;
