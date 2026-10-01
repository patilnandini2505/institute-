import React from 'react';
import Link from 'next/link';

export default function WhereHeaded() {
  return (
    <section className="w-full bg-[#f4f2ff] py-16 border-t-2 border-[#5b3af5]/20">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div 
            className="border-[#d2c4f8] bg-[#e7dfff]/50 backdrop-blur-sm inline-flex items-center justify-center text-[10px] font-bold text-[#5c428a] tracking-wider uppercase shadow-sm whitespace-nowrap mb-4"
            style={{ 
              borderWidth: '1px', 
              borderRadius: '40px', 
              padding: '6px 12px' 
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
          
          {/* Card 1: Start My Career */}
          <div className="bg-white rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow flex flex-col h-full">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
              <img 
                src="/837d59fe1209d2af4573980f9efddbab8e0a5c73.jpg" 
                alt="Start My career" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 pb-3 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Start My career</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Build the skills you need to enter the industry.
              </p>
              <Link href="#" className="text-sm font-semibold text-[#6419e6] flex items-center group mt-auto">
                Talk to our advisor 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Upskill */}
          <div className="bg-white rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow flex flex-col h-full">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
              <img 
                src="/bccb7a5bed4711cf77c9016c6f01f95ee3625dff.jpg" 
                alt="Upskill" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 pb-3 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Upskill</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Strengthen your skills and move forward in your career.
              </p>
              <Link href="#" className="text-sm font-semibold text-[#6419e6] flex items-center group mt-auto">
                Talk to our advisor 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Get Certified */}
          <div className="bg-white rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow flex flex-col h-full">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
              <img 
                src="/e09a328115fbf9f0822d6b801ff08a51b6fa7912.jpg" 
                alt="Get Certified" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 pb-3 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Certified</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Earn industry-recognized certifications with confidence.
              </p>
              <Link href="#" className="text-sm font-semibold text-[#6419e6] flex items-center group mt-auto">
                Talk to our advisor 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 4: Switch Careers */}
          <div className="bg-white rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow flex flex-col h-full">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-5">
              <img 
                src="/08d60015b421aee669af73a60a3e61ebe5877915.jpg" 
                alt="Switch Careers" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 pb-3 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Switch Careers</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">
                Build the skills you need to enter the industry.
              </p>
              <Link href="#" className="text-sm font-semibold text-[#6419e6] flex items-center group mt-auto">
                Talk to our advisor 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
