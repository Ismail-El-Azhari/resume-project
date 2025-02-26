import React from 'react';


function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#about-me">Ismail El Azhari</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#about-me">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#work-experience">Work Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#technical-skills">Technical Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#language-skills">Language-Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;