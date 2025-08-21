import React, { useState } from 'react'
import './ProjectSection.css'
import project_img1 from '../assets/images/project_img1.webp'
import project_img2 from '../assets/images/project_img2.avif'
import project_img3 from '../assets/images/project_img3.jpg'
import project_img4 from '../assets/images/project_img4.png'
// import { useAnimation } from '../../hooks/useAnimation'

function ProjectSection() {
    // const projectRef = useAnimation('zoom-in')
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");




    const projects = [
        {
            id: 1,
            title: "Asbab Ecommerce Website",
            img: project_img1,
            desc: "Asbab Ecommerce Website is a fully functional online shopping platform designed to provide users with a seamless and intuitive shopping experience. The platform allows customers to browse products by category, search for items, add products to the cart, and complete secure online payments. It includes features like user authentication, order management, and an admin dashboard for managing products, categories, and orders. The website is optimized for performance and responsive across devices, making it easy to shop from desktops, tablets, or mobile devices.",
            github: "https://github.com/Nissan130/Asbab-Ecommerce-Website",
            tools: "HTML, CSS, JS, React, Nodejs, Express.js, MySQL",
            category: "Web Development"

        },
        {
            id: 2,
            title: "Rajshahi District Portal App",
            img: project_img2,
            desc: "Mobile app to explore hospitals, doctors, schools, and transport in Rajshahi.",
            github: "https://github.com/Nissan130/Rajshahi-District-Portal-App",
            tools: "React Native, Nodejs, Express.js, MongoDB, Cloudinary",
            category: "App Development"

        },
        {
            id: 3,
            title: "Portfolio Website",
            img: project_img4,
            desc: "This is a personal portfolio website about me",
            github: "https://github.com/Nissan130/my-personal-portfolio",
            tools: "HTML, CSS, JS, React",
            category: "Web Development"

        }
    ];

    // filter projects
    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);


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
                        {["All", "Web Development", "App Development", "Data Analysis"].map(cat => (
                            <div
                                key={cat}
                                className={`projectNavItem ${activeCategory === cat ? "activeProject" : ""}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </div>
                        ))}

                    </div>

                    <div className="projects">
                        {filteredProjects.map(project => (
                            <div className="project_card" key={project.id}>
                                <div className="project_img">
                                    <img src={project.img} alt={project.title} />
                                    <div className="overlay">
                                        <button onClick={() => setSelectedProject(project)}>Overview</button>
                                        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                                    </div>
                                </div>
                                <div className="projectTitle">
                                    <h3>{project.title}</h3>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
            {/* Modal */}
            {selectedProject && (
                <div className="modal" onClick={() => setSelectedProject(null)}>
                    <div className="modalContent">
                        <span className="closeBtn" onClick={() => setSelectedProject(null)}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <img src={selectedProject.img} alt={selectedProject.title} />
                        <p className='projectDesc'>{selectedProject.desc}</p>
                        <p className='projectTools'><span>Tools Used: </span>{selectedProject.tools}</p>
                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modalGithubBtn">
                            View on GitHub
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectSection