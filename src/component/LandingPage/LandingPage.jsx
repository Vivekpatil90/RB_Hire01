import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import heroBg from "../../assets/HeroBg.png";
import herobgvid from "../../assets/HeroBG.mp4";
import { useEffect } from 'react';
const Hero = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
      const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
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
    <div className="hero-wrapper">
      <div className="cursor-dot"></div>
<div className="cursor-outline"></div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
  <div className="contact-item">
    <FaPhoneAlt className="icon" />
    <span>+1 5067090710</span>
  </div>

  <div className="contact-item">
    <FaEnvelope className="icon" />
    <span>info@rbhires.com</span>
  </div>
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
        {/* <button className="btn-apply">Apply Jobs</button> */}
        <Link to="/job" className="btn-apply">
          Apply Jobs
        </Link>
        <div className="call-icon"><FaPhoneAlt className="icon" /></div>
      </div>
    </header>

      {/* Hero Section */}
  <section className="hero-container">

  {/* ✅ Background Video */}
  <video autoPlay loop muted playsInline className="hero-video">
    <source src={herobgvid} type="video/mp4" />
  </video>

  {/* CONTENT */}
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
      ensuring <br />long-term success for both employers and job seekers.
    </p>

    <div className="cta-group">
      <Link to="/contact" className="btn-primary" onClick={scrollToTop}>Contact Us</Link>
      <Link to="/job" className="btn-secondary" onClick={scrollToTop}>Explore Jobs</Link>
    </div>
  </div>

</section>
    </div>
  );
};

export default Hero;