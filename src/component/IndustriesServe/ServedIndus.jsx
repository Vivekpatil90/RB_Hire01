import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './ServedIndus.css';

const industries = [
  { id: 1, title: 'Logistics', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400' },
  { id: 2, title: 'IT & Tech', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400' },
  { id: 3, title: 'Healthcare', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=400' },
  { id: 4, title: 'Manufacturing', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400' },
  { id: 5, title: 'Finance', img: 'https://rb-hires.vercel.app/images/industries/bank.jpg' },
  { id: 6, title: 'Education', img: 'https://rb-hires.vercel.app/images/industries/education.jpg' },
];

const IndustrySlider = () => {
  return (
    <div className="slider-section">
      <div className="slider-header">
        <span>Global Impact</span>
        <h2>Industries We Scale</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000, // Move after 1 second
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {industries.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="industry-card-modern">
              <div className="image-container">
                <img src={item.img} alt={item.title} />
                <div className="card-overlay">
                  <h3>{item.title}</h3>
                  <div className="glow-bar"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IndustrySlider;