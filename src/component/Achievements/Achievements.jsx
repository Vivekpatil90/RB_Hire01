import React, { useEffect, useState } from 'react';
import './Achievements.css';

const StatCard = ({ target, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="stat-card">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="container">
        <div className="achievements-header">
          <span className="accent-text">OUR MILESTONES</span>
          <h2>Numbers That Define Excellence</h2>
          <p>Global reach and proven impact across the recruitment landscape.</p>
        </div>

        <div className="stats-grid">
          <StatCard target={700} label="Successful Placements" />
          <StatCard target={500} label="Happy Clients" />
          <StatCard target={25} label="Industries Served" />
          <StatCard target={5} label="Years of Experience" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;