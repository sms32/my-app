import React from "react";
import "./Contact.css";
import Navbar from "../Navbar"; // Adjust the path based on your folder structure

const Contact = () => {
  return (
    <div>
            <Navbar />
<div className="contact-page">
  <div className="ee">
    <div className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <p className="contact-subheader">
        We'd love to hear from you. Reach out to us anytime!
      </p>

      {/* Contact Form */}
      <div className="contact-form-container">
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
            </div>
            <button type="submit" className="bu">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;
