import React from "react";
import "./IntroductionAndConclusion.style.css";
import Button from "../Button";
import Image from "../ImageComponents/Image";

const IntroductionAndConclusion = ({ title, buttonName, text, img }) => {
  const classColor = img ? "pink" : "green";

  return (
    <div className={`background background-${classColor}`}>
      {img ? (
        <div className={`img-${classColor}`}>
          <Image url={img} />
        </div>
      ) : null}

      <div className={`container-${classColor}`}>
        <h3 className={`heading heading-title-${classColor}`}>{title}</h3>
        <p className="paragraph-introductions">
          {text}
          <div className={`div-button div-button--${classColor}`}>
            <Button styleForButton="primary">{buttonName}</Button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default IntroductionAndConclusion;
