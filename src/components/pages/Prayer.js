import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Prayer.css';
import Navbar from "../Navbar";

function Prayer() {
    const [prayerRequests, setPrayerRequests] = useState([]);
    const [newRequest, setNewRequest] = useState("");
    const [amenClicked, setAmenClicked] = useState({}); // Track clicked Amen buttons

    // Fetch prayer requests
    useEffect(() => {
        fetchPrayerRequests();
    }, []);

    const fetchPrayerRequests = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/prayer-requests');
            setPrayerRequests(response.data);
        } catch (error) {
            console.error('Error fetching prayer requests:', error);
        }
    };

    // Submit new prayer request
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/prayer-requests', {
                content: newRequest,
            });
            setPrayerRequests([response.data, ...prayerRequests].slice(0, 30)); // Add to top and keep latest 30
            setNewRequest("");
        } catch (error) {
            console.error('Error submitting prayer request:', error);
        }
    };

    // Handle Amen button click
    const handleAmen = async (id) => {
        if (amenClicked[id]) return; // Prevent multiple clicks

        try {
            await axios.post(`http://localhost:5000/api/prayer-requests/${id}/amen`);
            setAmenClicked((prev) => ({ ...prev, [id]: true })); // Mark this request as clicked
        } catch (error) {
            console.error('Error updating Amen count:', error);
        }
    };

    return (
        <div className='Entirepage'>
            <Navbar />
            <div className='Second'>
                <div className="prayer-container">
                    <header className="prayer-header">
                        <h1 className="prayer-title">PRAYER</h1>
                        <p className="verse">
                            <b>
                                "Do not be anxious about anything, but in every situation,<br />
                                by prayer and petition, with thanksgiving, present your requests to God."
                            </b>
                            <br /><strong className='book'>Philippians 4:6-7</strong>
                        </p>
                    </header>

                    <div className="video-section">
                        <h2 className="section-title">Anointing Prayer Videos</h2>
                        <br />
                        <div className="video-list">
                            <iframe
                                width="80%"
                                height="450"
                                src="https://www.youtube.com/embed/uMvR7ONTkp8"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="prayer-request-section">
                        <h2 className="request-title">We are here to PRAY for you</h2>

                        <form onSubmit={handleSubmit} className='forms'>
                            <textarea
                                value={newRequest}
                                onChange={(e) => setNewRequest(e.target.value)}
                                placeholder="Enter your prayer request here..."
                                required
                            />
                            <button type="submit">Submit Request</button>
                        </form>

                        {/* Scrollable Grid Container */}
                        <div className="scrollable-grid-container">
                            <div className="prayer-requests-grid">
                                {prayerRequests.map((request) => (
                                    <div key={request._id} className="prayer-request-box">
                                        <p>{request.content}</p>
                                        <button
                                            onClick={() => handleAmen(request._id)}
                                            className={`amen-button ${amenClicked[request._id] ? 'clicked-amen' : ''}`}
                                        >
                                            {amenClicked[request._id] ? 'Amen Clicked' : 'Amen'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prayer;
