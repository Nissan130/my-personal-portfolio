import React from 'react'
import './HomeSection.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import myPhoto from '../assets/images/my_photo_without_bg.png'




function HomeSection() {
  return (
    <div className='homeSection'>
      <div className='homeLeft'>
        <div className='introInfo'>
          <h3 className='greetingTitle'>Hi, <span style={{color: 'orange'}}>Me</span></h3>
          <h2 className='nameTitle'>Md. Nissan Ali</h2>
          <h3 className='designationTitle'>A software developer, Data Analyst</h3>
        </div>
        <div className="contactIcons">
          <a href="#linkedin" className='icons'><BsLinkedin /></a>
          <a href="#linkedin" className='icons'><FaGithub /></a>
          <a href="#linkedin" className='icons'><FaWhatsappSquare /></a>
          <a href="#linkedin" className='icons'><FaFacebook /></a>
        </div>

        <div className="contactButtons">
          <a href="#viewproject" className="contactBtn">View Project</a>
          <a href="#viewproject" className="contactBtn">Hire Me</a>
        </div>
      </div>
      <div className='homeRight'>
        <img src={myPhoto} className='my_photo'/>
      </div>
    </div>
  )
}

export default HomeSection