import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { Fade } from "react-awesome-reveal";

const Home = () => {



  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <Fade   duration={2000} fraction={0} triggerOnce direction="right">
            <div className="home__img"></div>
          </Fade>


          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
