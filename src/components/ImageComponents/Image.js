import React from "react";
import "./Image.style.css";

const Image = ({ url }) => {
  return <img src={url} alt="img" className="img" />;
};

export default Image;
