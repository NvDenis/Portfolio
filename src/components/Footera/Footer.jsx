import "./footer.css";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <a href="#home" className="footer__title block">
            DUY
          </a>
        </Fade>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        {/* <div className="footer__social">
          <a
            href="https://www.instagram.com/diinguyenit/"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram-alt"></i>
          </a>
          <a
            href="https://www.facebook.com/master.duy.520"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-facebook"></i>
          </a>
          <a
            href="https://github.com/NvDenis"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>
        </div> */}
        <span className="footer__coppy">
          &#169; VDUYIT. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
