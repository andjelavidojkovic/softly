import React from "react";
import './title.css'
import Button from '../Button/Button.js'

const Title = () => {
    return (
        <div className="div-title-item">
            <h3 className="heading-title">
                Title
            </h3>
            <p className="paragraph-introductions">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="div-button-CTA-TEXT">
                <Button styleForButton='button--color-white'>
                    CTA TEXT
                </Button>
            </div>
        </div>
    )
};

export default Title;