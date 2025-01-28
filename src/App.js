import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer"; // Import Footer
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Prayer from "./components/pages/Prayer";
import Message from "./components/pages/Message";
import Donate from "./components/pages/Donation";
import Loader from "./components/Loader"; // Import Loader component
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

const App = () => {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the loader when the route changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time (1 second)
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      
      {/* Show loader during route changes */}
      {loading && <Loader />}
      
      <div className="content">
      <ScrollToTop /> 

        {/* Routes handle switching between pages */}
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           
            <Route path="/Message" element={<Message />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Prayer" element={<Prayer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      
      {/* Footer appears on all pages */}
      
    </>
  );
};

export default App;
