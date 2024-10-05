import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";

import logoFooter from "../images/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="logo">
            <img src={logoFooter} alt="Resort Logo" />
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/lankadvilla" target="_blank">
              <img src={facebook} alt="Facebook Logo" />
            </a>
            <a href="https://www.instagram.com/lankadresort/" target="_blank">
              <img src={instagram} alt="Instagram Logo" />
            </a>
            <a href="https://wa.me/9707803471" target="_blank">
              <img src={whatsapp} alt="Whatsapp Logo" />
            </a>
          </div>
          <div className="contact-info">
            <p>Address: Tokha, Jhor, Kathmandu, Nepal</p>
            <p>Phone: +977-987463773</p>
            <p>Email: info@resort.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
