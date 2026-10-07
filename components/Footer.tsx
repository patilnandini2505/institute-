import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f2ff] pt-12">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12 pb-16">
        <div 
          className="rounded-[24px] p-6 md:p-14 flex flex-col lg:flex-row justify-between gap-12 items-center bg-no-repeat bg-cover bg-center overflow-hidden shadow-sm"
          style={{ 
            backgroundImage: "url('/WhatsApp%20Image%202026-10-01%20at%204.28.39%20PM.jpeg')",
          }}
        >
          
          {/* Left Content */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <div 
              className="border border-white inline-flex items-center justify-center text-[11px] font-medium text-white tracking-wide uppercase rounded-full whitespace-nowrap px-4 py-1.5 h-[33px] mb-6"
            >
              TAKE THE NEXT STEP
            </div>
            <h2 
              className="text-black mb-4 text-3xl md:text-[36px] leading-tight"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                letterSpacing: '0%',
              }}
            >
              <span className="block sm:inline">Take The First Step </span>
              <span className="block sm:inline">Towards Your <span className="text-[#6419e6]">Dream Career.</span></span>
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-10 max-w-md leading-relaxed font-medium">
              Leave your details and our team will help you choose the right program for your career goals.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-gray-700 text-sm mb-1 font-medium">
                  <span className="text-base">@</span>
                  <span>Email ID</span>
                </div>
                <a 
                  href="mailto:zikrabyteinstitute@example.com" 
                  className="text-lg md:text-xl font-bold text-black hover:text-[#6419e6] transition-colors duration-200 inline-block"
                >
                  zikrabyteinstitute@example.com
                </a>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-700 text-sm mb-1 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.215-.536a1.125 1.125 0 00-1.22.564l-1.25 2.5a13.08 13.08 0 01-6.702-6.702l2.5-1.25a1.125 1.125 0 00.564-1.22l-.536-3.215A1.125 1.125 0 0010.5 3.375h-1.372c-1.242 0-2.25 1.008-2.25 2.25z" />
                  </svg>
                  <span>Mobile Number</span>
                </div>
                <a 
                  href="tel:+919876543210" 
                  className="text-lg md:text-xl font-bold text-black hover:text-[#6419e6] transition-colors duration-200 inline-block"
                >
                  +91 987 654 3210
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="bg-white rounded-[24px] p-8 md:p-12 w-full lg:w-[45%] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Submit Your Request</h3>
            
            <form className="flex flex-col space-y-6">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Your Name*" 
                  className="w-full border-b border-gray-200 py-3 pl-8 text-sm focus:outline-none focus:border-[#7b2ff7] transition-colors placeholder-gray-400"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address*" 
                  className="w-full border-b border-gray-200 py-3 pl-8 text-sm focus:outline-none focus:border-[#7b2ff7] transition-colors placeholder-gray-400"
                />
              </div>

              {/* Phone Input */}
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.215-.536a1.125 1.125 0 00-1.22.564l-1.25 2.5a13.08 13.08 0 01-6.702-6.702l2.5-1.25a1.125 1.125 0 00.564-1.22l-.536-3.215A1.125 1.125 0 0010.5 3.375h-1.372c-1.242 0-2.25 1.008-2.25 2.25z" />
                  </svg>
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number*" 
                  className="w-full border-b border-gray-200 py-3 pl-8 text-sm focus:outline-none focus:border-[#7b2ff7] transition-colors placeholder-gray-400"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="bg-radial-brand text-white font-semibold py-3.5 px-8 rounded-full border-2 border-white shadow-[0_8px_20px_rgba(50,0,242,0.3)] text-sm btn-ripple-fill cursor-pointer"
                >
                  <span className="relative z-10">Submit Now</span>
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>

      {/* Bottom Footer with zb2.jpeg background */}
      <div 
        className="w-full relative bg-no-repeat bg-cover bg-center min-h-[300px] md:min-h-[340px] flex flex-col justify-center pt-16 md:pt-20 pb-12 md:pb-14 overflow-hidden"
        style={{ 
          backgroundImage: "url('/zb2.jpeg')",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
          {/* Quick Links Header */}
          <div className="text-center mb-10">
            <h4 
              className="text-gray-900 mb-4 text-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
              }}
            >
              Quick Links
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[14px] md:text-[15px] text-gray-700 font-medium">
              <a href="#" className="hover:text-[#6419e6] transition-colors">View All Courses</a>
              <a href="#" className="hover:text-[#6419e6] transition-colors">Career Programs</a>
              <a href="#" className="hover:text-[#6419e6] transition-colors">Success stories</a>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-gray-300/60 mb-8"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-[13px] text-gray-800 font-medium">
            <div>
              © 2026 ZikraByte. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <a href="mailto:zikrabyteinstitute@example.com" className="flex items-center gap-2 hover:text-[#6419e6] transition-colors group">
                <svg className="w-4 h-4 text-black group-hover:text-[#6419e6] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>zikrabyteinstitute@example.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#6419e6] transition-colors group">
                <svg className="w-4 h-4 text-black group-hover:text-[#6419e6] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                </svg>
                <span>+91 987 654 3210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
