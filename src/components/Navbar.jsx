import React from 'react';
import '../style/navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AboutMe from './AboutMe';
import ContactUs from './ContactUs'
import PorjectList from './ProjectList'
import Techabout from './Techabout'



function Navbar() {
  return (
    <div className='navbar'>
      <nav className='navbar-ul-li' >
        <ul>
          <AnchorLink href='#Home'>
            <li>Home</li>
          </AnchorLink>
          <AnchorLink href='#Project'>
            <li>Projects</li>
          </AnchorLink>
          <AnchorLink href='#Home'>
            <li>About Me</li>
          </AnchorLink>
          <AnchorLink href='#Contact'>
            <li>Contact Me</li>
          </AnchorLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;