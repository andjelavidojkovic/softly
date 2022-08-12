import React from 'react';
import Dropzone from '../Dropzone/Dropzone.component';
import './ImageUpload.style.scss';

const ImageUpload = () => {
  return (
    <div className="image-upload">
      <p>profile photo</p>
      <Dropzone />
    </div>
  );
};

export default ImageUpload;
