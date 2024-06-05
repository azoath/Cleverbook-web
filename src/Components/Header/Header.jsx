import React, { useState } from 'react';
import logo from '../../assets/logo1.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-wrapper">
      <div className="h-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar ${menuOpen ? 'open' : ''}`}>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Industry</a>
          <a href="#">Customer Stories</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
        </div>
        <div className="side-bar">
          <a href="#">Login</a>
          <button>Talk to Us</button>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Header;
