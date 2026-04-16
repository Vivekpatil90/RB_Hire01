import React from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.css'
import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect } from 'react';

const ContactUs = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
        useEffect(() => {
        const dot = document.querySelector(".cursor-dot");        // small fast dot
        const outline = document.querySelector(".cursor-outline"); // big smooth circle
      
        let mouseX = 0;
        let mouseY = 0;
      
        let outlineX = 0;
        let outlineY = 0;
      
        const speed = 0.08; // lower = more delay (smoother)
      
        const animate = () => {
          // big circle follows slowly (lag effect)
          outlineX += (mouseX - outlineX) * speed;
          outlineY += (mouseY - outlineY) * speed;
      
          outline.style.left = outlineX + "px";
          outline.style.top = outlineY + "px";
      
          requestAnimationFrame(animate);
        };
      
        window.addEventListener("mousemove", (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
      
          // small dot sticks exactly to cursor
          dot.style.left = mouseX + "px";
          dot.style.top = mouseY + "px";
        });
      
        animate();
      
      }, []);
      useEffect(() => {
        const outline = document.querySelector(".cursor-outline");
      
        const hoverElements = document.querySelectorAll("a, button, .btn-primary, .btn-secondary");
      
        hoverElements.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            outline.style.transform = "translate(-50%, -50%) scale(1.8)";
            outline.style.background = "rgba(217, 119, 6, 0.1)";
          });
      
          el.addEventListener("mouseleave", () => {
            outline.style.transform = "translate(-50%, -50%) scale(1)";
            outline.style.background = "transparent";
          });
        });
      }, []);
  return (
    <>
       <div className="top-bar">
              <div className="cursor-dot"></div>
<div className="cursor-outline"></div>
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
        
        {/* Mobile-only CTA (Optional, but looks good in sidebars) */}
        {/* <li className="mobile-cta">
          <button className="btn-apply">Apply Jobs</button>
        </li> */}
      </ul>

      <div className="header-actions hide-mobile">
       <Link to="/job" className="btn-apply">
                 Apply Jobs
               </Link>
        <div className="call-icon">
          <FaPhoneAlt />
        </div>
      </div>
    </header>
      <section className="about-banner">
      {/* Dark Overlay to ensure text readability */}
      <div className="banner-overlay">
        <img src="https://rb-hires.vercel.app/images/home/about-sec.png" alt="" />
      </div>
      
      <div className="banner-content">
        <h1 className="banner-title">Conntact Us</h1>
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            <span className="home-icon">🏠</span> Home
          </a>
          <span className="separator">›</span>
          <span className="breadcrumb-item active">Contact Us</span>
        </nav>
      </div>
    </section>
     <section className="contact-section">
      <h2 className="contact-title">Get in Touch With Us</h2>
      <p className="contact-subtitle">
        Have questions or want to work with us? Reach out through any of the options below and our team will get back to you shortly.
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Contact Options</h3>

          <div className="contact-card">
            <span><FaPhoneAlt /></span>
            <div>
              <h4>Call Us</h4>
              <p>+1 5067090710</p>
            </div>
          </div>

          <div className="contact-card">
            <span><FaEnvelope /></span>
            <div>
              <h4>Email Us</h4>
              <p>info@rbhires.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span><FaMapMarkerAlt /></span>
            <div className='india'>
              <h4>India Location</h4>
              <p>T-22, Golden Square, Mehasana, India</p>
            </div>
          </div>

          <div className="contact-card">
            <span><FaMapMarkerAlt /></span>
            <div className='usa'>
              <h4>USA Location</h4>
              <p>Dover DE, 19901</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3>Send Us a Message</h3>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
    </>
  )
}

export default ContactUs