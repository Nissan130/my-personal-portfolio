import React from 'react'
import './AboutSection.css'
// import { useAnimation } from '../../hooks/useAnimation'

function AboutSection() {
    // const aboutRef = useAnimation('fade-in-up')
    return (
        <div className='aboutSection'>
            <div className='aboutHeading'>
                <h2>About Me</h2>
            </div>
            <div className="aboutContent">
                <div className="bioContainer">
                    <h3 className='bioTitle'>Bio</h3>
                    <p>I'm a passionate developer with experience in web development and mobile app development. I enjoy building functional, user-friendly applications. Currently, I'm expanding my skills toward data analysis and machine learning, with a strong interest in solving real-world problems through technology. Along the way, I've gained experience in various tech tools, collaborative projects, and teaching others what I learn.
                    </p>
                </div>
                <div className="skill_education_container">
                    <div className="skills_container">
                        <div className="mySkill_heading">
                            <p>My Skills</p>
                        </div>

                        <div className="skill_cards">
                            <div className="frontend_skills">
                                <div className="frontend_skill_heading"><p>Frontend</p></div>
                                <div className="skill_title_progress">
                                    <div className="title">HTML</div>
                                    <div className="skill_bars">
                                        <div className="html_bar progressBar">87%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">CSS</div>
                                    <div className="skill_bars">
                                        <div className="css_bar progressBar">73%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">JS</div>
                                    <div className="skill_bars">
                                        <div className="js_bar progressBar">63%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">React</div>
                                    <div className="skill_bars">
                                        <div className="react_bar progressBar">70%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="backend_skills">
                                <div className="frontend_skill_heading"><p>Backend</p></div>
                                <div className="skill_title_progress">
                                    <div className="title">Python</div>
                                    <div className="skill_bars">
                                        <div className="python_bar progressBar">60%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">Node.js</div>
                                    <div className="skill_bars">
                                        <div className="nodejs_bar progressBar">25%</div>
                                    </div>
                                </div>

                                {/* <div className="skill_title_progress">
                                    <div className="title">Express.js</div>
                                    <div className="skill_bars">
                                        <div className="express_bar progressBar">50%</div>
                                    </div>
                                </div> */}

                                <div className="skill_title_progress">
                                    <div className="title">Flask</div>
                                    <div className="skill_bars">
                                        <div className="flask_bar progressBar">20%</div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="skill_cards">
                            <div className="frontend_skills">
                                <div className="frontend_skill_heading"><p>ML Tools</p></div>
                                <div className="skill_title_progress">
                                    <div className="title">Scikit-learn</div>
                                    <div className="skill_bars">
                                        <div className="sklearn_bar progressBar">17%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">Tensor Flow</div>
                                    <div className="skill_bars">
                                        <div className="tensorflow_bar progressBar">17%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">Pandas</div>
                                    <div className="skill_bars">
                                        <div className="pandas_bar progressBar">60%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">NumPy</div>
                                    <div className="skill_bars">
                                        <div className="numpy_bar progressBar">50%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="backend_skills">
                                <div className="frontend_skill_heading"><p>Other Tools</p></div>
                                <div className="skill_title_progress">
                                    <div className="title">Git & GitHub</div>
                                    <div className="skill_bars">
                                        <div className="github_bar progressBar">60%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">Postgre SQL</div>
                                    <div className="skill_bars">
                                        <div className="sql_bar progressBar">80%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">Mongo DB</div>
                                    <div className="skill_bars">
                                        <div className="mongodb_bar progressBar">40%</div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="education_container">
                        <div className="education_heading">
                            <p>Educational Qualifications</p>
                        </div>

                        <div className="educations_content">
                            <div className="timeline">
                                <div className="timeline_item">
                                    <div className="circle"></div>
                                    <div className="timeline_content">
                                        <h3>2022 - 2026</h3>
                                        <p>BSc in CSE</p>
                                        <p>Department of CSE</p>
                                        <p>Rajshahi University of Engineering & Technology, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="educations_content">
                            <div className="timeline">
                                <div className="timeline_item">
                                    <div className="circle"></div>
                                    <div className="timeline_content">
                                        <h3>2020</h3>
                                        <p>Higher Secondary Certificate (HSC)</p>
                                        <p>Science Group </p>
                                        <p>Fazar Ali Molla Degree College, Rajshahi</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="educations_content">
                            <div className="timeline">
                                <div className="timeline_item">
                                    <div className="circle"></div>
                                    <div className="timeline_content">
                                        <h3>2018</h3>
                                        <p>Secondary School Certificate (SSC)</p>
                                        <p>Science Group </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection