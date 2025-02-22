import React from 'react';
import githubLogo from '../assets/GitHub-logo.png'; 
import linkedinLogo from '../assets/LinkedIn_icon.svg.png'; 

function Header() {
  return (
    <header className="header">
      <h1 className="title">Ismail El Azhari</h1>
      <div className="contact-info">
        <p className="subTitle">elazhari94@gmail.com</p>
        <p className="subTitle">+1 (438) 923-5716</p>
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
