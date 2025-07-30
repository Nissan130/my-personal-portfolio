import React, { useEffect, useRef } from 'react'
import './HomeSection.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import myPhoto from '../assets/images/my_photo_without_bg.png'

function HomeSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('fade-in');
        } else {
          sectionRef.current.classList.remove('fade-in');
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='homeSection' ref={sectionRef}>
      <div className='homeLeft'>
        <div className='introInfo'>
          <h3 className='greetingTitle'>Hi, <span style={{color: 'orange'}}>Me</span></h3>
          <h2 className='nameTitle'>Md. Nissan Ali</h2>
          <h3 className='designationTitle'>A software developer, Data Analyst</h3>
        </div>
        <div className="contactIcons">
          <a href="https://www.linkedin.com/in/md-nissan-ali130/" target='_blank' rel="noopener noreferrer" className='icons'><BsLinkedin /></a>
          <a href="https://github.com/Nissan130" target='_blank' rel="noopener noreferrer" className='icons'><FaGithub /></a>
          <a href="https://web.whatsapp.com/" target='_blank' rel="noopener noreferrer" className='icons'><FaWhatsappSquare /></a>
          <a href="https://www.facebook.com/nissan.mdnissan.1" target='_blank' rel="noopener noreferrer" className='icons'><FaFacebook /></a>
        </div>

        <div className="contactButtons">
          <a href="#project" className="contactBtn">View Project</a>
          <a href="#contact" className="contactBtn">Hire Me</a>
        </div>
      </div>
      <div className='homeRight'>
        <img src={myPhoto} className='my_photo' alt='Md. Nissan Ali'/>
      </div>
    </div>
  )
}

export default HomeSection