import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import Social from "./Social";
import { useTranslation } from "react-i18next";
import "./home.css";
import CV from "../../assets/img/Nguyen-Van-Duy-TopCV.vn-130124.230106.pdf";

const Data = () => {
  new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
  });

  const { t } = useTranslation();

  return (
    <>
      <div className="home__data">
        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <h1 className="home__title">
            {t("xin_chao")}!<span className="wave">👋</span>
          </h1>
          <h1 className="home__title">
            {t("toi_la")} <span className="name">Duy Nguyen</span>
          </h1>

          <div className="home__description ">
            <Typewriter
              options={{
                strings: ["Software Developer", "MERN Stack Developer"],
                autoStart: true,
                loop: true,
                skipAddStyles: false,
              }}
            />
          </div>

          <Social />

          <div className="flex items-center gap-4">
            <a href="#contact" className="button button--flex">
              {t("xem_cv")}
              <span className="button__icon">👇</span>
            </a>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Data;
