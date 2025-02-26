import React from 'react';

function WorkExperience(){
  const handleButtonClick = (url) => {
    console.log("Button clicked! Opening:", url);
    window.open(url, '_blank');
  };

  return(
    <div className="section"> {/* Fixed class to className */}
      <h2>Work Experience:</h2>
      <div className="section-example">
        <h3>Data analyst: Internship</h3>
        <h4>Bombardier Recreational Products Inc.</h4>
        <p className="location">Sherbrooke,QC</p>
        <p>• Used Microsoft SQL to extract data from databases, ensuring accurate and efficient data retrieval.</p>
        <p>• Employed Microsoft Excel to process, clean and transform data, and analyze it to better inform business decisions.</p>
        <p>• Created interactive and insightful data visualizations using Power BI.</p>
        <p className="dates">May 2023 - Aug 2023</p>
        <div> 
          <button className="website-button" onClick={() => handleButtonClick("https://www.brp.com")}>
            BRP website
          </button>
        </div>
        <div>
          <button className="video-button" onClick={() => handleButtonClick("https://youtu.be/KwKCG26S5WM")}>
            Video representation (in French)
          </button>
        </div>
      </div>
      <div id="work-experience" className="section-example">
        <h3>Customer service representative</h3>
        <h4>Rogers Inc.</h4>
        <p className="location">Montreal,QC</p>
        <p>• Managed inbound calls for both cell phone and home internet services.</p>
        <p>• Promoted and sold a variety of devices and services.</p>
        <p>• Provided technical support and troubleshooting assistance to customers.</p>
        <p>• Handled and resolved billing inquiries and concerns.</p>
        <p className="dates">Apr 2019 - Sep 2022</p>
        <button className="website-button" onClick={() => handleButtonClick("https://www.rogers.com")}>
          Rogers website
        </button>
      </div>
      <div className="section-example">
        <h3>Customer service representative</h3>
        <h4>Voxdata</h4>
        <p className="location">Montreal, QC</p>
        <p>• Managed inbound customer calls, ensuring exceptional service and support.</p>
        <p>• Provided technical support and troubleshooting assistance to customers.</p>
        <p>• Engaged with customers on social media platforms, delivering the same level of support and assistance as provided during inbound calls.</p>
        <p className="dates">Feb 2018 - Mar 2019</p>
        <button className="website-button" onClick={() => handleButtonClick("https://www.voxdata.com")}>
          Voxdata website
        </button>
      </div>
    </div>
  );
}

export default WorkExperience;
