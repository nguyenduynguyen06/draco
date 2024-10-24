import React from 'react';
import './Css/NextStep.css';
import { NavLink } from 'react-router-dom';

const NextStep = () => {
  return (
    <div className="next-step-container">
      <h2 className="title">Take the next step with us</h2>
      <div className="options">
        <div className="option">
          <h3 className="option-title">Find a Solution</h3>
          <p>Discover how Draco can advance your industrial automation and grow your business</p>
          <NavLink to="/contact"  onClick={() => window.scrollTo(0, 0)}><button className="action-button">Contact us </button></NavLink>
        </div>
        <div className="option">
          <h3 className="option-title">For Investors</h3>
          <p>Visit our investor centre to read our latest financial reports and announcements.</p>
          <NavLink to="#"><button className="action-button">Investor centre </button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
