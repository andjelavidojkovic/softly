import React, { useState } from 'react';
import api from '../../api';
import Button from '../Button';
import Input from '../Input';
import './ImageUpload.style.scss';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState<string>(null);

  const fileSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0].name);
  };

  const fileUploadHandler = async () => {
    try {
      const response = await api.auth.imageUpload(selectedFile);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="image-upload">
      <p>profile photo</p>
      <Input type="file" onChange={fileSelectHandler} />
      <Button variant="primary" styleType="outline" onClick={fileUploadHandler}>
        CONFIRM
      </Button>
    </div>
  );
};

export default ImageUpload;
