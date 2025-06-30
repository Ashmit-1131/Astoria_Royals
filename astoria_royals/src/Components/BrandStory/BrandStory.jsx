// BrandStory.jsx
import React, { useState } from 'react';
import './BrandStory.css';
import nirmanLogo from '../../Assets/logo/C-1226-Astoria-Royals-Landing-Page-v2.png';

const accordionData = [
  {
    title: 'CONNECTIVITY',
    content: [
      ['Mumbai-Pune Expressway', '05 Mins.'],
      ['Hinjawadi connectivity', '20 Mins.'],
      ['Balewadi High Street', '30 Mins.'],
    ],
  },
  {
    title: 'LEISURE',
    content: [
      ['Multiplex & Cafes', '15 Mins.'],
      ['Amusement Park', '25 Mins.'],
    ],
  },
  {
    title: 'SHOPPING/ MALLS',
    content: [
      ['Phoenix Marketcity', '35 Mins.'],
      ['Seasons Mall', '30 Mins.'],
    ],
  },
  {
    title: 'EDUCATIONAL INSTITUTES',
    content: [
      ['Symbiosis University', '20 Mins.'],
      ["Bishop's School", '18 Mins.'],
    ],
  },
  {
    title: 'HEALTHCARE',
    content: [
      ['Ruby Hall Clinic', '15 Mins.'],
      ['Jehangir Hospital', '20 Mins.'],
    ],
  },
];

const BrandStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="brand-story">
      <div className="top-section">
        <div className="headline">
          <span>From the </span>
          <span className="highlight">trusted</span>
          <span className="line" />
        </div>
        <div className="brand-details">
          <img src={nirmanLogo} alt="Nirman Greens Logo" className="brand-logo" />
          <p className="brand-description">
            Nirman Greens is a dynamic force in Pune's real estate sector with 30+ years of expertise.
            With 15 million square feet delivered and even more in the pipeline, every project they
            undertake is a testament to masterful craftsmanship and a relentless pursuit for excellence.
            Driven by innovation and an eye for detail, they remain steadfast in their commitment to
            conceiving spaces that adapt to nature and evolve with time.
          </p>
        </div>
      </div>

      <h2 className="accordion-title">Key Distances</h2>

      <div className="accordion">
        {accordionData.map((section, index) => (
          <div key={index} className="accordion-section">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              {section.title}
              <span className="accordion-icon">{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && section.content.length > 0 && (
              <div className="accordion-content">
                {section.content.map(([place, time], i) => (
                  <div className="accordion-row" key={i}>
                    <span>{place}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandStory;
