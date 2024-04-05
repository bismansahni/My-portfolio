import React from 'react';
import bismanphoto from './images/bismanphoto.png'; // Adjust the path to where your image is located
import './styles/About.css';

function About() {
    return (
      <div className="about-container">
        <div className="photo-and-bubble-container">
          <img src={bismanphoto} alt="Bisman" className="about-photo" />
          <div className="bubble">
            <p>
              I am a passionate and dedicated computer science student with a strong interest in software development. I am always eager to learn new technologies and explore innovative solutions to real-world problems.
            </p>
          </div>
        </div>
        <div className="about-text-container">
          <h1>Bisman</h1>
        </div>
      </div>
    );
  }
  
  export default About;
  

