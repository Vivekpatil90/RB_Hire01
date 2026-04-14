import React, { useEffect, useRef, useState } from "react";
import "./Achievements.css";

const statsData = [
  { number: 700, suffix: "+", label: "Successful Placements" },
  { number: 500, suffix: "+", label: "Happy Clients" },
  { number: 25, suffix: "+", label: "Industries Served" },
  { number: 5, suffix: "+", label: "Years of Experience" },
];

const Achievements = () => {
  const cardsRef = useRef([]);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);

            entry.target.classList.add("show");

            // 🔥 Start counting animation
            startCounting(index);

            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const startCounting = (index) => {
    let start = 0;
    const end = statsData[index].number;
    const duration = 1500;
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;

      if (start >= end) {
        start = end;
        clearInterval(counter);
      }

      setCounts((prev) => {
        const updated = [...prev];
        updated[index] = start;
        return updated;
      });
    }, incrementTime);
  };

  return (
    <section className="achievements-section">
      {/* Header */}
      <div className="achievements-header">
        <span className="accent-text">OUR ACHIEVEMENTS</span>
        <h2>We Deliver Results That Matter</h2>
        <p>
          Our track record speaks for itself — helping businesses grow and
          candidates find the right opportunities.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {statsData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`stat-card ${
              index % 2 === 0 ? "from-left" : "from-right"
            }`}
          >
            <h3 className="stat-number">
              {counts[index]}
              {item.suffix}
            </h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;