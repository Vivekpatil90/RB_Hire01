import React from "react";
import { useParams, Link } from "react-router-dom";
import "./JobDetails.css";
import { useState } from "react";

const jobsData = [
  {
    title: "Frontend Developer",
    category: "IT",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Full Time",
    experience: "1-3 Years",
    description: "We are looking for a skilled Frontend Developer with React knowledge.",
    responsibilities: [
      "Build responsive UI",
      "Work with APIs",
      "Optimize performance"
    ],
    requirements: [
      "Strong React JS",
      "Good CSS skills",
      "Basic Git knowledge"
    ],
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
  },
  {
    title: "HR Executive",
    category: "HR",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Full Time",
    experience: "2-4 Years",
    description: "Manage hiring and employee relations.",
    responsibilities: [
      "Conduct interviews",
      "Manage employee records",
      "Handle onboarding"
    ],
    requirements: [
      "Communication skills",
      "HR tools knowledge",
      "Organizational skills"
    ],
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
  },
  {
    title: "Backend Developer",
    category: "IT",
    city: "Bangalore",
    state: "Karnataka",
    type: "Full Time",
    experience: "2-5 Years",
    description: "Develop scalable backend systems.",
    responsibilities: [
      "Build APIs",
      "Database management",
      "Server optimization"
    ],
    requirements: [
      "Node.js / Java",
      "Database knowledge",
      "API development"
    ],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    title: "Digital Marketing Executive",
    category: "Marketing",
    city: "Delhi",
    state: "Delhi",
    type: "Full Time",
    experience: "1-3 Years",
    description: "Handle digital campaigns and SEO.",
    responsibilities: [
      "Run ads",
      "SEO optimization",
      "Social media management"
    ],
    requirements: [
      "SEO knowledge",
      "Google Ads",
      "Analytics tools"
    ],
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  }
];

const JobDetails = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
        
          const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
          };
  const { id } = useParams();
  const job = jobsData[id];

  if (!job) return <h2>Job not found</h2>;

  // 🔥 Related Jobs (same category, excluding current)
  const relatedJobs = jobsData.filter(
    (item, index) => item.category === job.category && index !== Number(id)
  );

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
            {/* <button className="btn-apply">Apply Jobs</button> */}
            <Link to='/job' className="btn-apply">Apply Jobs</Link>
            <div className="call-icon">📞</div>
          </div>
        </header>

    <div className="job-details-page">

      {/* HERO */}
      <div className="job-hero">
        <img src={job.img} alt={job.title} />
        <div className="overlay">
          <h1>{job.title}</h1>
          <p>{job.city}, {job.state}</p>
        </div>
      </div>

      {/* DETAILS */}
      <div className="job-details">

        <div className="job-info">
          <p><strong>Category:</strong> {job.category}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
        </div>

        <div className="section">
          <h2>Job Description</h2>
          <p>{job.description}</p>
        </div>

        <div className="section">
          <h2>Responsibilities</h2>
          <ul>
            {job.responsibilities.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Requirements</h2>
          <ul>
            {job.requirements.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        <button className="apply-btn">Apply Now</button>

      </div>

      {/* RELATED JOBS */}
      <div className="related-section">
        <h2>Related Jobs</h2>

        <div className="related-grid">
          {relatedJobs.map((item, index) => (
            <Link to={`/job/${index}`} className="related-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.city}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
    </>
  );
};

export default JobDetails;