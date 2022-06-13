import React from "react";
import './button.css'

const Button = ({ children, styleForButton }) => {
    return (
        <button className={styleForButton}>
            {children}
        </button>
    )
}

export default Button;