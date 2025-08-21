import React from 'react'
import './ContactSection.css'
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

function ContactSection() {
  return (
    <div className='contactSection'>
      <div className="contactSectionHeading">
        <h3>Contact Me</h3>
        <p className="subHeading">Have a question or want to work together? Let’s connect!</p>
      </div>

      <div className="contactContainer">
        
        {/* Contact Info */}
        <div className="get_in_touch_container">
          <h4 className="get_in_touch_heading">Get In Touch</h4>
          <div className="get_in_touch_content">
            <div className="contact_item">
              <MdEmail className="icon" />
              <a href="mailto:mdnissanali130@gmail.com">mdnissanali130@gmail.com</a>
            </div>
            <div className="contact_item">
              <FaSquarePhone className="icon" />
              <a href="tel:+8801771337896">+880 1771-337896</a>
            </div>
            <div className="contact_item">
              <FaLocationArrow className="icon" />
              <span>RUET, Rajshahi, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="formContainer">
          <h4 className="formContainerHeading">Send a Message</h4>
          <form className="contactForm">
            <div className="inputGroup">
              <input type="text" name="name" required />
              <label>Your Name</label>
            </div>
            <div className="inputGroup">
              <input type="email" name="email" required />
              <label>Your Email</label>
            </div>
            <div className="inputGroup">
              <textarea name="message" rows="5" required></textarea>
              <label>Your Message</label>
            </div>
            <button type="submit" className="submitBtn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactSection
