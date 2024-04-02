import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Skills from './Skill';
import About from './About';
import Education from './Education';
import Projects from './Project'; // Make sure the import matches the file name
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div id="about"><About /></div>
        {/* Add the Experience component when ready */}
        {/* <div id="experience"><Experience /></div> */}
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        <div id="projects"><Projects /></div> {/* Here is the projects section */}
        {/* You can add more sections as needed */}
      </header>
    </div>
  );
}

export default App;

