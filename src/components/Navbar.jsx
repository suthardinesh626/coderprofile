import React from 'react';
import '../style/navbar.css';


function Navbar() {
  return (
    <nav  className='navbar-ul-li' >
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About Me</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;