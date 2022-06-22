import React from "react";
import './polygon.css'

const Polygon = ({ orientation }) => {
    return (
        <img src="../images/Polygon 1.jpg" alt="img" className={`img-icon rotateimg-${orientation}`} />
    );
};

export default Polygon;