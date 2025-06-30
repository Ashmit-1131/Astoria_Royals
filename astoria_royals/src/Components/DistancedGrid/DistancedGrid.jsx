import React from 'react';
import './DistancedGrid.css';
import mapImage from '../../Assets/Desktop/baneer-5.png';
// import mapIcon from './map-icon.png';

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

    <div className="text-block">
      <div className="headline">
        A landmark<br />
        destination for<br />
        elevated living
      </div>
      <div className="copy">
        Revet is where Pune’s future is unfolding. Tucked between the Pune-Mumbai
        Expressway and the Katraj-Dehu Bypass, this rapidly developing suburban
        neighborhood connects you to wherever you want to be without the usual
        hassles. It owes its incredible connectivity to the old and new Mumbai
        highways, the Pune Railway, and the Alandi Railway Station. Top schools,
        business hubs, entertainment enclaves, healthcare facilities and other
        essentials are all within close proximity. This isn’t just a convenient
        location, but a smart one.
      </div>
    </div>

    <div className="map-container">
      <img src={mapImage} alt="Map of location" className="map-image" />
    </div>

    <button className="direction-button">
      {/* <img src={mapIcon} alt="Map Icon" className="icon" /> */}
      CLICK HERE TO GET DIRECTIONS
    </button>
  </div>
);

export default DistancedGrid;