


import React from 'react';
import bismanphoto from './images/bismanphoto.png'; // Adjust if necessary
import githubIcon from './images/github.svg'; // Path to your GitHub icon
import linkedInIcon from './images/linkedin.png'; // Path to your LinkedIn icon
import './styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        
        <img src={bismanphoto} alt="Bisman Sahni" className="about-photo" />
        <div className="about-text">
          <h1>Hey, I am Bisman!</h1>
          <p>
           A Computer Science major at Arizona State University specializing in Cybersecurity. My expertise spans several programming languages including Python, C++, and JavaScript, with a keen interest in augmented and virtual reality technologies. I am dedicated to exploring how advanced technologies can solve complex problems and improve everyday life. My passion for innovation is reflected in my involvement in various tech-driven projects, where I consistently strive to push the boundaries of what's possible with cutting-edge solutions.
          </p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/bismansahni" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/bismansahni" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
