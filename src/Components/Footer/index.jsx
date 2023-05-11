/** @format */

//import React from "react";
import { Link } from "react-router-dom";
import MobileLogo from "../../style/assets/img/logo/mobile/Logo-Alter-Ego-316x316px-White.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__logo">
          <Link to="/" className="footer__logo__link">
            <img src={MobileLogo} alt="logo du site" />
          </Link>
          <p>&copy; 2023</p>
        </div>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/AlterEgoPartners"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f social-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/alter-ego-partners/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin social-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
