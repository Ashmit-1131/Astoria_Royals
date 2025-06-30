import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-headline">
            Where
            <br/>
            Prestige
            <br />
            takes 
             residence
          </h1>
          <div className="hero-underline" />
          <p className="hero-copy">
            Royal living is reimagined as Astoria Royals, a luxurious project of spacious 4 &amp; 3 BHK homes.
            Thoughtful layout and optimal use of space are not the only defining attributes of this gem of a
            residence; it also boasts a massive array of amenities. Tucked in a fast‑developing location and
            constructed with precision in mind to bring to you a lifestyle that resonates with the name of the project itself.
          </p>
        </div>
        <div className="hero-right">
          {/* If you had an image to show, you’d place it here. */}
        </div>
      </div>
    </section>
  );
}
