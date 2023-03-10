import React from 'react';
import './style.css';


export const Navbar = ({currentPage, handlePageChange}) => {
  return (
<header>
<h1 className="header-name">Claire Eberle</h1>
<ul className="ul-nav">
    <li className={currentPage === 'About' ? 'li-nav active' : 'li-nav '}>
        <a className="a-nav"
        href="#about"
        onClick={() => handlePageChange("About")}
        
        
        >

            About
        </a>
    </li>
    <li className={currentPage === 'Portfolio' ? 'li-nav active' : 'li-nav '}>
        <a className="a-nav"
        href="#portfolio"
        onClick={() => handlePageChange("Portfolio")}
        
       
        >

            Portfolio
        </a>
    </li>
    <li className={currentPage === 'Resume' ? 'li-nav active' : 'li-nav '}>
        <a className="a-nav"
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        
        
        >

            Resume
        </a>
    </li>
    <li className={currentPage === 'Contact' ? 'li-nav active' : 'li-nav '}>
        <a className="a-nav"
        href="#contact"
        onClick={() => handlePageChange("Contact")}
        
       
        >

            Contact
        </a>
    </li>
   </ul>
            </header>
  )
}


