import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const FooterPart = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* <div className="hero-image-left">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" alt="Recruiter" />
            <div className="badge">FIND JOBS HERE</div>
          </div> */}
          
          <div className="hero-text">
            <h1>Ready to Build Your Dream Career?</h1>
            <p>Partner with us to find the right talent faster and more efficiently. Let's build success together.</p>
            <div className="hero-btns">
              <Link  className="btn-primary" to='/contact'>Contact Us</Link>
              
              <Link className='btn-outline' to='/job'>View Open Position</Link>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/job">Jobs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Job Roles */}
          <div className="footer-col">
            <h3>Job Roles</h3>
            <ul>
              <li><Link to='/'>IT & Software</Link></li>
              <li><Link to='/about'>Sales & Marketing</Link></li>
              <li><Link to='/services'>Human Resources</Link></li>
              <li><Link to='/job'>Finance & Accounts</Link></li>
              <li><Link to='/contact'>Operations</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col contact-col">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <i className="icon-map">📍</i>
              <p>T-22, Golden Square, Radhanpur Road, Mehasana, India, 384002.</p>
            </div>
            <div className="contact-item">
              <i className="icon-phone">📞</i>
              <p>+1 5067090710</p>
            </div>
            <div className="contact-item">
              <i className="icon-mail">📧</i>
              <p>info@rbhires.com</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">ig</a>
              <a href="#" className="social-icon">t</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPart;