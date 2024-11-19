import "./about.css";
import Info from "./Info";
import { Fade } from "react-awesome-reveal";
import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about section" id="about">
      <Fade duration={2000} fraction={0} triggerOnce direction="up">
        <h2 className="section__title">{t("kinh_nghiem")}</h2>
        <span className="section__subtitle">
          {t("kham_pha_kinh_nghiem_cua_toi")}
        </span>
      </Fade>

      <Fade duration={2000} fraction={0} triggerOnce direction="up">
        <div className="about__container container">
          <div className="lg:w-[50%]">
            <div className="w-[90%]">
              <Player
                src="https://lottie.host/2890b3a2-1e19-4d60-bf47-9e491d704558/lwooyIjmHw.json"
                loop
                autoplay
              />
            </div>
          </div>
          <div className="about__data lg:w-[50%] w-full">
            <Info />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
