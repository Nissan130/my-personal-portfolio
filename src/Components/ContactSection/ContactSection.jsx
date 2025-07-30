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
      </div>

      <div className="contactContainer">
        <div className="get_in_touch_container">
          <div className="get_in_touch_heading">Get In Touch</div>
          <div className="get_in_touch_content">
            <div className="email">
              <MdEmail />
              <a href="" style={{textDecoration: 'none', color: '#eee', letterSpacing: '1px'}}>mdnissanali130@gmail.com</a></div>
            <div className="phone"><FaSquarePhone />01771337896</div>
            <div className="address"><FaLocationArrow />RUET, Rajshahi, Bangladesh</div>
          </div>
        </div>

        <div className="formContainer">
          <div className="formContainerHeading">
            <p>Contact Form</p>
          </div>

          <div className="formContainerContent">
            <div className="input_box">
              <input type="text" placeholder='Your Name' className='name_input' />
              <input type="email" placeholder='Your Email' className='email_input' />
              <textarea placeholder='Your Message' className='message_input' />
              <input type="submit" value="Send" className='submit_form' />
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default ContactSection