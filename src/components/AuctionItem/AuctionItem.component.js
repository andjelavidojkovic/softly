import React from "react";
import Button from "../Button";
import "./AuctionItem.style.css";
import Img from "../Img";

const AuctionItem = ({ children, url }) => {
  return (
    <div className="div-auction-item">
      <Img url={url}></Img>
      <p> Lorem Ipsum Dolor </p>
      <div className="div-company-time-button">
        <p className="paragraph-company-time">
          Company <br />
          Time
        </p>
        <Button>{children}</Button>
      </div>
    </div>
  );
};

export default AuctionItem;
