import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className="hero-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <div className="contact-item">📞 +1 5067090710</div>
          <div className="contact-item">✉️ info@rbhires.com</div>
        </div>
        <div className="social-links">
          <span>LinkedIn</span>
          <span>Instagram</span>
        </div>
      </div>

      {/* Navbar */}
 <header className="main-header">
      <div className="logo-section">
        <div className="logo-text">
          <img src="https://rb-hires.vercel.app/images/logo/logo.png" alt="RB Hires Logo" />
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links - We toggle the 'active' class based on state */}
      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li className="active" onClick={() => setIsMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/about">About</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/servicepart">Services</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/gallery">Gallery</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/refer-earn">Refer & Earn</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/contact">Contact Us</Link></li>
        
        {/* Mobile-only CTA (Optional, but looks good in sidebars) */}
        {/* <li className="mobile-cta">
          <button className="btn-apply">Apply Jobs</button>
        </li> */}
      </ul>

      <div className="header-actions hide-mobile">
        {/* <button className="btn-apply">Apply Jobs</button> */}
        <Link to="/job" className="btn-apply">
          Apply Jobs
        </Link>
        <div className="call-icon">📞</div>
      </div>
    </header>

      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-left">
          <h1>
            Connecting <span className="highlight">Talent</span><br />
            with the <span className="highlight">Right Opportunities</span>
          </h1>
          <p className="hero-description">
            RB Hires Consulting helps job seekers find meaningful careers and enables 
            companies to hire skilled professionals across multiple industries with confidence.
          </p>
          <p className="hero-sub-description">
            Our approach focuses on understanding people, roles, and company culture — 
            ensuring long-term success for both employers and job seekers.
          </p>
          <div className="cta-group">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/job" className="btn-secondary">Explore Jobs</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-card">
            {/* Using a placeholder professional image */}
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
              alt="Professional Career" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;