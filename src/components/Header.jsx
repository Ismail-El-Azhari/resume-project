import React from 'react';
import githubLogo from '../assets/GitHub-logo.png'; 
import linkedinLogo from '../assets/LinkedIn_icon.svg.png'; 
import facePicture from '../assets/photo-visage.jpg';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Ismail El Azhari</h1>
      <div>
      <a>
          <img src={facePicture} alt="Face picure" className='facepic'/> 
        </a>
      </div>
      <div className="links">
        <a href="https://github.com/Ismail-El-Azhari?tab=repositories" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="logo" /> Github repository
        </a>
        <a href="https://www.linkedin.com/in/ismail-el-azhari-a51baa256" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="logo" /> LinkedIn profile
        </a>

      </div>
    </header>
  );
}

export default Header;
