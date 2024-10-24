import React from 'react';
import './Css/Industries.css';

const Industries = () => {
  return (
    <div className="industries">
          <div className="industries-grid">
        <div className="industry-card">
          <h2>Education</h2>
        </div>
        <div className="industry-card">
          <h2>&nbsp;&nbsp; Information Technology&nbsp;&nbsp;</h2>
        </div>
             <div className="industry-card">
          <h2>Energy</h2>
        </div>
        <div className="industry-card">
          <h2>Medical</h2>
        </div>
      </div>
      <div style={{padding:'0px 20px'}}></div>
      <div className="industries-content">
        <h1>Industries</h1>
        <p>We've delivered automation solutions across all major industry segments.</p>
        <p>Our industry groups deliver specific solutions tailored for our customers' industries.</p>
        <p>Explore how Draco can help transform your industry presence</p>
      </div>
    </div>
  );
};

export default Industries;
