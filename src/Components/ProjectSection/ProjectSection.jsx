import React from 'react'
import './ProjectSection.css'
import project_img1 from '../assets/images/project_img1.webp'
import project_img2 from '../assets/images/project_img2.avif'
import project_img3 from '../assets/images/project_img3.jpg'

function ProjectSection() {
  return (
    <div className='projectSection'>
        <div className="projectSectionHeading">
            <h3>Project</h3>
        </div>

        <div className="projectContainer">
            <div className="myProjectHeading">
                <p>My Projects</p>
            </div>
            <div className="projectContent">
                <div className="projectNavbar">
                    <div className='projectNavItem activeProject'>All</div>
                    <div className='projectNavItem'>Web Development</div>
                    <div className='projectNavItem'>App Development</div>
                    <div className='projectNavItem'>Data Analysis</div>
                </div>

                <div className="projects">
                    <div className="project_card">
                        <div className="project_img">
                            <img src={project_img1} alt="" />
                        </div>
                        <div className="projectTitle">
                            <h3>Ecommerce Website</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam enim minus </p>
                        </div>
                    </div>

                    <div className="project_card">
                        <div className="project_img">
                            <img src={project_img2} alt="" />
                        </div>
                        <div className="projectTitle">
                            <h3>Rajshahi District Portal App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam enim minus </p>
                        </div>
                    </div>

                    <div className="project_card">
                        <div className="project_img">
                            <img src={project_img3} alt="" />
                        </div>
                        <div className="projectTitle">
                            <h3>Netflix Data Analysis</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam enim minus </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectSection