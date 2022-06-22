import React from "react";
import './intro.css'
import Button from '../Button/Button.js'

const Intro = ({ children, title, buttonName, text }) => {
    const classColor = children ? 'pink' : 'green';

    return (
        <div className={`background background-${classColor}`}>
            <div className={`img-${classColor}`}>
                {children}
            </div>
            <div>
                <h3 className={`heading heading-title-${classColor}`}>
                    {title}
                </h3>
                <p className='paragraph-introductions'>
                    {text}
                    <div className={`div-button button-${classColor}`}>
                        <Button styleForButton='primary'>
                            {buttonName}
                        </Button>
                    </div>
                </p>
            </div>
        </div>
    )

};

export default Intro;