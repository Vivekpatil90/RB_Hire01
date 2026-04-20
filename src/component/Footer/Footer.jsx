import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterPart = () => {
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">          
          <div className="hero-text">
            <h1>Ready to Build Your Dream Career?</h1>
            <p>Partner with us to find the right talent faster and more efficiently. Let's build success together.</p>
            <div className="hero-btns">
<Link className="btn-primary" to="/contact" onClick={scrollToTop}>
  Contact Us
</Link>

<Link className="btn-outline" to="/job" onClick={scrollToTop}>
  View Open Position
</Link>
            </div>
          </div>

          <div className="hero-image-right">
            <img src="https://i.pinimg.com/originals/fb/bf/41/fbbf4106da9e154bda767abd4a8fa434.jpg" alt="Career Professional" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span className="logo-icon"></span>
              {/* <h2>RB HIRES<span> CONSULTING</span></h2>               */}
              <img src="https://rb-hires.vercel.app/images/logo/logo.png" alt="" />
            </div>
            <p>RB Hires is a professional recruitment and consulting firm helping organizations hire the right talent and build successful teams.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
     <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
<li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
<li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
<li><Link to="/job" onClick={scrollToTop}>Jobs</Link></li>
<li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* Job Roles */}
          <div className="footer-col">
            <h3>Job Roles</h3>
            <ul>
              <li><Link to='/' onClick={scrollToTop}>IT & Software</Link></li>
              <li><Link to='/about' onClick={scrollToTop}>Sales & Marketing</Link></li>
              <li><Link to='/servicepart' onClick={scrollToTop}>Human Resources</Link></li>
              <li><Link to='/job' onClick={scrollToTop}>Finance & Accounts</Link></li>
              <li><Link to='/contact' onClick={scrollToTop}>Operations</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <i className="icon-map"><FaMapMarkerAlt className="icon" /></i>
              <p>T-22, Golden Square, Radhanpur Road, Mehasana, India, 384002.</p>
            </div>
            <div className="contact-item">
              <i className="icon-phone"><FaPhoneAlt className="icon" /></i>
              <p>+1 5067090710</p>
            </div>
            <div className="contact-item">
              <i className="icon-mail"><FaEnvelope className="icon" /></i>
              <p>info@rbhires.com</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebookF className="icon" /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaTwitter className="icon" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPart;