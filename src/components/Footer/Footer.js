import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="div-blocks">
                <p>Softly Pty Ltd.
                    <ul>
                        <li>ABN: 88 888 888 888</li>
                    </ul>
                </p>
                <p>Contact Us
                    <ul>
                        <li>Mon - Fri   9:00am - 5:00pm</li>
                        <li>+88 888 888 888</li>
                    </ul>
                </p>
            </div>
            <div className="div-blocks">
                <p>Follow Us
                    <ul>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </p>
            </div>
            <div className="div-blocks">
                <p>Legal
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Cookies</li>
                    </ul>
                </p>
            </div>
        </footer>
    );
};

export default Footer;