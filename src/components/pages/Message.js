import React, { useState } from "react";
import "./Message.css"; // Your CSS file
import Navbar from "../Navbar"; // Adjust the path based on your project structure
import mes from "../assets/mes.mp4"; // Replace with your video path
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Messages = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      const element = document.querySelector(`.${scrollTo}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const sermons = [
    {
      title: "Where You Meet With God",
      speaker: "Pastor Steven Furtick",
      video: "video1.mp4", // Replace with the actual video path
      description: "Discover the place where you meet with God.",
    },
    {
      title: "The Battle Made Me",
      speaker: "Pastor Stephen Chandler",
      video: "video2.mp4",
      description: "Learn how life's battles shape your faith.",
    },
    {
      title: "Elevation Year In Review",
      speaker: "Holly Furtick",
      video: "video3.mp4",
      description: "A look back at an impactful year at Elevation.",
    },
    {
      title: "You Don't Have To",
      speaker: "Pastor Steven Furtick",
      video: "video4.mp4",
      description: "Explore the freedom in God's promises.",
    },
    {
      title: "God Wants To Show You",
      speaker: "Holly Furtick",
      video: "video5.mp4",
      description: "Discover what God wants to reveal to you.",
    },
    {
      title: "Arresting Anxiousness",
      speaker: "Dr. Dharius Daniels",
      video: "video6.mp4",
      description: "How to stop anxiety in its tracks.",
    },
    {
      title: "New Beginnings",
      speaker: "Pastor Steven Furtick",
      video: "video7.mp4",
      description: "Start fresh with a new perspective in Christ.",
    },
    {
      title: "Faith Over Fear",
      speaker: "Pastor Stephen Chandler",
      video: "video8.mp4",
      description: "Choose faith in the face of fear.",
    },
    {
      title: "God's Perfect Plan",
      speaker: "Holly Furtick",
      video: "video9.mp4",
      description: "Trust in the perfect plan God has for you.",
    },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div>
      <Navbar />
      <div className="messages-container">
        <div className="main-video-section">
          <div className="me">
            <div className="sermon-header">
              <h1>SERMON</h1>
              <p className="bible-verse">
                "So faith comes from hearing, and hearing through the word of Christ - Romans 10:17"
              </p>
            </div>
          </div>

          <div className="todays-message-section">
            <h2>Today's Message</h2>
            <div className="video-container">
              <video controls>
                <source src={mes} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="sermons-section">
          <h2>Sermons</h2>
          <div className="sermons-grid">
            {sermons.map((sermon, index) => (
              <div
                className="sermon-card"
                key={index}
                onClick={() => handleVideoClick(sermon.video)}
              >
                <video controls>
                  <source src={sermon.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h3>{sermon.title}</h3>
                <p className="sermon-speaker">{sermon.speaker}</p>
                <p className="sermon-description">{sermon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="video-overlay">
          <div className="video-modal card-design">
            <button className="close-btn" onClick={handleCloseVideo}>
              &times;
            </button>
            <video className="fullscreen-video" controls autoPlay>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
