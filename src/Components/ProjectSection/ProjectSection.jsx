import React, { useState } from 'react'
import './ProjectSection.css'
import project_img1 from '../assets/images/project_img1.webp'
import project_img2 from '../assets/images/project_img2.avif'
import project_img3 from '../assets/images/project_img3.jpg'
import project_img4 from '../assets/images/project_img4.png'
import ecommerce_sales_img1 from '../assets/images/customer_freq.png'
import ecommerce_sales_img2 from '../assets/images/customer_segments.png'
import ecommerce_sales_img3 from '../assets/images/daily_sales.png'
import ecommerce_sales_img4 from '../assets/images/top_products.png'
import covid19_img1 from '../assets/images/covid19_img1.png'
import ProjectImageSlider from '../../hooks/ProjectImageSlider'
// import { useAnimation } from '../../hooks/useAnimation'

function ProjectSection() {
    // const projectRef = useAnimation('zoom-in')
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");




    const projects = [
        {
            id: 1,
            title: "Asbab Ecommerce Website",
            main_img: project_img1,
            other_images: [project_img1],
            desc: "Asbab Ecommerce Website is a fully functional online shopping platform designed to provide users with a seamless and intuitive shopping experience. The platform allows customers to browse products by category, search for items, add products to the cart, and complete secure online payments. It includes features like user authentication, order management, and an admin dashboard for managing products, categories, and orders. The website is optimized for performance and responsive across devices, making it easy to shop from desktops, tablets, or mobile devices.",
            github: "https://github.com/Nissan130/Asbab-Ecommerce-Website",
            tools: "HTML, CSS, JS, React, Nodejs, Express.js, MySQL",
            category: "Web Development"

        },
        {
            id: 2,
            title: "Rajshahi District Portal App",
            main_img: project_img2,
            other_images: [project_img2],
            desc: "Mobile app to explore hospitals, doctors, schools, and transport in Rajshahi.",
            github: "https://github.com/Nissan130/Rajshahi-District-Portal-App",
            tools: "React Native, Nodejs, Express.js, MongoDB, Cloudinary",
            category: "App Development"

        },
        {
            id: 3,
            title: "Portfolio Website",
            main_img: project_img4,
            other_images: [project_img4],
            desc: "This is a personal portfolio website about me",
            github: "https://github.com/Nissan130/my-personal-portfolio",
            tools: "HTML, CSS, JS, React",
            category: "Web Development"

        },
        {
            id: 4,
            title: "E-commerce Sales Analysis",
            main_img: ecommerce_sales_img4,
            other_images: [ecommerce_sales_img4, ecommerce_sales_img2, ecommerce_sales_img3, ecommerce_sales_img1],
            desc: "Conducted an end-to-end data analysis project on real-world online retail transactions. The project involved data cleaning, exploratory data analysis (EDA), customer segmentation using clustering, and identifying sales patterns and seasonal trends. Key insights include top-selling products, high-value customers, and actionable strategies for marketing and inventory planning.",
            github: "https://github.com/Nissan130/Machine-Learning-Projects/tree/main/e-commerce-sales-analysis",
            tools: "Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn",
            category: "Data Analysis"

        },
        {
            id: 5,
            title: "Global-COVID-19-Data-Visualization",
            main_img: covid19_img1,
            other_images: [covid19_img1],
            desc: "This project is a fully interactive COVID-19 dashboard built using Python, Plotly, Seaborn, and Dash.",
            github: "https://github.com/Nissan130/Machine-Learning-Projects/tree/main/e-commerce-sales-analysis",
            tools: "Python, Pandas, Matplotlib, Seaborn, Plotly, Dash",
            category: "Data Analysis"

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
                                    <img src={project.main_img} alt={project.title} />
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
                <div className="modal" >
                    <div className="modalContent">
                        <span className="closeBtn" onClick={() => setSelectedProject(null)}>&times;</span>
                        <h2>{selectedProject.title}</h2>

                        {/* Slider with project images */}
                        <ProjectImageSlider images={selectedProject.other_images} />

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