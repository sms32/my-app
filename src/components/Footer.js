import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <h2>Anointing Prayer Palace</h2>
          <p>
            Anointing Prayer Palace is one of the most inspiring prayer centres in the world.
            People come here for spiritual<br /> regeneration and to experience 
            God’s healing power in their soul, mind and body.<br /> <br /> 
            <big><b>1 Samuel 16:3</b></big><br /> 
            <b>You are to anoint for me the one I indicate.</b>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3 className="Explore">Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>  {/* ✅ Changed to Link */}
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Message">Messages</Link></li>
            <li><Link to="/Prayer">Prayer</Link></li>
            <li><Link to="/Donate">Donate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><strong>Address:</strong> Bro.V.Charles 
W4/103 Church Street,
Annaimalaiyanpatti,
Uthamapalayam 
Theni district 
Pincode 625526</p>
          <p><strong>Email:</strong> jesusforindia80@gmail.com</p>
          <p><strong>Phone:</strong> +91 9842196022</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h2>Join us on</h2>
          <div className="social-icons">
            <a href="https://www.youtube.com/@anointingcharles9100" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Anointing Prayer Palace. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
