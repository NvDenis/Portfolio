import React from 'react';
import './skills.css'
import Fontend from './Fontend';

const Skills = props => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Fontend />
            </div>

        </section>
    );
};



export default Skills;