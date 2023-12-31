import React from 'react';
import './hamburgerMenu.css';

const HamburgerMenu = ({ isMenuOpen, onToggle }) => {
  return (
    <button className={`hamburger-button ${isMenuOpen ? 'open' : ''}`} onClick={onToggle}>
       <div className='bar'></div>
       <div className='bar'></div>
       <div className='bar'></div>
    </button>
  );
};

export default HamburgerMenu;




