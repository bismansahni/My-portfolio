import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Skills from './Skill';
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
