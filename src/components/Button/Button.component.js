import React from "react";
import "./Button.style.css";

const Button = ({ children, styleForButton }) => {
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

    case "login":
      buttonStyle = "login";

      break;

    case "menuBurger":
      buttonStyle = "menu-burger";

      break;

    default:
      buttonStyle = "regular";
      break;
  }

  const classes = `button button--${buttonStyle}`;

  return <button className={classes}>{children}</button>;
};

export default Button;
