import React from 'react';
import './Process.css';

const steps = [
  { id: 1, title: 'Requirement Understanding', desc: 'Deep dive into your business needs and hiring goals.' },
  { id: 2, title: 'Talent Sourcing', desc: 'Sourcing high-quality candidates through trusted platforms.' },
  { id: 3, title: 'Client Interview', desc: 'Coordinated interviews with smooth communication.' },
  { id: 4, title: 'Final Selection', desc: 'Best-fit candidates selected based on skill and culture.' },
  { id: 5, title: 'Onboarding Support', desc: 'Assistance with smooth integration and post-placement.' },
  { id: 6, title: 'Background Check', desc: 'Rigorous verification for safe and secure hiring.' },
];

const WorkingProcess = () => {
  return (
    <section className="process-wrapper">
      <div className="process-header">
        <h2 className="glow-text">Our Working Process</h2>
        <p>A structured recruitment lifecycle built for results</p>
      </div>

      <div className="orbit-container">
        {/* Central Brand Core */}
        <div className="central-core">
          <div className="pulse-ring"></div>
          <div className="core-logo">
            <span><img src="https://rb-hires.vercel.app/images/logo/logo.png" alt="" /></span>
            {/* <span>RB HIRES</span><br />
            <small>EXPERTS</small> */}
          </div>
        </div>

        {/* Process Steps */}
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className={`process-node node-${step.id}`}>
              <div className="node-number">{step.id}</div>
              <div className="node-info">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Call to Action Footer */}

    </section>
  );
};

export default WorkingProcess;