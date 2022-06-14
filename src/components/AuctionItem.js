import React from "react";
import './auction-item.css'
import Button from './Button/Button.js'

const AuctionItem = () => {
    return (
        <div className="div-auction-item">
            <img src="./images/Rectangle 6.jpg" alt="Rectangle 6" className="img-rectangle6" />
            <p> Lorem Ipsum Dolor </p>
            <div className="div-company-time-button">
                <p className="paragraph-company-time">
                    Company <br />
                    Time
                </p>
                <Button styleForButton="button--color-regular">
                    BID
                </Button>
            </div>
        </div>
    )

};

export default AuctionItem;