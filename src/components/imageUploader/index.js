import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;  // O podrías especificar una altura específica si lo prefieres
`;

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  padding: 10px 20px;
  background-color: #8D8093;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 8px;
  margin-top: 10px;  // Agrega un margen en la parte superior para separarlo de la imagen
`;

const PreviewImage = styled.img`
  display: block;
  margin-top: 10px;  
  max-width: 100%;  
  height: auto;
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
    <Container>
      {previewImage && <PreviewImage src={previewImage} alt="Preview" width={'200px'}/>}
      <Label htmlFor={name}>Seleccione Imagen</Label>
      <FileInput
        type="file"
        id={name}
        onChange={handleFileInputChange}
      />
    </Container>
  );
};

export default ImageUploader;