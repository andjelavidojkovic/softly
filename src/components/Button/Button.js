import React from "react";
import "./button.css";
import Polygon from "./Polygon";

const Button = ({ children, styleForButton, icon }) => {
  let buttonStyle = "";
  let orientation = "";

  switch (styleForButton) {
    case "primary":
      buttonStyle = "white";
      break;

    case "secondary":
      buttonStyle = "red";

      break;

    case "seeMore":
      buttonStyle = "seeMore";
      orientation = "right";

      break;

    case "loadMore":
      buttonStyle = "loadMore";
      orientation = "bottom";

      break;

    case "sortBy":
      buttonStyle = "sortBy";
      orientation = "bottom";

      break;

    default:
      buttonStyle = "regular";
      break;
  }

  const classes = `button button--${buttonStyle}`;

  return (
    <button className={classes}>
      {children}
      {icon ? <Polygon orientation={orientation} url={icon} /> : null}
    </button>
  );
};

export default Button;
