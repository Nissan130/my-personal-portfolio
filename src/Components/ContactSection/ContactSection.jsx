import React from 'react'
import './ContactSection.css'

function ContactSection() {
  return (
    <div className='contactSection'>
      <div className="contactSectionHeading">
        <h3>Contact Me</h3>
      </div>

      <div className="contactContainer">
        <div className="contactContainerHeading">
          <p>Contact Form</p>
        </div>

        <div className="contactContent">
          <div className="input_box">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Your Email' />
            <textarea placeholder='Your Message' />
            <input type="submit" value="Send"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactSection