import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import TechnicalSkills from './components/TechnicalSkills';
import LanguageSkills from './components/LanguageSkills';




function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Education />
      <WorkExperience />
      <TechnicalSkills />
      <LanguageSkills />
    </div>
  );
}

export default App;



