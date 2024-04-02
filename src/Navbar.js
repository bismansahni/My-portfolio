import './style/Navbar.css'


function navbar() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-link" style={{ color: '#16f2b3', fontSize: '24px' }}>
            Bisman Sahni
          </a>
          <div>
            <a className="nav-link" href="#about">ABOUT</a>
            <a className="nav-link" href="#experience">EXPERIENCE</a>
            <a className="nav-link" href="#skills">SKILLS</a>
            <a className="nav-link" href="#education">EDUCATION</a>
            <a className="nav-link" href="#RESUME">RESUME</a>
            <a className="nav-link" href="#projects">PROJECTS</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default navbar;
  