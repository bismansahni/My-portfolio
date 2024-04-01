// Skills.js

import React from 'react';
import awsLogo from './images/awslogo.png';
import sqllogo from './images/sqllogo.png';


import './App.css';

function Skills() {
    return (
      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <img src={awsLogo} alt="AWS" className="skill-icon" />
            <div className="skill-name">AWS</div>

            <img src={sqllogo} alt="sql" className="skill-icon" />
            <div className="skill-name">sql</div>
          </div>
          {/* Repeat for other skill cards */}
        </div>
      </div>
    );
  }
export default Skills;
