{/* <div class="absolute inset-0 bg-cover bg-center" style="background-image: url(&quot;/images/logo/breadcrumb-bg.png&quot;);"></div> */}
import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import './AboutPage.css'
import Achievements from '../../component/Achievements/Achievements'
import OurService from '../../component/OurService/OurService'
import WhyChooseUs from '../../component/WhyChooseUs/WhyChooseUs'
import MeetOurTeam from '../TeamSection/TeamSection'    
import IndustrySlider from '../../component/IndustriesServe/ServedIndus'
import Placements from '../../component/Placements/Placements'
import Testimonials from '../Testimonials/Testimonials'
import WorkingProcess from '../../component/Process/Process'
import { useState } from 'react'
import { useEffect } from 'react'
const AboutPage = () => {
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
        <div className="call-icon"><FaPhoneAlt className="icon" /></div>
      </div>
    </header>
      <section className="about-banner">
      {/* Dark Overlay to ensure text readability */}
      <div className="banner-overlay">
        <img src="https://rb-hires.vercel.app/images/home/about-sec.png" alt="" />
      </div>
      
      <div className="banner-content">
        <h1 className="banner-title">About</h1>
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            <span className="home-icon">🏠</span> Home
          </a>
          <span className="separator">›</span>
          <span className="breadcrumb-item active">About</span>
        </nav>
      </div>
    </section>
    <section className="about-content-section">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Side: Image with Decorative Box */}
          <div className="about-image-container">
            <div className="image-deco-bg"></div>
            <img 
              src="https://rb-hires.vercel.app/images/home/about-sec.png" 
              alt="Team Collaboration" 
              className="about-main-img"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="about-text-block">
            <span className="section-tag">ABOUT RB HIRES</span>
            <h2 className="section-title">
              Trusted Recruitment & <br /> 
              <span>Career Consulting Partner</span>
            </h2>
            <p className="description">
              RB Hires Consulting is a professional recruitment and consultancy firm dedicated to connecting skilled talent with the right opportunities. We help businesses hire smarter and candidates build successful careers across multiple industries.
            </p>
            <p className="description secondary">
              Our approach focuses on understanding people, roles, and company culture — ensuring long-term success for both employers and job seekers.
            </p>
            
            <div className="about-btns">
               <Link to='/contact' onClick={scrollToTop} className='btn-gold'>Contact Us</Link>
              {/* <button className="btn-outline-gold">Explore Jobs</button> */}
              <Link to='/job' onClick={scrollToTop} className='btn-outline-gold'>Explore Jobs</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="mission-vision-section">
      <div className="mv-header">
        <span className="mv-subtitle">OUR PURPOSE</span>
        <h2 className="mv-title">Mission & Vision</h2>
        <p className="mv-desc">
          Guiding principles that define our values, goals, and commitment to excellence.
        </p>
      </div>

      <div className="mv-grid">
        {/* Mission Card */}
        <div className="mv-card">
          <span className="card-badge">Our Mission</span>
          <h3>Empowering Careers & Businesses</h3>
          <p>
            Our mission is to connect talented professionals with forward-thinking 
            organizations through ethical recruitment practices and personalized 
            hiring strategies.
          </p>
        </div>

        {/* Vision Card */}
        <div className="mv-card">
          <span className="card-badge">Our Vision</span>
          <h3>Shaping the Future of Talent</h3>
          <p>
            To become a trusted global recruitment partner known for innovation, 
            integrity, and long-term value creation for businesses and professionals.
          </p>
        </div>
      </div>
    </section>
    <div className='OurService'>
        <OurService/>
    </div>
    <div className='Achievements'>
        <Achievements/>
    </div>
    <div className="WhychooseUs">
        <WhyChooseUs/>
    </div>
    <div className='MeetOurTeam'>
        <MeetOurTeam/>
    </div>
    <div className="placementes">
        <Placements/>
    </div>
    <div className='Testinomials'>
        <Testimonials/>
    </div>
    <div className='Process'>
        <WorkingProcess/>
    </div>


    </>
  )
}

export default AboutPage