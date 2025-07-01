import React from 'react';
import './DistancedGrid.css';
import mapImage from '../../Assets/Desktop/baneer-5.png';


const DistancedGrid = () => (
  <div className="distance-container">
    <h2 className="page-title">Sample Flat</h2>

    <div className="video-container">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Sample Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>


        <section className="distance-section">
      <div className="distance-content">
        <div className="distance-left">
          <h1 className="distance-headline">
            A landmark<br />
        destination for<br />
        elevated living
          </h1>
          <div className="distance-underline" />
        </div>
        <div className="distance-right">
          <h1 className="distance-headline hero-headline--invisible">
            residence
          </h1>
          <p className="distance-copy">
             Revet is where Pune’s future is unfolding. <br />
              Tucked between the Pune-Mumbai <br />
        Expressway and the Katraj-Dehu Bypass, <br />
         this rapidly developing suburban <br />
        neighborhood connects you to wherever <br />
         you want to be without the usual hassles. It <br />
         owes its incredible connectivity to the old <br />
         and new Mumbai highways, the <br />
         Pune Railway, and the AKurdi Railway Station. <br />
         Top schools, business hubs, entertainment enclaves, <br />
         healthcare facilities and other <br />
        essentials are all within close proximity. <br />
         This isn’t just a convenient
        location, but a smart one.
          </p>
        </div>
      </div>
    </section>

    <div className="map-container">
      <img src={mapImage} alt="Map of location" className="map-image" />
    </div>

    <button className="direction-button">

      CLICK HERE TO GET DIRECTIONS
    </button>
  </div>
);

export default DistancedGrid;