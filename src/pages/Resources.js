import React from 'react';
import laptop01Image from '../assets/laptop.png'; // Used for Chrome Extension video thumbnail
import laptop02Image from '../assets/web-app.png'; // Used for Web App video thumbnail
import phonesImage from '../assets/mobile-app.png'; // Used for Mobile App video thumbnail

function Resources() {
  return (
    <div className="resources-container">
      <section className="resources-hero-section">
        <h1>RESOURCES</h1>
        <h2>Get Sourcing with SAS</h2>
        
        <div className="resources-cards-container">
          <div className="resource-card">
           
              <img src={laptop01Image} alt="Chrome Extension Video Thumbnail" />
             
            
            </div>

          <div className="resource-card">
           
              <img src={laptop02Image} alt="Web App Video Thumbnail" />
            
            </div>

          <div className="resource-card">
           
              <img src={phonesImage} alt="Mobile App Video Thumbnail" />
             
            </div>
        </div>
        <button className="try-for-free-button">TRY FOR FREE</button>
      </section>
    </div>
  );
}

export default Resources;
