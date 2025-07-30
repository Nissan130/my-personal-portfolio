import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [activeNavLink, setActiveNavLink] = useState("#home")

  // Detect scroll and update activeNavLink
  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const handleScroll = () => {
      let scrollY = window.scrollY + 100 // offset for header height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = "#" + section.getAttribute("id")

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveNavLink(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='navbarContainer'>
      <div className='logo'>
        <h3>Nissan</h3>
      </div>

      <div className='navbarLinks'>
        <a href="#home" className={`navLinkItem ${activeNavLink === "#home" ? "active" : ""}`}>Home</a>
        <a href="#about" className={`navLinkItem ${activeNavLink === "#about" ? "active" : ""}`}>About</a>
        <a href="#project" className={`navLinkItem ${activeNavLink === "#project" ? "active" : ""}`}>Project</a>
        <a href="#contact" className={`navLinkItem ${activeNavLink === "#contact" ? "active" : ""}`}>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
