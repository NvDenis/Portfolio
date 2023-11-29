import './skills.css'
import { Fade } from "react-awesome-reveal";
// import Frontend from './Frontend'
import bannon from '../../assets/img/Web capture_29-11-2023_145717_bannon-vduyit.vercel.app.jpeg'
import bansach from '../../assets/img/Web capture_29-11-2023_225330_frontend.vduyit.click.jpeg'
import htmlcss from '../../assets/img/Web capture_29-11-2023_225840_.jpeg'

const Skills = () => {

    return (
        <section className="projects section container" id="projects">
            <Fade duration={2000} fraction={0} triggerOnce direction="up">

                <h2 className="section__title">Projects</h2>
                <span className="section__subtitle">My technical level</span>
            </Fade>


            <div className="projects-grid">
                <Fade duration={2000} fraction={0} triggerOnce direction="up">
                    <div className="pro pro__1 undefined">
                        <div className="pro__img">
                            <a href="https://bannon-vduyit.vercel.app/" target='_blank' className='' rel="noreferrer">
                                <img src={bannon} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>
                                ECOMMERCE
                            </h3>
                            <p>Our e-commerce site offers a variety of hats. From straw to leather, felt, and wide-brimmed hats, you’ll find the perfect hat to suit your style and needs. Explore our collection today!</p>
                            <div className="stack">
                                <p>React</p>
                                <p>Tailwind</p>
                            </div>
                            <div className="links">
                                <a href="">
                                    <font>Code </font>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                                </a>
                                <a href="https://bannon-vduyit.vercel.app/" target='_blank' className='' rel="noreferrer" >
                                    <font>Live </font>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade duration={2000} fraction={0} triggerOnce direction="up">
                    <div className="pro pro__1 undefined reversed-proj">
                        <div className="pro__img">
                            <a href="https://nvdenis.github.io/DTDEV_figma_html-css/" target='_blank' className='' rel="noreferrer">
                                <img src={htmlcss} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>
                                html css
                            </h3>
                            <p>I learned html css to make websites. I made RecLand, a website for real estate jobs. I worked hard to design and code it.</p>
                            <div className="stack">
                                <p>HTML</p>
                                <p>CSS</p>
                            </div>
                            <div className="links">
                                <a href="">
                                    <font>Code </font>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                                </a>
                                <a href="https://nvdenis.github.io/DTDEV_figma_html-css/" target='_blank' className='' rel="noreferrer" >
                                    <font>Live </font>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>


                <Fade duration={2000} fraction={0} triggerOnce direction="up">
                    <div className="pro pro__1 undefined">
                        <div className="pro__img">
                            <a href="https://frontend.vduyit.click/" target='_blank' className='' rel="noreferrer">
                                <img src={bansach} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>
                                Ecommerce 
                            </h3>
                            <p>Our e-commerce platform offers a wide range of books, including comics, art, and history. It features an admin system for inventory management and user interaction. Dive into our vast collection today!</p>
                            <div className="stack">
                                <p>React</p>
                                <p>Ant Design</p>
                            </div>
                            <div className="links">
                                <a href="">
                                    <font>Code </font>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                                </a>
                                <a href="https://frontend.vduyit.click/" target='_blank' className='' rel="noreferrer" >
                                    <font>Live </font>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>

            </div>
       

        </section>
    );
};



export default Skills;