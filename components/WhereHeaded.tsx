import React from 'react';
import Link from 'next/link';

const cards = [
  {
    title: "Start My career",
    description: "Build the skills you need to enter the industry.",
    image: "/837d59fe1209d2af4573980f9efddbab8e0a5c73.jpg",
    alt: "Start My career"
  },
  {
    title: "Upskill",
    description: "Strengthen your skills and move forward in your career.",
    image: "/bccb7a5bed4711cf77c9016c6f01f95ee3625dff.jpg",
    alt: "Upskill"
  },
  {
    title: "Get Certified",
    description: "Earn industry-recognized certifications with confidence.",
    image: "/e09a328115fbf9f0822d6b801ff08a51b6fa7912.jpg",
    alt: "Get Certified"
  },
  {
    title: "Switch Careers",
    description: "Build the skills you need to enter the industry.",
    image: "/08d60015b421aee669af73a60a3e61ebe5877915.jpg",
    alt: "Switch Careers"
  }
];

export default function WhereHeaded() {
  return (
    <section
      className="w-full relative pb-20 pt-12 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/zb2.jpeg')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div
            className="border-[#bfb2ea] bg-[#eff8d8] inline-flex items-center justify-center text-[11px] font-medium text-black tracking-wide uppercase rounded-full shadow-sm whitespace-nowrap px-4 py-1.5 h-[33px] mb-4"
            style={{
              borderWidth: '1px',
            }}
          >
            FIND YOUR PATH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111]">
            Where are you <span className="text-[#6419e6]">Headed?</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover  transition-transform duration-300"
                />
              </div>
              <div className="px-2 pb-3 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow">
                  {card.description}
                </p>
                <Link href="#" className="text-sm font-semibold text-[#6419e6] flex items-center group/link mt-auto w-fit">
                  <span className="  decoration-[#6419e6] group-hover:underline underline-offset-[3px] decoration-[#6419e6]">Talk to our advisor</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1.5 group-hover/link:translate-x-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
