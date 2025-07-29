import React from 'react'
import './AboutSection.css'

function AboutSection() {
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
                                        <div className="html_bar">87%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">CSS</div>
                                    <div className="skill_bars">
                                        <div className="css_bar">87%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">JS</div>
                                    <div className="skill_bars">
                                        <div className="js_bar">63%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">React</div>
                                    <div className="skill_bars">
                                        <div className="react_bar">70%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="backend_skills">
                                <div className="frontend_skill_heading"><p>Backend</p></div>
                                <div className="skill_title_progress">
                                    <div className="title">Python</div>
                                    <div className="skill_bars">
                                        <div className="python_bar">60%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">Node.js</div>
                                    <div className="skill_bars">
                                        <div className="nodejs_bar">25%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">PHP</div>
                                    <div className="skill_bars">
                                        <div className="php_bar">50%</div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="skill_cards">
                            <div className="frontend_skills">
                                <div className="frontend_skill_heading"><p>Framework & Database</p></div>
                                <div className="skill_title_progress">
                                    <div className="title">HTML</div>
                                    <div className="skill_bars">
                                        <div className="html_bar">87%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">CSS</div>
                                    <div className="skill_bars">
                                        <div className="css_bar">87%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">JS</div>
                                    <div className="skill_bars">
                                        <div className="js_bar">63%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">React</div>
                                    <div className="skill_bars">
                                        <div className="react_bar">70%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="backend_skills">
                                <div className="frontend_skill_heading"><p>Backend</p></div>
                                <div className="skill_title_progress">
                                    <div className="title">Python</div>
                                    <div className="skill_bars">
                                        <div className="python_bar">60%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">Node.js</div>
                                    <div className="skill_bars">
                                        <div className="nodejs_bar">25%</div>
                                    </div>
                                </div>

                                <div className="skill_title_progress">
                                    <div className="title">PHP</div>
                                    <div className="skill_bars">
                                        <div className="php_bar">50%</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* 


                        <div className="skill_bar_container">
                            <div className="skills">
                                <div className='skill_title'>React</div>
                                <div className="skill_bars">
                                    <div className="react_bar">70%</div>
                                </div>
                            </div>

                        </div>

                       
                        <div className="skill_bar_container">
                            <div className="skills">
                                <div className='skill_title'>React Native</div>
                                <div className="skill_bars">
                                    <div className="react_native_bar">70%</div>
                                </div>
                            </div>

                        </div>
                        <div className="skill_bar_container">
                            <div className="skills">
                                <div className='skill_title'>RDBMS</div>
                                <div className="skill_bars">
                                    <div className="rdbms_bar">57%</div>
                                </div>
                            </div>

                        </div>
                        <div className="skill_bar_container">
                            <div className="skills">
                                <div className='skill_title'>Mongo DB</div>
                                <div className="skill_bars">
                                    <div className="mongodb_bar">63%</div>
                                </div>
                            </div>

                        </div> */}


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