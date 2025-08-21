import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [activeNavLink, setActiveNavLink] = useState("#home")
  const [menuOpen, setMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = (id) => {
    setActiveNavLink(id)
    setMenuOpen(false) // close menu on link click
  }

  return (
    <div className='navbarContainer'>
      <div className='logo'>
        <a href="#home">Nissan</a>
      </div>

      <div className={`navbarLinks ${menuOpen ? "activeMenu" : ""}`}>
        <a href="#home" className={`navLinkItem ${activeNavLink === "#home" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" className={`navLinkItem ${activeNavLink === "#about" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>About</a>
        <a href="#project" className={`navLinkItem ${activeNavLink === "#project" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Project</a>
        <a href="#contact" className={`navLinkItem ${activeNavLink === "#contact" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className='menuIcon' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
    </div>

  )
}

export default Navbar
