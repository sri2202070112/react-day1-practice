import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600); // Cinematic Hyper-speed duration
  };

  return (
    <div className={`landing-container ${isExiting ? 'exit-active' : ''}`}>
      <div className="landing-overlay"></div>
      
      {/* Animated Background Elements */}
      <div className="vortex-container">
        <div className="vortex-ring ring-1"></div>
        <div className="vortex-ring ring-2"></div>
        <div className="vortex-ring ring-3"></div>
      </div>

      {/* Mechanical Slats for Transition */}
      <div className={`slats-container ${isExiting ? 'slats-active' : ''}`}>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="slat"></div>
        ))}
      </div>

      <div className="landing-content">
        <div className="title-wrapper">
          <h1 className="glitch-title" data-text="DAY 1 ASSIGNMENT">
            DAY 1 ASSIGNMENT
          </h1>
          <div className="title-underline"></div>
        </div>
        
        <button className="enter-button" onClick={handleEnter}>
          <span className="button-text">ENTER</span>
          <div className="button-glow"></div>
          <div className="button-particles">
            {[...Array(6)].map((_, i) => (
              <span key={i} className={`particle p-${i}`}></span>
            ))}
          </div>
        </button>
      </div>

      {/* Transition Portal Overlay */}
      <div className="portal-overlay"></div>
    </div>
  );
};

export default LandingPage;
