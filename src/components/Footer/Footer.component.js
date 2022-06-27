import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer>
      <div className="div-blocks">
        <p className="footer--headnig"> Softly Pty Ltd.</p>
        <p className="footer--paragraph">ABN: 88 888 888 888</p>

        <p className="footer--headnig"> Contact Us </p>
        <ul>
          <li>Mon - Fri 9:00am - 5:00pm</li>
          <li>+88 888 888 888</li>
        </ul>
      </div>

      <div className="div-blocks">
        <p className="footer--headnig"> Follow Us </p>
        <ul>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>

      <div className="div-blocks">
        <p className="footer--headnig"> Legal </p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
