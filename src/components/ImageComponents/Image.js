import React from "react";
import "./Image.style.css";

const Image = ({ url, alt }) => {
  return <img src={url} alt={alt} className="image" />;
};

export default Image;
