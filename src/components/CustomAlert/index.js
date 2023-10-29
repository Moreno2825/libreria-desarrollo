import React from "react";
import { Modal } from "@mui/material";
import {
  ModalContent, ModalImg, Text,
} from "./index.style";

const CustomAlert = ({ open, onClose, title, text, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <ModalImg>
      {children}
      </ModalImg>
      <h1>{title}</h1>
      <Text>{text}</Text>
      </ModalContent>
    </Modal>
  );
};

export default CustomAlert;
