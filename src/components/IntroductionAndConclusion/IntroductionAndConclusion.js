import React from "react";
import './IntroductionAndConclusion.css'
import Button from '../Button/Button.js'

const Title = ({ greenOrPinkElement = '' }) => {
    let title, buttonName, className
    if (greenOrPinkElement === '') {
        title = 'Sell with Softly'
        buttonName = 'START'
        className = 'pink'
    } else {
        title = 'Title'
        buttonName = 'CTA TEXT'
        className = 'green'
    }

    return (
        <div className={`background background-${className}`}>
            <div>
                {className === 'pink' ?
                    <img src="../images/Rectangle 14.jpg" alt="pic" className={`img-${className}`} />
                    : null
                }
            </div>
            <div>
                <h3 className={`heading heading-title-${className}`} >
                    {title}
                </h3>
                <p className='paragraph-introductions'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    <div className={`div-button button-${className}`}>
                        <Button styleForButton='primary'>
                            {buttonName}
                        </Button>
                    </div>
                </p>
            </div>
        </div>
    )

};

export default Title;