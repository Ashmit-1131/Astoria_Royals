import React from "react";
import "./Header.css";
import logoAstoria from "../../Assets/logo/C-1226-Astoria-Royals-Landing-Page-v2.png";

const Header = () => (
  <header className="hero-header">
 
    <div className="hero-nav">
      <div className="hero-nav__left">
        <img src={logoAstoria} alt="Astoria Royals" className="hero-logo" />
      </div>
      <div className="hero-nav__right">
        <button className="btn-visit">SCHEDULE A SITE VISIT</button>
        <button className="btn-menu" aria-label="Open menu">
          ☰
        </button>
      </div>
    </div>

  </header>
);

export default Header;
