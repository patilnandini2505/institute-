"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 0,
    text: "A great place to learn and grow. The practical knowledge was the best part.",
    author: "Rahul Verma"
  },
  {
    id: 1,
    text: "The training was simple, practical, and well-structured. Definitely a great experience.",
    author: "Ananya Singh"
  },
  {
    id: 2,
    text: "I gained practical knowledge and confidence that I can apply in my career.",
    author: "Sneha Patel"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      // Use the functional state update to ensure it always gets the latest state without closure issues
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#f4f2ff] py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <div 
            className="border-[#bfb2ea] bg-[#eff8d8] inline-flex items-center justify-center text-[11px] font-medium text-black tracking-wide uppercase rounded-full shadow-sm whitespace-nowrap px-4 py-1.5 h-[33px] mb-6"
            style={{ borderWidth: '1px' }}
          >
            TESTIMONIALS
          </div>
          <h2 
            className="text-black text-3xl md:text-[36px] leading-tight"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              letterSpacing: '0%',
            }}
          >
            <span className="block sm:inline">Don't Just Take </span>
            <span className="block sm:inline">Our Word For It.</span>
          </h2>
        </div>

        {/* Slider Area - Clipped to the container margin to align with navbar SVG */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="relative h-[220px] md:h-[240px] w-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              let zIndex = 0;
              let transform = "translateX(0) scale(0.85)";
              let opacity = "opacity-0 pointer-events-none";
              let bgClass = "bg-white/80";
              let isCenter = false;

              if (index === activeIndex) {
                zIndex = 20;
                transform = "translateX(0) scale(1)";
                opacity = "opacity-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)]";
                bgClass = "bg-white";
                isCenter = true;
              } else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) {
                zIndex = 10;
                transform = "translateX(calc(-100% - 20px)) scale(0.9)";
                opacity = "opacity-40";
                bgClass = "bg-white/80";
              } else if (index === (activeIndex + 1) % testimonials.length) {
                zIndex = 10;
                transform = "translateX(calc(100% + 20px)) scale(0.9)";
                opacity = "opacity-40";
                bgClass = "bg-white/80";
              }

              return (
                <div
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] h-[190px] md:h-[210px] transition-all duration-500 ease-in-out rounded-[20px] p-6 md:p-8 flex flex-col justify-between cursor-pointer ${opacity} ${bgClass}`}
                  style={{
                    transform,
                    zIndex,
                  }}
                >
                  <div>
                    {/* Quote Icon */}
                    <div className="text-2xl font-serif text-black mb-3 leading-none italic font-bold">“</div>
                    
                    {/* Text */}
                    <p className={`text-[14px] md:text-[16px] leading-relaxed font-semibold ${isCenter ? 'text-black' : 'text-gray-700'}`}>
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div>
                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gray-100 mb-3"></div>
                    
                    {/* Author */}
                    <p className={`text-sm font-medium ${isCenter ? 'text-gray-600' : 'text-gray-400'}`}>
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-3.5 mt-6 md:mt-8">
          <button 
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-[#7C3AED] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-[#7C3AED] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
