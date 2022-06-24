import React from "react";
import "./polygon.css";

const Polygon = ({ orientation, url }) => {
  return (
    <img src={url} alt="img" className={`img-icon rotateimg-${orientation}`} />
  );
};

export default Polygon;
