import "./skills.css";
import { Fade } from "react-awesome-reveal";
// import Frontend from './Frontend'
import bannon from "../../assets/img/Web capture_29-11-2023_145717_bannon-vduyit.vercel.app.jpeg";
import guppyhocmon from "../../assets/img/guppyhocmon.png";
import htmlcss from "../../assets/img/Web capture_29-11-2023_225840_.jpeg";
import nonthao from "../../assets/img/nonthao.png";

const Skills = () => {
  const handleLiveDemo = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="projects section " id="projects">
      <div className="projects__container container">
        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">My technical level</span>
        </Fade>

        <div className="projects-grid">
          <div className="pro ">
            <div className="pro__img">
              <a
                href="https://non-thao-fe.vercel.app/"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <img src={nonthao} alt="" />
              </a>
            </div>

            <div className="pro__info">
              <h2>Ecommerce Website</h2>
              <div className="pro__group-btn">
                <button className="pro__btn">Github</button>
                <button
                  className="pro__btn"
                  onClick={() =>
                    handleLiveDemo("https://non-thao-fe.vercel.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div className="pro ">
            <div className="pro__img">
              <a
                href="https://bannon-vduyit.vercel.app/"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <img src={bannon} alt="" />
              </a>
            </div>

            <div className="pro__info">
              <h2>Ecommerce Website</h2>
              <div className="pro__group-btn">
                <button className="pro__btn">Github</button>
                <button
                  className="pro__btn"
                  onClick={() =>
                    handleLiveDemo("https://bannon-vduyit.vercel.app")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div className="pro ">
            <div className="pro__img">
              <a
                href="https://guppyhocmon.vn"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <img src={guppyhocmon} alt="" />
              </a>
            </div>

            <div className="pro__info">
              <h2>Ecommerce Website</h2>
              <div className="pro__group-btn">
                <button className="pro__btn">Github</button>
                <button
                  className="pro__btn"
                  onClick={() => handleLiveDemo("https://guppyhocmon.vn")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div className="pro ">
            <div className="pro__img">
              <a
                href="https://nvdenis.github.io/DTDEV_figma_html-css/"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <img src={htmlcss} alt="" />
              </a>
            </div>

            <div className="pro__info">
              <h2>Ecommerce Website</h2>
              <div className="pro__group-btn">
                <button className="pro__btn">Github</button>
                <button
                  className="pro__btn"
                  onClick={() =>
                    handleLiveDemo(
                      "https://nvdenis.github.io/DTDEV_figma_html-css/s"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
