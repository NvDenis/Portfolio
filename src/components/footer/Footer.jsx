import React, { useEffect, useRef, useState } from "react";
import "./footer.css";
import useOnScreen from "../../HookCustomize/useOnScreen";
import { motion } from 'framer-motion';


const Footer = (props) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (onScreen && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated, onScreen]);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="footer__title">DUY</h1>
        </motion.div>


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
