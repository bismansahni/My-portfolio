import React from 'react';
import bismanphoto from './images/bismanphoto.jpg'; // Adjust the path to where your image is located
// import './style/About.css';
function About() {
    return (
        <div>
            <img src={bismanphoto} alt="Bisman" className="about-photo" />
            <p>Hello, I am Bisman!</p>
        </div>
    );
}

export default About;
