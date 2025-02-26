import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import TechnicalSkills from './components/TechnicalSkills';
import LanguageSkills from './components/LanguageSkills';
import Navbar from './components/navbar';
import Contact from './components/Contact';




function App() {
  return (
     
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <WorkExperience />
      <TechnicalSkills />
      <LanguageSkills />
      <Contact />
    </div>
  );
}

export default App;



