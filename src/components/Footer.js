import React from "react";
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
          People come here for spiritual<br/> regeneration and to experience 
          God’s healing power in their soul, mind and body.<br/> <br/> <big><b> 1 Samuel 16:3 </b></big><br/> <b>You are to anoint for me the one I indicate.</b>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3 className="Explore">Explore</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/Message">Messages</a></li>
            <li><a href="/Prayer">Prayer</a></li>
            <li><a href="/Donate">Donate</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><strong>Address:</strong> 123 Serenity Road, Peace City</p>
          <p><strong>Email:</strong> info@prayerpalace.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h2>Join us on</h2>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
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
