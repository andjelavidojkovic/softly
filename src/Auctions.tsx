import React from "react";
import AuctionItem from "./components/AuctionItem";

const Auctions = () => {
  return (
    <div>
      <AuctionItem url="./images/Rectangle6.jpg"> BID </AuctionItem>
      <br />
      <AuctionItem url="./images/Rectangle14.jpg"> BOOK </AuctionItem>
    </div>
  );
};

export default Auctions;
