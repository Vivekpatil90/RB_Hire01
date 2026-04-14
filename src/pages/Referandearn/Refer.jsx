import React from 'react'
import { Link } from 'react-router-dom' 
import './refer.css'
import { useState } from 'react'
import { useRef} from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Refer = () => {
       const [isMenuOpen, setIsMenuOpen] = useState(false);
       const [showForm, setShowForm] = useState(false);
      const formRef = useRef(null);
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const scrollToForm = () => {
  setShowForm(true); // 👈 show form first

  setTimeout(() => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100); // slight delay to render
};
  return (
    <>
        <div className="top-bar">
        <div className="contact-info">
          <div className="contact-item"><FaPhoneAlt className="icon" /> +1 5067090710</div>
          <div className="contact-item"><FaEnvelope className="icon" /> info@rbhires.com</div>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
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
      </ul>

      <div className="header-actions hide-mobile">
        <Link to="/job" className="btn-apply">
                  Apply Jobs
                </Link>
        <div className="call-icon"><FaPhoneAlt /></div>
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
     <button className="primary-btn" onClick={scrollToForm}>
  Share Details
</button>
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
  <button className="primary-btn" onClick={scrollToForm}>
  Join Referral Program
</button>
          <span className="terms">*Terms & Conditions Apply</span>
        </div>

      </div>
    </section>
    {showForm && (
    <section className="referral-form-section" ref={formRef}>
        <div className="form-container">

          {/* LEFT */}
          <div className="form-left">
            <h2>
              Join Our <span>Referral Program</span>
            </h2>
            <p>Refer candidates and earn rewards.</p>

            <img
              src="https://rb-hires.vercel.app/images/home/refer.webp"
              alt=""
            />
          </div>

          {/* RIGHT */}
          <div className="form-right">
            <h3>Referral Details</h3>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Your Phone" />

            <input type="text" placeholder="Referral Name" />
            <input type="email" placeholder="Referral Email" />
            <input type="text" placeholder="Referral Phone" />

            <button className="submit-btn">Submit Referral</button>
          </div>

        </div>
      </section>
      )}
    </>
  )
}

export default Refer