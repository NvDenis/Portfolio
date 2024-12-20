import "./project.css";
import { Fade } from "react-awesome-reveal";
// import Frontend from './Frontend'
import bannon from "../../assets/img/Web capture_29-11-2023_145717_bannon-vduyit.vercel.app.jpeg";
import guppyhocmon from "../../assets/img/guppyhocmon.png";
import htmlcss from "../../assets/img/Web capture_29-11-2023_225840_.jpeg";
import nonthao from "../../assets/img/nonthao.png";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    img: nonthao,
    link: "https://non-web.onrender.com",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    img: guppyhocmon,
    link: "https://guppyhocmon.vn",
  },
  {
    id: 3,
    title: "Ecommerce Website",
    img: bannon,
    link: "https://bannon-vduyit.vercel.app",
  },
  {
    id: 4,
    title: "Landing Page",
    img: htmlcss,
    link: "https://bannon-vduyit.vercel.app",
  },
];

const Project = () => {
  const { t } = useTranslation();
  const handleLiveDemo = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="projects section " id="projects">
      <div className="projects__container container">
        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <h2 className="section__title">{t("du_an")}</h2>
          <span className="section__subtitle">
            {t("nhung_du_an_toi_da_lam")}
          </span>
        </Fade>

        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <div className="projects-grid">
            {projects.map((item, index) => {
              return (
                <div className="pro" key={index}>
                  <div className="flex items-center justify-center">
                    <div className="pro__img">
                      <a
                        href="https://non-thao-fe.vercel.app/"
                        target="_blank"
                        className=""
                        rel="noreferrer"
                      >
                        <img src={item.img} alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="pro__info relative z-10">
                    <h2 className="text-center">{item.title}</h2>
                    <div className="pro__group-btn  py-4">
                      <button className="pro__btn button">Github</button>
                      <button
                        className="pro__btn button primary"
                        onClick={() => handleLiveDemo(item.link)}
                      >
                        {t("xem_demo")}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Project;
