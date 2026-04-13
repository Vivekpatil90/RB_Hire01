import React from 'react'
import { Link } from 'react-router-dom' 
import './refer.css'
import { useState } from 'react'

const Refer = () => {
       const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <>
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
        <Link to="/job" className="btn-apply">
                  Apply Jobs
                </Link>
        <div className="call-icon">📞</div>
      </div>
    </header>
     <section className="about-banner">
  {/* Background Image */}
  <div className="banner-overlay">
    <img
      src="https://rb-hires.vercel.app/images/home/about-sec.png"
      alt="Refer Banner"
    />
  </div>

  {/* Content */}
  <div className="banner-content">
    <h1 className="banner-title">Refer & Earn</h1>

    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-item">
        <span className="home-icon">🏠</span> Home
      </Link>
      <span className="separator">›</span>
      <span className="breadcrumb-item active">Refer & Earn</span>
    </nav>
  </div>
</section>
     <section className="refer-section">
      <h2 className="refer-title">
        Refer & <span>Earn</span>
      </h2>

      <div className="steps-container">

        {/* Step 1 */}
        <div className="step-card">
          <h3>Step 1 Refer Us</h3>
          <p>Share the details of a person who is looking for a job.</p>
          <button className="primary-btn">Share Details</button>
        </div>

        {/* Step 2 */}
        <div className="step-card">
          <h3>Step 2 Empower Them</h3>
          <p>Help the candidate enroll with our career services.</p>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <h3>Step 3 Get Bonus</h3>
          <p>Earn referral bonus when the candidate enrolls successfully.</p>
          <button className="primary-btn">Join Referral Program</button>
          <span className="terms">*Terms & Conditions Apply</span>
        </div>

      </div>
    </section>
    </>
  )
}

export default Refer