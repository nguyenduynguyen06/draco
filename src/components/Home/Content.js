import React from 'react';
import './Css/Content.css';

const Content = () => {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="business-automation-container">
      <div className="business-content">
        <h2 className="main-title">We've helped over 10,000 businesses build advanced industrial automation</h2>
        <p className="description">
          Draco delivers solutions that power Asia's industrial future.<br />
          Today, our components and systems power semiconductor factories, advanced medical devices,
          clean energy plants, electric vehicles and more across Asia.
        </p>
        <p className="description">
          Our customers count on us to deliver when it matters: Mission-critical, on-location, and with disruptive capability.
        </p>
        <p className="description">
          Learn how 10,000+ businesses throughout Asia have trusted Draco to deliver advanced automation.
        </p>
        <button className="grow-button" onClick={scrollToBottom}>Grow your capabilities with us</button>
      </div>
    </div>
  );
};

export default Content;
