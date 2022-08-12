import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import api from '../../api';
import Button from '../Button';
import './Dropzone.style.scss';

type DropzoneProps = {};

const Dropzone: React.FC<DropzoneProps> = (props) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(
      acceptedFiles.map((file: Blob | MediaSource) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );

    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
  });
  // eslint-disable-next-line array-callback-return
  const images = files.map((file) => {
    return (
      <div className="dropzone__field__dashed-box" key={file.name}>
        <img
          src={file.preview}
          alt="uploaded pic"
          key={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          className="dropzone__field__dashed-box__upload-image"
        />
      </div>
    );
  });
  const fileUploadHandler = async () => {
    const formData = new FormData();
    formData.append('file', files[0]);
    try {
      const response = await api.auth.imageUpload(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="dropzone">
      <div {...getRootProps()} className="dropzone__field">
        <input {...getInputProps()} />
        <div
          className={
            isDragAccept
              ? 'dropzone__field__simbol-add-none'
              : 'dropzone__field__simbol-add'
          }
        >
          +
        </div>
        {images}
      </div>
      <Button variant="primary" styleType="outline" onClick={fileUploadHandler}>
        CONFIRM
      </Button>
    </div>
  );
};

export default Dropzone;
