import React from "react";
import "./FatArrow.style.css";

const FatArrow = ({ orientation, url }) => {
  return <img src={url} alt="img" className={`icon icon--${orientation}`} />;
};

export default FatArrow;
