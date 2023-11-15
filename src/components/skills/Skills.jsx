import './skills.css'
import Fontend from './Fontend';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../HookCustomize/useOnScreen';


const Skills = props => {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (onScreen && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [hasAnimated, onScreen]);
    return (
        <section className="skills section" id="skills">
            <motion.div
                ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: hasAnimated ? 0 : 100, opacity: hasAnimated ? 1 : 0 }}
                transition={{ duration: 1.5 }}
            >
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>
            </motion.div>



            <div className="skills__container container grid">
                <Fontend />
            </div>

        </section>
    );
};



export default Skills;