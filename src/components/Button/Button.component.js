import React from "react";
import "./Button.style.css";
// import FatArrow from "../ImageComponents/FatArrow.icon";

const Button = ({ children, styleForButton, buttonName }) => {
  let buttonStyle = "";

  switch (styleForButton) {
    case "primary":
      buttonStyle = "white";
      break;

    case "secondary":
      buttonStyle = "red";

      break;

    case "seeMore":
      buttonStyle = "see-more";

      break;

    case "loadMore":
      buttonStyle = "load-more";

      break;

    case "sortBy":
      buttonStyle = "sort-by";

      break;

    default:
      buttonStyle = "regular";
      break;
  }

  const classes = `button button__${buttonStyle}`;

  return (
    <button className={classes}>
      {buttonName}
      {children}
    </button>
  );
};

export default Button;

// {icon ? <FatArrow orientation={orientation} url={icon} /> : null}
