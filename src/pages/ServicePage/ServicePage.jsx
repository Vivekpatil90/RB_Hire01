import React from 'react'
import './ServicesHero.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const services = [
  {
    title: "Expert Advice",
    desc: "Personalized expert advice to help you make confident career decisions.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296"
  },
  {
    title: "Resume Enhancement",
    desc: "Professionally crafted resumes that highlight your skills.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
  },
  {
    title: "Profile Optimization",
    desc: "Optimize your professional profiles to attract recruiters.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    title: "Job Application Strategy",
    desc: "A roadmap to apply smarter and increase interview calls.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Interview Preparation",
    desc: "Build confidence and ace interviews with expert coaching.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902"
  },
  {
    title: "Salary Negotiation",
    desc: "Strategic coaching to help you secure the best offer.",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
  },
  {
    title: "Onboarding Assistance",
    desc: "Smooth onboarding support to help you settle into your role.",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521"
  },
  {
    title: "Job Support",
    desc: "Ongoing job support to help you succeed in your career.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  }
];

const ServicePage = () => {
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
      {/* Dark Overlay to ensure text readability */}
      <div className="banner-overlay">
        <img src="https://rb-hires.vercel.app/images/home/about-sec.png" alt="" />
      </div>
      
      <div className="banner-content">
        <h1 className="banner-title">Service</h1>
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            <span className="home-icon">🏠</span> Home
          </a>
          <span className="separator">›</span>
          <span className="breadcrumb-item active">Service</span>
        </nav>
      </div>
    </section>
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Explore our professional recruitment and consulting services.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-wrapper">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="card-content">
              <h3 className='service-heading'>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      </>
  )
}

export default ServicePage