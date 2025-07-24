import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className='logo'>
        <h3 >Nissan</h3>
      </div>

      <div className='navbarLinks'>
        <a className='navLinkItem' href="#about">Home</a>
        <a className='navLinkItem' href="#about">About</a>
        <a className='navLinkItem' href="#project">Project</a>
        <a className='navLinkItem' href="#contact">Contact</a>
      </div>
    </div>

  )
}

export default Navbar