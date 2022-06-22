import React from "react";
import './header.css'

const Header = () => {
    return (
        <div className="ui secondary pointing menu header">
            <img src="images/new logo 1.svg" alt="logo" id='logo' />
            <a href="/about" className="item">
                ABOUT
            </a>
            <a href="/auctions" className="item">
                AUCTIONS
            </a>
            <a href="/experiences" className="item">
                EXPERIENCES
            </a>
        </div>
    );
};

export default Header;