
import React from 'react';
import './Footer.css';
import nirmanLogo from '../../Assets/logo/C-1226-Astoria-Royals-Landing-Page-v2.png';
import qr1 from '../../Assets/logo/rera.png';

import FaInstagram from "../../Assets/icons/1.png"
import FaYoutube from "../../Assets/icons/2.png" 
import FaFacebookF from "../../Assets/icons/3.png"
import FaLinkedinIn from "../../Assets/icons/4.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section logo-section">
    
          <p className="project-by">PROJECT BY</p>
          <img src={nirmanLogo} alt="Nirman Greens" className="nirman-logo" />
        </div>

        <div className="footer-section address-section">
          <p><strong>SITE ADDRESS</strong><br />
            Astoria Royals, Aundh-Ravet BRTS Road, Ravet, Pimpri-Chinchwad,<br />
            Maharashtra - 412101</p>
          <br />
          <p><strong>CORPORATE OFFICE</strong><br />
            Amar Business Zone, B Wing, Office No. 902 S. No. 87/1A & 87 (Part),<br />
            Baner, Pune - 411045</p>
        </div>

        <div className="footer-section contact-section">
          <div className="phone">
            {/* <FaPhoneAlt className="icon" /> */}
            <span>00000 00000</span>
          </div>
          <div className="qrs">
            <img src={qr1} alt="QR Code 1" className="qr" />
      
          </div>
      <div className="socials">
  <img src={FaYoutube} alt="YouTube" className="social-icon" />
  <img src={FaInstagram} alt="Instagram" className="social-icon" />
  <img src={FaFacebookF} alt="Facebook" className="social-icon" />
  <img src={FaLinkedinIn} alt="LinkedIn" className="social-icon" />
</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


