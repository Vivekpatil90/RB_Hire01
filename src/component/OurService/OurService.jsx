import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurService.css';

const services = [
  { id: 1, title: 'Expert Advice', desc: 'Professional guidance for your career path.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Resume Enhancement', desc: 'Crafting resumes that beat the ATS.', img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Profile Optimization', desc: 'Stand out on LinkedIn and beyond.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Job Application Strategy', desc: 'Tailored plans to land your dream role.', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Interview Preparation', desc: 'Master the art of the interview.', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Salary Negotiation', desc: 'Get the compensation you deserve.', img: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=600' },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

  return (
    <>

    <div className="services-container">
      <div className="header">
        <h2>Our Services</h2>
        <p>Strategic recruitment &amp; consulting solutions</p>
      </div>

      <div className="gallery">
        {services.map((service) => (
          <Link
            to={`/service/${service.id}`}
            key={service.id}
            className={`card ${hoveredId === service.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${service.img})`,
              textDecoration: 'none',
            }}
          >
            <div className="card-content">
              <h3>{service.title}</h3>
              {hoveredId === service.id && (
                     <p className="fade-in">{service.desc}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;
