import React from 'react';
import Button from '../Button';
import './AuctionItem.style.css';
import Image from '../ImageComponents/Image';

const AuctionItem = ({ children, url }) => {
  return (
    <div className="auction-item">
      <div className="auction-item__img">
        <Image url={url} alt="Auction Item"></Image>
      </div>
      <p> Lorem Ipsum Dolor </p>
      <div>
        <p className="auction-item__text">
          Company <br />
          Time
        </p>
        <Button variant="primary" styleType="outline">
          BID
        </Button>
      </div>
    </div>
  );
};

export default AuctionItem;
