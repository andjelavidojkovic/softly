import React from "react";
import "./button.css";
import Polygon from "./Polygon";

const Button = ({ children, styleForButton }) => {
  let buttonStyle = "";
  let orientation = "";

  switch (styleForButton) {
    case "primary":
      buttonStyle = "white";
      break;

    case "secondary":
      buttonStyle = "red";

      break;

    case "See More":
      buttonStyle = "seeMore";
      orientation = "right";

      break;

    default:
      buttonStyle = "regular";
      break;
  }

  const classes = `button button--${buttonStyle}`;

  return (
    <button className={classes}>
      {children}
      {buttonStyle === "red" || "regular" || "white" ? null : (
        <Polygon orientation={orientation} />
      )}
    </button>
  );
};

export default Button;
