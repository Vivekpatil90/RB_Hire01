import React from 'react';
import './Testimonials.css';
import { useEffect } from 'react';
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
    <section className="testimonials-section">
                <div className="cursor-dot"></div>
<div className="cursor-outline"></div>
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