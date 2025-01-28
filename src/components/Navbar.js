import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const location = useLocation(); // Get the current path

  const handleLinkClick = (path) => {
    if (location.pathname !== path) {
      setIsMobileMenuOpen(false); // Close the menu if navigating to a different page
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1>Anointing Prayer Palace</h1>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "×" : "☰"}
      </button>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <button className="menu-button close-button" onClick={toggleMobileMenu}>
          ×
        </button>
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            onClick={() => handleLinkClick("/About")}
            className={location.pathname === "/About" ? "active-link" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/Message"
            onClick={() => handleLinkClick("/Message")}
            className={location.pathname === "/Message" ? "active-link" : ""}
          >
            Messages
          </Link>
        </li>
        <li>
          <Link
            to="/Prayer"
            onClick={() => handleLinkClick("/Prayer")}
            className={location.pathname === "/Prayer" ? "active-link" : ""}
          >
            Prayer
          </Link>
        </li>
        <li>
          <Link
            to="/Donate"
            onClick={() => handleLinkClick("/Donate")}
            className={location.pathname === "/Donate" ? "active-link" : ""}
          >
            Donate
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleLinkClick("/contact")}
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Semi-transparent overlay when menu is active */}
      {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}
    </nav>
  );
};

export default Navbar;
