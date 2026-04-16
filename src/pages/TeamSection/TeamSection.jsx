import React from 'react';
import './MeetOurTeam.css'; // Importing our stylesheet
import { useEffect } from 'react';

// 1. Data for our team members (add your own images or replace)
const teamMembersData = [
  {
    id: 1,
    image: 'https://rb-hires.vercel.app/images/team/bhargav.jpeg', // Example Image
    name: 'Bhargav Solanki',
    role: 'Founder',
  },
  {
    id: 2,
    image: 'https://rb-hires.vercel.app/images/team/jimit.jpeg', // Example Image
    name: 'Jimit Parmar',
    role: 'Co - Founder',
  },
  {
    id: 3,
    image: 'https://rb-hires.vercel.app/images/team/rahul.jpeg', // Example Image
    name: 'Rahul Parmar',
    role: 'CEO',
  },
  {
    id: 4,
    image: 'https://rb-hires.vercel.app/images/team/parth.jpeg', // Example Image
    name: 'Parth Solanki',
    role: 'HR Manager',
  },
];

// 2. A reusable component for each member's card
const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-card animated-card">
      <div className="image-container">
        <img src={member.image} alt={`${member.name}, ${member.role}`} className="member-image" />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <div className="social-links">
          <a href="#" className="social-icon" aria-label={`LinkedIn for ${member.name}`}>
            {/* LinkedIn Icon (replace with an actual icon component like 'react-icons/fa') */}
            <svg viewBox="0 0 24 24" className="icon-svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.03 0 3.6 2 3.6 4.6v6.46z"/></svg>
          </a>
          <a href="#" className="social-icon" aria-label={`Email for ${member.name}`}>
            {/* Email Icon (replace with an actual icon component) */}
            <svg viewBox="0 0 24 24" className="icon-svg"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-12 1.287v11h24v-11l-12 9.713-12-9.713z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// 3. The main component for the entire team section
const MeetOurTeam = () => {
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
    <section className="our-team-section">
                <div className="cursor-dot"></div>
<div className="cursor-outline"></div>
      <div className="header-content">
        <p className="section-subtitle">OUR TEAM</p>
        <h2 className="section-title">Meet Our Experts</h2>
        <p className="section-description">
          A team of dedicated professionals committed to delivering excellence.
        </p>
      </div>
      
      <div className="team-grid">
        {teamMembersData.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;