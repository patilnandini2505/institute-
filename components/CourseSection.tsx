import React from 'react';
import Link from 'next/link';

export default function CourseSection() {
  return (
    <section className="w-full bg-[#f4f2ff] pb-[80px]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12">

        {/* Purple Container */}
        <div
          className="rounded-[24px] p-6 md:p-10 w-full shadow-sm bg-no-repeat bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/WhatsApp%20Image%202026-10-01%20at%2010.51.36%20AM.jpeg')",
          }}
        >

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pl-0 md:pl-4">
            <div>
              <div
                className="border border-white inline-flex items-center justify-center text-[11px] font-medium text-white tracking-wide uppercase rounded-full whitespace-nowrap px-4 py-1.5 h-[33px] mb-4"
              >
                RECOMMENDED FOR YOU
              </div>
              <h2 
                className="text-3xl md:text-[36px] font-bold text-white leading-tight max-w-[600px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Find The Skills That Move Your Career Forward
              </h2>
            </div>

            <button className="mt-6 md:mt-0 px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 btn-white-to-purple">
              <span>Explore all Courses</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* 3 Cards Container */}
          <div className="bg-[#fbfaf8] rounded-[24px] p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 shadow-inner">

            {/* Card 1 */}
            <div className="bg-white rounded-[16px] p-4 flex flex-col shadow-sm border border-gray-50 group">
              <div className="rounded-[16px] overflow-hidden aspect-[4/3] mb-5">
                <img src="/24f3cd1739b6a935fd0cb906008a8c87895909bb.jpg" alt="Python Full Stack" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">Python Full Stack Developm..</h3>

              <div className="flex flex-wrap gap-2 mb-6 px-1">
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">Python</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">Django</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">SQL</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">+more..</span>
              </div>

              <div className="text-[12px] text-gray-500 mb-2 font-medium px-1">
                Next Batch Starts <span className="text-[#6C5CE7] font-semibold ml-1">28 September 2026</span>
              </div>
              <div className="text-[12px] text-gray-500 mb-6 font-medium px-1">
                Duration <span className="text-[#6C5CE7] font-semibold ml-1">6 Months</span>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-4 px-1">
                <Link href="#" className="text-[#6C5CE7] text-sm font-semibold flex items-center group/link w-fit">
                  <span className="decoration-[#6C5CE7] group-hover:underline group-hover/link:underline underline-offset-[3px]">Talk to our advisor</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1.5 group-hover/link:translate-x-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[16px] p-4 flex flex-col shadow-sm border border-gray-50 group">
              <div className="rounded-[16px] overflow-hidden aspect-[4/3] mb-5">
                <img src="/47887a85762a6c3c483c504d20c3fc500f04752c.jpg" alt="Java Full Stack" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">Java Full Stack Development</h3>

              <div className="flex flex-wrap gap-2 mb-6 px-1">
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">Java</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">Spring Boot</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">SQL</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">React</span>
              </div>

              <div className="text-[12px] text-gray-500 mb-2 font-medium px-1">
                Next Batch Starts <span className="text-[#6C5CE7] font-semibold ml-1">28 September 2026</span>
              </div>
              <div className="text-[12px] text-gray-500 mb-6 font-medium px-1">
                Duration <span className="text-[#6C5CE7] font-semibold ml-1">6 Months</span>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-4 px-1">
                <Link href="#" className="text-[#6C5CE7] text-sm font-semibold flex items-center group/link w-fit">
                  <span className="decoration-[#6C5CE7] group-hover:underline group-hover/link:underline underline-offset-[3px]">Talk to our advisor</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1.5 group-hover/link:translate-x-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[16px] p-4 flex flex-col shadow-sm border border-gray-50 group">
              <div className="rounded-[16px] overflow-hidden aspect-[4/3] mb-5">
                <img src="/33f8271c21ace79aec6d42fed63426a053663a5e.jpg" alt="UI/UX Design" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 px-1">UI/UX Design</h3>

              <div className="flex flex-wrap gap-2 mb-6 px-1">
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">UX Reserch</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">UI Design</span>
                <span className="bg-gray-100 text-gray-600 text-[11px] px-2.5 py-1.5 rounded font-medium">+more..</span>
              </div>

              <div className="text-[12px] text-gray-500 mb-2 font-medium px-1">
                Next Batch Starts <span className="text-[#6C5CE7] font-semibold ml-1">28 September 2026</span>
              </div>
              <div className="text-[12px] text-gray-500 mb-6 font-medium px-1">
                Duration <span className="text-[#6C5CE7] font-semibold ml-1">6 Months</span>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-4 px-1">
                <Link href="#" className="text-[#6C5CE7] text-sm font-semibold flex items-center group/link w-fit">
                  <span className="decoration-[#6C5CE7] group-hover:underline group-hover/link:underline underline-offset-[3px]">Talk to our advisor</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1.5 group-hover/link:translate-x-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>

          {/* Trending Course Box */}
          <div className="mt-6 bg-white rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center shadow-sm">
            <div className="flex-1 px-2">
              <div
                className="border-[#bfb2ea] bg-[#f2effe] inline-flex items-center justify-center text-[11px] font-medium text-black tracking-wide uppercase rounded-full shadow-sm whitespace-nowrap px-4 py-1.5 h-[33px] mb-5"
                style={{ borderWidth: '1px' }}
              >
                TRENDING COURSE
              </div>
              <h3 className="text-[28px] font-bold text-gray-900 mb-4">MERN Stack Development</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6 max-w-[500px]">
                Master full-stack development through practical projects, mentor guidance, and career-focused training.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                {/* Column 1 */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                  Frontend & Backend Development
                </div>
                {/* Column 2 */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                  Git & GitHub
                </div>
                {/* Column 1 */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                  APIs & Databases
                </div>
                {/* Column 2 */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                  Real-world Projects
                </div>
                {/* Column 1 */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                  React & Node.js
                </div>
                {/* Column 2 */}
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div>
                  Interview Preparation
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-radial-brand text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 border-2 border-white shadow-[0_8px_20px_rgba(50,0,242,0.3)] btn-ripple-fill cursor-pointer">
                  <span className="relative z-10">View Course Details</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="px-6 py-3 rounded-full font-semibold text-sm btn-outline-to-purple">
                  <span>Talk to Advisor</span>
                </button>
              </div>
            </div>

            <div className="w-full md:w-[48%] aspect-[4/3] sm:aspect-[16/10] rounded-[24px] overflow-hidden bg-gray-100 flex-shrink-0">
              <img src="/5ee7c5b3f3917310fee4a00b3ba97b405fba6aed.jpg" alt="MERN Stack Programming" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
