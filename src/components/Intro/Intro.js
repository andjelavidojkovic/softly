import React from "react";
import Button from "../Button";
import "./intro.css";

const Intro = ({ children, title, buttonName, text }) => {
  const classColor = children ? "pink" : "green";

  return (
    <div className="wrap-intro">
      <div className={`background background-${classColor}`}>
        {children ? (
          <div className={`img-${classColor}`}>{children}</div>
        ) : null}
      </div>
      <div className={`background background-${classColor}`}>
        <h3 className={`heading heading-title-${classColor}`}>{title}</h3>
        <p className="paragraph-introductions">
          {text}
          <div className={`div-button button-${classColor}`}>
            <Button styleForButton="primary">{buttonName}</Button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Intro;
