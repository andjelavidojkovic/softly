import React from "react";
import "./Img.css";

const Img = ({ url, alt }) => {
  return <img src={url} alt={alt} className="img-auctions-item" />;
};

export default Img;
