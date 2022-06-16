import React from "react";
import "./IntroductionAndConclusion.css";
import Button from "../Button";
import Image from "./Image";

const IntroductionAndConclusion = ({ title, buttonName, text, img }) => {
  const classColor = img ? "pink" : "green";

  return (
    <div className={`background background-${classColor}`}>
      {img ? (
        <div className={`img-${classColor}`}>
          <Image url={img} />
        </div>
      ) : null}
      <div>
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

export default IntroductionAndConclusion;
