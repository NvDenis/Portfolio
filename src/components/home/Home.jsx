import "./home.css";
// import Social from "./Social";
import Data from "./Data";
// import ScrollDown from "./ScrollDown";
import { Fade } from "react-awesome-reveal";
import { TechTask } from "../tech/TechTask";

const Home = () => {



  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Data />

            <div className="home__img"></div>
          </div>

          {/* tech task*/}
          <Fade direction="up" duration={2000} triggerOnce>
            <TechTask />
          </Fade>

          {/* <ScrollDown /> */}
        </div>

    </section>
  );
};

export default Home;
