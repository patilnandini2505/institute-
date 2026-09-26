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
    <section className="w-full bg-[#f4f2ff] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
        {/* Header */}
        <div className="mb-16">
          <div className="border border-[#cbbcf6] text-gray-700 text-[10px] md:text-[11px] font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 inline-block bg-transparent">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-black leading-tight tracking-tight">
            Don't Just Take Our Word For It.
          </h2>
        </div>

        {/* Slider Area */}
        <div className="relative h-[250px] md:h-[280px] w-full flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            // Calculate relative position based on 3 items looping
            let position = "hidden";
            let zIndex = 0;
            let transform = "";
            let opacity = "";
            let bgClass = "";
            
            if (index === activeIndex) {
              position = "center";
              zIndex = 20;
              transform = "translateX(0) scale(1)";
              opacity = "opacity-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)]";
              bgClass = "bg-white";
            } else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) {
              position = "left";
              zIndex = 10;
              transform = "translateX(-105%) scale(0.9)";
              opacity = "opacity-40";
              bgClass = "bg-white/80";
            } else if (index === (activeIndex + 1) % testimonials.length) {
              position = "right";
              zIndex = 10;
              transform = "translateX(105%) scale(0.9)";
              opacity = "opacity-40";
              bgClass = "bg-white/80";
            }

            return (
              <div
                key={testimonial.id}
                className={`absolute w-full max-w-[320px] md:max-w-[480px] h-[220px] md:h-[240px] transition-all duration-500 ease-in-out rounded-[20px] p-8 md:p-10 flex flex-col justify-between ${opacity} ${bgClass}`}
                style={{
                  transform,
                  zIndex,
                }}
              >
                <div>
                  {/* Quote Icon */}
                  <div className="text-2xl font-serif text-black mb-4 leading-none italic font-bold">“</div>
                  
                  {/* Text */}
                  <p className={`text-[15px] md:text-[17px] leading-relaxed font-semibold ${index === activeIndex ? 'text-black' : 'text-gray-700'}`}>
                    {testimonial.text}
                  </p>
                </div>
                
                <div>
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gray-100 mb-5"></div>
                  
                  {/* Author */}
                  <p className="text-sm md:text-[15px] text-gray-500 font-medium">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#7C3AED] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#7C3AED] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
