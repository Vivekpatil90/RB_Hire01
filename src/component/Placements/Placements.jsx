import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './Placements.css';

const Placements = () => {
  const partners = [
    { name: 'Amazon', logo: 'https://rb-hires.vercel.app/images/placement/p8.png' },
    { name: 'IBM', logo: 'https://rb-hires.vercel.app/images/placement/p4.png' },
    { name: 'Lockheed Martin', logo: 'https://rb-hires.vercel.app/images/placement/p5.png' },
    { name: 'Meta', logo: 'https://rb-hires.vercel.app/images/placement/p6.png' },
    { name: 'Caterpillar', logo: 'https://rb-hires.vercel.app/images/placement/p3.png' },
    { name: 'Lowe\s', logo: 'https://rb-hires.vercel.app/images/placement/p7.png' },
    {name: 'CVS', logo: 'https://rb-hires.vercel.app/images/placement/p10.png' },
    { name: 'Wells Fargo', logo: 'https://rb-hires.vercel.app/images/placement/p9.png' },
  ];

  return (
    <section className="placements-section">
      <div className="placements-header">
        <span className="sub-title">OUR PLACEMENTS</span>
        <h2 className="main-title">Our Candidates Are Placed With</h2>
        <p className="description">
          We proudly connect talented professionals with leading organizations across multiple industries.
        </p>
      </div>

      <div className="slider-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {partners.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="partner-card">
                <div className="logo-wrapper">
                  <img src={item.logo} alt={item.name} />
                </div>
                <p className="partner-name">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Placements;