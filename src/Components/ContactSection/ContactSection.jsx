import React, { useState } from 'react'
import './ContactSection.css'
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import emailjs from "emailjs-com";

function ContactSection() {

  const [loading, setLoading] = useState(false);
  //send message functionality
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // show spinner

    emailjs
      .send(
        // process.env.REACT_APP_EMAILJS_SERVICE_ID,
        serviceID,
        // process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateID,
        formData,
        // process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        publicKey

      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };


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
          <form className="contactForm" onSubmit={sendEmail}>
            <div className="inputGroup">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required />
              <label>Your Name</label>
            </div>

            <div className="inputGroup">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required

              />
              <label>Your Email</label>
            </div>
            <div className="inputGroup">
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required

              ></textarea>
              <label>Your Message</label>
            </div>
            <button type="submit" className="submitBtn" disabled={loading}>{loading ? <span className="spinner"></span> : "Send Message"}
            </button>
          </form>
          {status && <p className="statusMessage">{status}</p>}
        </div>

      </div>
    </div>
  )
}

export default ContactSection
