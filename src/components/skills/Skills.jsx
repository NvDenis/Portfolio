import './skills.css'
import Fontend from './Fontend';
import { Fade } from "react-awesome-reveal";


const Skills = () => {

    return (
        <section className="skills section" id="skills">
            <Fade duration={2000} fraction={0} triggerOnce direction="up">

                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>
            </Fade>



            <div className="skills__container container grid">
                <Fontend />
            </div>

        </section>
    );
};



export default Skills;