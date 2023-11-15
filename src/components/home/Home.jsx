import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import useOnScreen from "../../HookCustomize/useOnScreen";
import { motion } from 'framer-motion';

const Home = (props) => {

  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (onScreen && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated, onScreen]);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <motion.div
            ref={ref}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
            transition={{ duration: 2.5 }}
          >
            <div className="home__img"></div>
          </motion.div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
