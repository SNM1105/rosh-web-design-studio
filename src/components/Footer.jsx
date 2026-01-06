import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Rosh<span className="logo-dot">.</span></h3>
          <p className="footer-tagline">web design studio</p>
          <p>Full-Stack Web Designer & Developer</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</a>
          <a onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</a>
          <a onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Portfolio</a>
          <a onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</a>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:simonmedalssy@gmail.com">Email</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Rosh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
