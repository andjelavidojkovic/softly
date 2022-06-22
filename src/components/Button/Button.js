import React from "react";
import './button.css'

const Button = ({ children, styleForButton }) => {
    const getStyledButton = () => {
        let buttonStyle = ''


        switch (styleForButton) {
            case 'primary':
                buttonStyle = 'white'
                break;

            case 'secondary':
                buttonStyle = 'red'

                break;
            default:
                buttonStyle = 'regular';
                break;
        }

        return `button--${buttonStyle}`
    }


    const classes = 'button ' + getStyledButton();



    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default Button;