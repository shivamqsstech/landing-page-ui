import React, { useState } from 'react'
import  './navbar.css';
import brand_logo from '../../assets/brand_logo.png';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  
  return (
    <div className='container nav'>
      <div className='logo'>
        <img src={brand_logo} alt="" />
      </div>

      <div className={`navItems ${isMobile ? "show" : ""}`}>
        <ul className={`nav-links ${isMobile ? "mobile" : ""}`} >
          <li><a href="">MENU</a></li>
          <li><a href="">LOCATION</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>

      </div>

      <div className={`loginBtn ${isMobile ? "mobile-login show" : ""}`}>
        <button>Login</button>

      </div>

       <div
        className="hamburger" onClick={() => setIsMobile(!isMobile)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>



    </div>
  )
}

export default Navbar;