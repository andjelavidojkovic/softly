import React from "react";
import "./FatArrow.style.css";

// eslint-disable-next-line import/no-anonymous-default-export
const FatArrow = ({ orientation }) => {
  const iconOrientation = `icon icon--${orientation}`;

  return (
    <svg
      className={iconOrientation}
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 10.5L0 20.4593L0 0.540708L12 10.5Z" fill="#C9B1A9" />
    </svg>
  );
};

export default FatArrow;
