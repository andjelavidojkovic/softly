import React from "react";
import './button.css'

const Button = ({ name, styleForButton }) => {
    return (
        <div>
            <button className={styleForButton}>
                {name}
            </button>
        </div>
    )
}

export default Button;