import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">DUY</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/diinguyenit/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram-alt"></i>
          </a>
          <a
            href="https://www.facebook.com/master.duy.520"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-facebook"></i>
          </a>
          <a
            href="https://github.com/NvDenis"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>
        <span className="footer__coppy">
          &#169; VDUYIT. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
