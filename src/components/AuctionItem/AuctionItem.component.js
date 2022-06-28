import React from "react";
import Button from "../Button";
import "./AuctionItem.style.css";
import Img from "../Img";

const AuctionItem = ({ children, url }) => {
  return (
    <div className="auction-item">
      <Img url={url} alt="Auction Item"></Img>
      <p> Lorem Ipsum Dolor </p>
      <div>
        <p className="auction-item__text">
          Company <br />
          Time
        </p>
        <Button>{children}</Button>
      </div>
    </div>
  );
};

export default AuctionItem;
