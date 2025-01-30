import React from "react";
import "./Home.css";
import Navbar from "../Navbar"; // Adjust the path based on your folder structure
import promise from "../assets/promise.jpg";
import { useNavigate } from "react-router-dom";

// Gallery Images
import gallery1 from "../assets/IMG8.jpg";
import gallery2 from "../assets/IMG7.jpg";
import gallery3 from "../assets/IMG6.jpg";
import gallery4 from "../assets/IMG5.jpg";
import gallery5 from "../assets/IMG4.jpg";
import gallery6 from "../assets/IMG3.jpg";

function Hero() {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/about?scrollTo=galer");
  };

  const readMoreClick = () => {
    navigate("/message?scrollTo=todays-message-section");
  };
  return (
    <div>
      <Navbar />
      <div className="hero">
        
      </div>
<div className="intr">
<h1>Welcome to the Anointing<br />Prayer Palace</h1>
<p>A place of peace, prayer, and reflection.</p>
</div>
      <div className="promise-section">
        <div className="promise-card">
          <img src={promise} alt="Promise Verse" className="promise-image" />
          <div className="promise-content">
            <h2>Today's Promise Verse</h2>
            <p>For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11</p>
            <button className="see-more-button" onClick={readMoreClick}>
            Read More</button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
  <h2>Gallery</h2>
  <div className="panorama-container">
    <div className="panorama">
      <img src={gallery1} alt="Gallery 1" className="gallery-item" />
      <img src={gallery2} alt="Gallery 2" className="gallery-item" />
      <img src={gallery3} alt="Gallery 3" className="gallery-item" />
      <img src={gallery4} alt="Gallery 4" className="gallery-item" />
      <img src={gallery5} alt="Gallery 5" className="gallery-item" />
      <img src={gallery6} alt="Gallery 6" className="gallery-item" />
    </div>
  </div>
  <button className="see-more-button" onClick={handleSeeMoreClick}>
  See More</button>
</div>




      {/* Google Map Section */}
      <div className="ma">
        <h2 className="maa">Come and be Blessed</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.437178438596!2d77.3547709936136!3d9.77552949866723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07052893c253c5%3A0xe33e253ad794cf3a!2sanointing%20prayer%20palace!5e1!3m2!1sen!2sin!4v1737099129462!5m2!1sen!2sin"
          width="70%"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      </div>
    </div>
  );
}

export default Hero;