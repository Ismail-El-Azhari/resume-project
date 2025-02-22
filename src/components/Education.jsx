import React from 'react';

function Education() {
  // Function to handle button clicks and open links
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="section">
      <h2>Education:</h2>
      <div className="section-example">
        <h3>Université de Montréal</h3>
        <p className="location">Montreal, QC</p>
        <p>Master's degree in computer science</p>
        <p className="dates">Sep 2024 - Apr 2026</p>
        <button className="website-button" onClick={() => handleButtonClick("https://www.umontreal.ca")}>
          Université de Montréal website
        </button>
      </div>
      <div className="section-example">
        <h3>Université de Montréal</h3>
        <p className="location">Montreal, QC</p>
        <p>Bachelor's degree in computer science</p>
        <p className="dates">Jan 2021 - Dec 2023</p>
        <button className="website-button" onClick={() => handleButtonClick("https://www.umontreal.ca")}>
          Université de Montréal website
        </button>
      </div>
      <div className="section-example">
        <h3>Institut technique Aviron de Montréal</h3>
        <p className="location">Montreal, QC</p>
        <p>DEP in industrial design</p>
        <p className="dates">Oct 2016 - Feb 2018</p>
        <button className="website-button" onClick={() => handleButtonClick("https://www.avirontech.com")}>
          Institut technique Aviron de Montréal website
        </button>
      </div>
      <div className="section-example">
        <h3>CGPE Ibn Ghazi</h3>
        <p className="location">Marrakech, Morocco</p>
        <p>Undergraduate intensive preparation courses for the entrance exams to engineering schools</p>
        <p className="dates">Sep 2011 - June 2014</p>
        <button className="website-button" onClick={() => handleButtonClick("https://www.igmprepa.com")}>
          CGPE Ibn Ghazi website
        </button>
      </div>
    </div>
  );
}

export default Education;
