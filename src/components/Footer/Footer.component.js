import React from "react";
import "./Footer.style.css";

const Footer = () => {
  const socialMedias = [
    "Facebook",
    "LinkedIn",
    "Twitter",
    "Instagram",
    "Youtube",
  ];
  const legalRights = ["Privacy Policy", "Terms of Use", "Cookies"];
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h3> Softly Pty Ltd.</h3>
        <p>ABN: 88 888 888 888</p>

        <h3> Contact Us </h3>
        <ul className="footer__list">
          <li>Mon - Fri 9:00am - 5:00pm</li>
          <li>+88 888 888 888</li>
        </ul>
      </div>

      <div className="footer__follow">
        <h3> Follow Us </h3>
        <ul className="footer__list">
          {socialMedias.map((media) => (
            <li>{media}</li>
          ))}
        </ul>
      </div>

      <div className="footer__legal">
        <h3> Legal </h3>
        <ul className="footer__list">
          {legalRights.map((rights) => (
            <li>{rights}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
