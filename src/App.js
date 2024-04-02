import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Skills from './Skill'; // Make sure this is the correct import
import About from './About';
import Education from './Education';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About />
        <Navbar />
        <div id="education"><Education /></div>
        <div id="skills"><Skills /></div>
      </header>
    </div>
  );
}

export default App;
