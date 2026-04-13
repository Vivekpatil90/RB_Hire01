import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  { id: '01', title: 'Industry Expertise', desc: 'Years of experience across multiple industries helping businesses hire the right talent.' },
  { id: '02', title: 'Quality-Focused Hiring', desc: 'We focus on long-term value, not just quick placements.' },
  { id: '03', title: 'Tailored Recruitment', desc: 'Every hiring strategy is customized to your business goals and culture.' },
  { id: '04', title: 'Fast & Reliable Process', desc: 'Optimized recruitment workflows that save time and improve efficiency.' },
  { id: '05', title: 'Trusted Partnerships', desc: 'Built on transparency, integrity, and consistent delivery.' },
  { id: '06', title: 'End-to-End Support', desc: 'Complete hiring assistance from sourcing to onboarding.' },
];

const WhyChooseUs = () => {
  return (
    <section className="timeline-section">
      <div className="timeline-header">
        <span className="subtitle">Core Values</span>
        <h2>Why Choose Us</h2>
        <p>We deliver excellence through expertise, strategy, and trust.</p>
      </div>

      <div className="timeline-container">
        <div className="vertical-line"></div>
        
        {reasons.map((item, index) => (
          <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot">
              <span>{item.id}</span>
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;