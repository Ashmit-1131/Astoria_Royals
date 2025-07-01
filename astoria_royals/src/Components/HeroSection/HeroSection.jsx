import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-headline">
            Where<br/>
            Prestige<br/>
            takes <br />
            residence
          </h1>
          <div className="hero-underline" />
        </div>
        <div className="hero-right">
       
          <p className="hero-copy">
            Royal living is reimagined as Astoria Royals, a<br/>
            luxurious project of spacious 4 & 3 BHK homes.<br/>
            Thoughtful layout and optimal use of space are<br/> 
            not the only defining attributes of this gem of a<br/>
            residence; it also boasts a massive array of<br/>
            amenities. Tucked in a fast‑developing location<br/>
            and constructed with precision in mind to<br/>
            bring to you a lifestyle that resonates with the<br/>
            name of the project itself.
          </p>
        </div>
      </div>
    </section>
  );
}
