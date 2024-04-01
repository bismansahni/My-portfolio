import logo from './logo.svg';
import './App.css';
// import './style/Navbar.css'
import Navbar from './Navbar';
import Skills from './Skill';
import About from './About';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About/>
       <Navbar/>
       <Skills/>

      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
