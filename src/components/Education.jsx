import React from 'react';

function Education(){
  return(
    <div class="section">
    <h2>Education:</h2>
    <div class="section-example">
      <h3>Universite de Montreal</h3>
      <p class="location">Montreal,QC</p>
      <p>Master's degree in computer science</p>
      <p class="dates">Sep 2024 - Apr 2026</p>
      <button class="website-button" data-link="https://www.umontreal.ca">Universite de Montreal website</button>
    </div>
    <div class="section-example">
      <h3>Universite de Montreal</h3>
      <p class="location">Montreal,QC</p>
      <p>Bachelor's degree in computer science</p>
      <p class="dates">Jan 2021 - Dec 2023</p>
      <button class="website-button" data-link="https://www.umontreal.ca">Universite de Montreal website</button>
    </div>
    <div class="section-example">
    <h3>Institut technique Aviron de Montreal</h3>
      <p class="location">Montreal,QC</p>
      <p>DEP in industrial design</p>
      <p class="dates">Oct 2016 - Feb 2018</p>
      <button class="website-button" data-link="https://www.avirontech.com">Institut technique Aviron de Montreal website</button>
    </div>
    <div class="section-example">
      <h3>CGPE Ibn Ghazi</h3>
        <p class="location">Marrakech, Morocco</p>
        <p>undergraduate intensive preparation courses for the entrance exams to engineering schools</p>
        <p class="dates">Sep 2011 - June 2014</p>
        <button class="website-button" data-link="https://www.igmprepa.com">CGPE Ibn Ghazi website</button>
    </div>
  </div>
  );
}

export default Education;