import React from "react";
import './title.css'
import Button from '../Button/Button.js'

const Title = ({ element = '' }) => {
    let title, buttonName, className
    if (element === '') {
        title = 'Sell with Softly'
        buttonName = 'START'
        className = 'pink'
    } else {
        title = 'Title'
        buttonName = 'CTA TEXT'
        className = 'green'
    }

    return (
        <div className={`background--${className}`}>
            <div>
                {className === 'pink' ?
                    <img src="../images/Rectangle 14.jpg" alt="pic" className={`img--${className}`} />
                    : null
                }
            </div>
            <div className={`div--${className}`} >
                <h3 className={`heading-title-${className}`} >
                    {title}
                </h3>
                <p className="paragraph-introductions">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="div-button-CTA-TEXT">
                    <Button styleForButton='primary' >
                        {buttonName}
                    </Button>
                </div>
            </div>
        </div>
    )

};

export default Title;