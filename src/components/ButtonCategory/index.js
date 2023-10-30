import React from "react";
import { ButtonStyled, Icon } from "./index.style";
import {
  faHatWizard,
  faLandmark,
  faGhost,
  faHeart,
  faFlask,
  faPuzzlePiece,
  faBars
} from "@fortawesome/free-solid-svg-icons";

export default function ButtonCategoy({ category, onSelect, icon }) {
  const CategoryIcons = {
    Fantasía: faHatWizard,
    Clásicos: faLandmark,
    Thriller: faGhost,
    Romance: faHeart,
    Ciencia: faFlask,
    Infantil: faPuzzlePiece,
  };

  return (
    <div>
      <ButtonStyled onClick={() => onSelect(category === "Todos" ? null : category)}>
        <Icon icon={category === "Todos" ? faBars : CategoryIcons[category]} />
        {category}
      </ButtonStyled>
    </div>
  );
}
