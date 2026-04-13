import React from 'react'
import { Link } from 'react-router-dom';
import "./Jobs.css";
import { useState } from "react";
const jobsData = [
  {
    title: "Frontend Developer",
    category: "IT",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Full Time",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
  },
  {
    title: "HR Executive",
    category: "HR",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Full Time",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
  },
  {
    title: "Backend Developer",
    category: "IT",
    city: "Bangalore",
    state: "Karnataka",
    type: "Full Time",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    title: "Digital Marketing Executive",
    category: "Marketing",
    city: "Delhi",
    state: "Delhi",
    type: "Full Time",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  }
];
const Jobs = () => {
         const [isMenuOpen, setIsMenuOpen] = useState(false);
        
          const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
          };
            const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? job.category === category : true) &&
      (city ? job.city === city : true) &&
      (state ? job.state === state : true)
    );
  });

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setCity("");
    setState("");
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
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/about" className='nav-link'>About</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/servicepart" className='nav-link'>Services</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/gallery" className='nav-link'>Gallery</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/refer-earn" className='nav-link'>Refer & Earn</Link></li>
        <li onClick={() => setIsMenuOpen(false)}><Link to="/contact" className='nav-link'>Contact Us</Link></li>
        
        {/* Mobile-only CTA (Optional, but looks good in sidebars) */}
        {/* <li className="mobile-cta">
          <button className="btn-apply">Apply Jobs</button>
        </li> */}
      </ul>

      <div className="header-actions hide-mobile">
        <button className="btn-apply">Apply Jobs</button>
        <div className="call-icon">📞</div>
      </div>
    </header>
      <section className="about-banner">
      {/* Dark Overlay to ensure text readability */}
      <div className="banner-overlay">
        <img src="https://rb-hires.vercel.app/images/home/about-sec.png" alt="" />
      </div>
      
      <div className="banner-content">
        <h3 className="banner-title">Jobs</h3>
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-item">
            <span className="home-icon">🏠</span> Home
          </a>
          <span className="separator">›</span>
          <span className="breadcrumb-item active">Jobs</span>
        </nav>
      </div>
    </section>


        <section className="jobs-section">
      <h2 className="jobs-title">Job Openings</h2>
      <p className="jobs-subtitle">
        Explore exciting career opportunities with us
      </p>

      {/* FILTERS */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">All Categories</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="">All Cities</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Mumbai">Mumbai</option>

        </select>

        <select onChange={(e) => setState(e.target.value)} value={state}>
          <option value="">All States</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>

        <button className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {/* JOB CARDS */}
      <div className="jobs-grid">
  {filteredJobs.map((job, index) => (
    <Link 
      to={`/job/${index}`}   // 🔥 dynamic route
      className="job-card"
      key={index}
    >
      <img src={job.img} alt={job.title} loading="lazy" />
      <div className="job-content">
        <h3>{job.title}</h3>
        <p>{job.city}, {job.state}</p>
        <span>{job.type}</span>
      </div>
    </Link>
  ))}

  {filteredJobs.length === 0 && (
    <p className="no-data">No jobs found</p>
  )}
</div>
    </section>
    </>
  )
}

export default Jobs