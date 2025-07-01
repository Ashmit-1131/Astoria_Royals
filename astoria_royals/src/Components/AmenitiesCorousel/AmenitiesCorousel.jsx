import React from 'react';
import './AmenitiesCorousel.css';

import side1 from '../../Assets/Desktop/banner-2.png';
import pool from '../../Assets/Desktop/baneer-4.png';
import side2 from '../../Assets/Desktop/banner-3.png';

const AmenitiesCarousel = () => (
  <section className="amenities-section">
    <h2 className="video-title">Walkthrough</h2>
    <div className="video-container">
      
    
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/2SSSsH270TM&t=4s"
          title="Walkthrough Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>

     <section className="amenity-section">
      <div className="amenity-content">
        <div className="amenity-left">
          <h1 className="amenity-headline">
             A stellar<br />
        lineup<br />
        of luxuries
          </h1>
          <div className="amenity-underline" />
        </div>
        <div className="amenity-right">
          <h1 className="amentiy-headline hero-headline--invisible">
            residence
          </h1>
          <p className="amenity-copy">
             Luxury isn't a label at Astoria Royals, it is a <br />
         full-blown experience. From indulgent <br />
        leisure spaces and wellness facilities to <br />
         top-tier entertainment, every amenity is <br />
        designed to surpass expectations. Whatever you desire, chances are, it’s <br />
         already waiting for you.
          </p>
        </div>
      </div>
    </section>

    <div className="carousel">
      <div className="carousel-item side">
        <img src={side1} alt="Garden Lounge" />
        <div className="caption">Garden Lounge</div>
      </div>
      <div className="carousel-item center">
        <img src={pool} alt="Swimming Pool" />
        <div className="caption">Swimming Pool</div>
      </div>
      <div className="carousel-item side">
        <img src={side2} alt="Terrace View" />
        <div className="caption">Terrace View</div>
      </div>
    </div>
  </section>
);

export default AmenitiesCarousel;