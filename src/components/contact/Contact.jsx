import { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import email from "../../assets/img/email.png";
import linkedin from "../../assets/img/linkedin.png";
import { Player } from "@lottiefiles/react-lottie-player";
import Social from "../home/Social";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const handleSendEmail = () => {
    window.location.href = "mailto:vduyit@gmail.com";
  };

  return (
    <section className="contact section" id="contact">
      <Fade duration={2000} fraction={0} triggerOnce direction="up">
        <h2 className="section__title">{t("lien_he")}</h2>
        <span className="section__subtitle">{t("lien_lac")}</span>
      </Fade>
      <div className="container flex justify-between lg:flex-row flex-col">
        <div className="flex flex-col mt-14 ">
          <h1 className="text-xl font-extrabold uppercase mb-2 text-center lg:text-left">
            {t("lien_he_voi_toi_qua")}
          </h1>
          <Social />
        </div>

        <div
          className="lg:w-[300px] flex items-center justify-center"
          onClick={handleSendEmail}
        >
          <Player
            src="https://lottie.host/06834b22-f3f0-4412-9c1e-0c0fa66c1e87/6ETxmx0EuP.json"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
