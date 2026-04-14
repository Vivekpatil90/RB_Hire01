import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ServiceDetail.css';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; 

const relatedServices = [
  {
    id: 5,
    title: 'Interview Preparation',
    desc: 'Build confidence and ace interviews with expert coaching sessions.',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 6,
    title: 'Salary Negotiation',
    desc: 'Strategic compensation coaching to help you secure the best offer.',
    img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 7,
    title: 'Onboarding Assistance',
    desc: 'Smooth onboarding support to help you settle into your new role.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600',
  },
];

const serviceDetails = {
  1: {
    title: 'Expert Advice',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    para1: 'Our expert advisors provide personalized career insights based on your skills, experience, and career goals to help you make informed decisions.',
    para2: 'We focus on understanding your strengths and aspirations, guiding you toward the right opportunities and long-term career success.',
    offerings: ['One-on-one expert consultation', 'Career clarity & direction', 'Industry-specific insights', 'Actionable career advice'],
  },
  2: {
    title: 'Resume Enhancement',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600',
    para1: 'Our resume specialists craft compelling, ATS-optimized resumes that highlight your unique value and open the doors to better opportunities.',
    para2: 'We tailor every resume to the role you are targeting, ensuring your skills and achievements are presented in the most impactful way.',
    offerings: ['ATS-optimized formatting', 'Achievement-focused content', 'Industry-specific keywords', 'Professional design & layout'],
  },
  3: {
    title: 'Profile Optimization',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    para1: 'We help you build a powerful online presence on LinkedIn and other platforms so recruiters and hiring managers can find and connect with you.',
    para2: 'Our optimization process covers your headline, summary, experience, and skills to ensure your profile ranks higher in search results.',
    offerings: ['LinkedIn headline & summary', 'Keyword-rich experience section', 'Skills & endorsements strategy', 'Profile visibility boosting'],
  },
  4: {
    title: 'Job Application Strategy',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600',
    para1: 'We create tailored job application plans aligned with your target roles, helping you approach your search with clarity and confidence.',
    para2: 'From company research to crafting personalized cover letters, we guide you through every step of a successful job application process.',
    offerings: ['Targeted company research', 'Custom cover letter guidance', 'Application tracking strategy', 'Follow-up best practices'],
  },
  5: {
    title: 'Interview Preparation',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
    para1: 'Our interview coaching helps you walk into every interview fully prepared, confident, and ready to showcase your best self to potential employers.',
    para2: 'We cover everything from behavioral questions and STAR method answers to industry-specific technical interviews and mock sessions.',
    offerings: ['Mock interview sessions', 'STAR method coaching', 'Technical interview prep', 'Body language & confidence'],
  },
  6: {
    title: 'Salary Negotiation',
    img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=600',
    para1: 'Our salary negotiation experts equip you with strategies, scripts, and confidence to negotiate compensation packages that reflect your true worth.',
    para2: 'We provide market data, negotiation frameworks, and personalized coaching to ensure you walk away with the best possible offer.',
    offerings: ['Market salary benchmarking', 'Negotiation scripts & tactics', 'Benefits & perks evaluation', 'Offer comparison analysis'],
  },
  7: {
    title: 'Onboarding Assistance',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600',
    para1: 'Our onboarding specialists help you transition smoothly into your new role, ensuring you hit the ground running from day one.',
    para2: 'We guide you through understanding company culture, building relationships, and setting goals so you can make a strong first impression.',
    offerings: ['First-90-days planning', 'Stakeholder mapping', 'Culture integration tips', 'Goal-setting frameworks'],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const detail = serviceDetails[Number(id)] || serviceDetails[1];
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
    
    <div className="top-bar">
            <div className="contact-info">
              <div className="contact-item"><FaPhoneAlt className='icon' /> +1 5067090710</div>
              <div className="contact-item"><FaEnvelope className='icon'  /> info@rbhires.com</div>
            </div>
            <div className="social-links">
              <span className='link'><FaLinkedin /></span>
              <span className='link'><FaInstagram /></span>
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
            <li onClick={() => setIsMenuOpen(false)}><Link to="/services">Services</Link></li>
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
            <div className="call-icon"><FaPhoneAlt /></div>
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
    <div className="sd-page">
      <button className="sd-back-btn" onClick={() => navigate(-1)}>&#8592;</button>

      <div className="sd-hero">
        <div className="sd-hero-text">
          <h2 className="sd-title">{detail.title}</h2>
          <p className="sd-para">{detail.para1}</p>
          <p className="sd-para">{detail.para2}</p>
          <button className="sd-contact-btn">Contact Us</button>
        </div>
        <div className="sd-hero-img-wrap">
          <img src={detail.img} alt={detail.title} className="sd-hero-img" />
        </div>
      </div>

      <div className="sd-offer-section">
        <h3 className="sd-offer-title">What We Offer</h3>
        <div className="sd-offer-grid">
          {detail.offerings.map((item, idx) => (
            <div key={idx} className="sd-offer-card">{item}</div>
          ))}
        </div>
      </div>

      <div className="sd-related-section">
        <h3 className="sd-related-title">Explore Related Services</h3>
        <div className="sd-related-grid">
          {relatedServices.map((s) => (
            <Link to={`/service/${s.id}`} key={s.id} className="sd-related-card">
              <img src={s.img} alt={s.title} className="sd-related-img" />
              <div className="sd-related-body">
                <h4 className="sd-related-name">{s.title}</h4>
                <p className="sd-related-desc">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceDetail;
