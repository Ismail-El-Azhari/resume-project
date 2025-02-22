import React from 'react';

function WorkExperience(){
  return(
    <div class="section">
    <h2>Work Experience:</h2>
    <div class="section-example">
      <h3>Data analyst:  Internship</h3>
      <h4>Bombardier Recreational Products Inc.</h4>
      <p class="location">Sherbrooke,QC</p>
      <p>•	Used Microsoft SQL to extract data from data bases, ensuring accurate and efficient data retrieval.</p>
      <p>•  Employed Microsoft Excel to process, clean and transform data, and analyze it to better inform business decisions.</p>
      <p>•	Created interactive and insightful data visualizations using Power BI.</p>
      <p class="dates">May 2023- Aug 2023</p>
      <div>
        <button class="website-button" data-link="https://www.brp.com">BRP website</button>
      </div>
      <div>
        <button class="video-button" data-link="https://youtu.be/KwKCG26S5WM">Video representation (in French)</button>
      </div>
    </div>
    <div class="section-example">
    <h3>Customer  service  representative</h3>
    <h4>Rogers Inc.</h4>
      <p class="location">Montreal,QC</p>
      <p>•	Managed inbound calls for both cell phone and home internet services.</p>
      <p>•	Promoted and sold a variety of devices and services.</p>
      <p>•	Provided technical support and troubleshooting assistance to customers.</p>
      <p>•	Handled and resolved billing inquiries and concerns.</p>
      <p class="dates">Apr 2019 - Sep 2022</p>
      <button class="website-button" data-link="https://www.rogers.com">Rogers website</button>
    </div>
    <div class="section-example">
      <h3>Customer  service  representative</h3>
      <h4>Voxdata</h4>
        <p class="location">Montreal, QC</p>
        <p>•	Managed inbound customer calls, ensuring exceptional service and support.</p>
        <p>•	Provided technical support and troubleshooting assistance to customers.</p>
        <p>•	Engaged with customers on social media platforms, delivering the same level of support and assistance as provided during inbound calls.</p>
        <p class="dates">Feb 2018 - Mar 2019</p>
        <button class="website-button" data-link="https://www.voxdata.com">Voxdata website</button>
    </div>
  </div>

  );
}

export default WorkExperience;