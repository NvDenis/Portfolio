import { Fade } from "react-awesome-reveal";
import "./Experience.css";
import checkmark from "../../assets/img/checkmark.png";

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <Fade duration={2000} fraction={0} triggerOnce direction="up">
          <h2 className="section__title">Experience</h2>
          <span className="section__subtitle">Explore My</span>
        </Fade>

        <div className="experience__container">
          <div className="experience__frontend">
            <h2>Frontend</h2>
            <ul className="tech-list">
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>HTML</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>CSS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>JAVASCRIPT</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>TYPESCRIPT</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>REACTJS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>ANGULAR</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="experience__frontend">
            <h2>Backend</h2>
            <ul className="tech-list">
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>NODEJS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>EXPRESS</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>MONGODB</span>
                </div>
              </li>
              <li className="tech-list__item">
                <div>
                  <img src={checkmark} alt="" />

                  <span>GIT</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
