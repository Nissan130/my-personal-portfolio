import React from 'react'
import './FooterSection.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function FooterSection() {
    return (
        <footer className='footer'>
            <div className="footer_content">
                <div class="footer_section footer_about">
                    <h3>Md. Nissan Ali</h3>
                    <p>Passionate Software Developer & Data Analyst from Bangladesh</p>
                </div>

                <div class="footer-section quick_links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#about">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/resume.pdf" target="_blank">Resume</a></li>
                    </ul>
                </div>

                <div class="footer-section footer_social_link">
                    <h4>Connect</h4>
                    <div class="social_icons">
                        <a href="https://www.linkedin.com/in/md-nissan-ali130/" target='_blank' rel="noopener noreferrer" className='icons'><BsLinkedin /></a>
                        <a href="https://github.com/Nissan130" target='_blank' rel="noopener noreferrer" className='icons'><FaGithub /></a>
                        <a href="https://web.whatsapp.com/" target='_blank' rel="noopener noreferrer" className='icons'><FaWhatsappSquare /></a>
                        <a href="https://www.facebook.com/nissan.mdnissan.1" target='_blank' rel="noopener noreferrer" className='icons'><FaFacebook /></a>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className='hline'></div>
                <div><p>&copy; 2025 Md. Nissan Ali. All rights reserved.</p></div>
            </div>
        </footer>
    )
}

export default FooterSection