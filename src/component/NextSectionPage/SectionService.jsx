import React, { useEffect, useRef, useState } from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section enters the viewport, trigger the animation
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        
        {/* Left Side: Image with background decorative box */}
        <div className={`about-image-wrapper ${isVisible ? 'fade-in-left' : ''}`}>
          <div className="bg-deco-box"></div>
          <div className="image-card-main">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
              alt="Team Meeting" 
            />
          </div>
        </div>

        {/* Right Side: Content sliding from right */}
        <div className={`about-content ${isVisible ? 'slide-in-right' : ''}`}>
          <span className="subtitle">ABOUT RB HIRES</span>
          <h2>Trusted Recruitment & Career Consulting Partner</h2>
          
          <p className="description">
            RB Hires Consulting is a professional recruitment and consultancy firm dedicated 
            to connecting skilled talent with the right opportunities. We help businesses hire 
            smarter and candidates build successful careers across multiple industries.
          </p>
          
          <p className="sub-description">
            Our approach focuses on understanding people, roles, and company culture — 
            ensuring long-term success for both employers and job seekers.
          </p>

          <div className="about-cta">

            <Link to="/contact" onClick={scrollToTop} className="btn-contact">Contact Us</Link>
            <Link to="/job" onClick={scrollToTop} className="btn-explore">Explore Jobs</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;