import React from "react";
// import { Link } from "react-router-dom"; // In case you want to add a navigation link
import "./Donation.css"; // Ensure your CSS file is correct
import qr from "../assets/pay.jpg"; // Your image path (update if necessary)
import Navbar from "../Navbar"; // Adjust the path based on your folder structure

const DonationPage = () => {
  return (
    <div>
        <Navbar />
    <div className="DO">
      <div className="main-container-DO">
        <div className="content-DO">
          <h1 className="title-DO">Support the Cause</h1>
          <p className="subtitle-DO">2 Corinthians 9:7</p>

          

          <div className="upi-info-DO">
            <p>
              <strong>UPI ID:</strong> jesusforindia80-1@okhdfcbank
            </p>
            <p>
              <strong>G Pay Number:</strong> 9842196022
            </p>
            <img src={qr} alt="Demo QR Code" className="qr-code-DO" />
          </div>

          <p className="footer-text-DO">
          Every contribution, no matter how small, is a seed planted in faith. 
          Together, we can continue to bring hope, healing, and transformation to our 
          community and beyond. We are committed to
           financial transparency and ensure that your donations are used for the glory of God and the benefit of His people.
          </p>

          
        </div>
      </div>
    </div>
    </div>
  );
};

export default DonationPage;
