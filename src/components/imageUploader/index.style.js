import React, { useState } from 'react';
import styled from "@emotion/styled";

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 10px 20px;
  background-color: #6750A4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const PreviewImage = styled.img`
  display: block;
  margin-top: 10px auto;  // O cualquier otro valor que prefieras
  max-width: 100%;  // Esto asegura que la imagen no exceda el ancho del contenedor
  height: auto;  // Mantener la relación de aspecto
`;

const ImageUploader = ({ onFileChange, name }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      onFileChange(name, file);
    }
  };

  return (
    <div>
      <Label htmlFor={name}>Seleccione Imagen</Label>
      <FileInput
        type="file"
        id={name}
        onChange={handleFileInputChange}
      />
      {previewImage && <PreviewImage src={previewImage} alt="Preview" />}
    </div>
  );
};

export default ImageUploader;
