import React from 'react';
import { ClipLoader } from 'react-spinners'; // Optional spinner library
import './Loader.css'; // Add custom styles if needed

const Loader = () => {
  return (
    <div className="loader-container">
      <ClipLoader color="#ffffff" size={50} />
    </div>
  );
};

export default Loader;
