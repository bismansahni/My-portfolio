import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Skills from './Skill';
import About from './About';
import Education from './Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div id="about"><About /></div>
        {/* Assuming Experience is another component you would include */}
        {/* <div id="experience"><Experience /></div> */}
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        {/* Other sections go here */}
      </header>
    </div>
  );
}

export default App;
