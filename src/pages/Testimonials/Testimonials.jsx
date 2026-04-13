import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    text: "The recruitment process was smooth and transparent. We received quality candidates perfectly aligned with our expectations.",
    author: "Anita Verma",
  },
  {
    id: 2,
    text: "Highly reliable recruitment partner. Their structured approach and dedication make them stand out.",
    author: "Amit Patel",
  },
  {
    id: 3,
    text: "Exceptional service and quick turnaround time. Truly a professional hiring consultancy.",
    author: "Sneha Kulkarni",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="subtitle">TESTIMONIALS</span>
        <h2 className="title">What Our Clients Say</h2>
        <p className="description">
          Hear from organizations who trust us to deliver exceptional talent.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonialsData.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="quote-content">
              <p>“{item.text}”</p>
            </div>
            <div className="card-footer">
              <h4 className="author-name">{item.author}</h4>
              <span className="quote-icon">❞</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;