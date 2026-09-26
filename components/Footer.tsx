import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f2ff] pb-[80px] pt-12">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
        <div className="bg-[#9b83e8] rounded-[24px] p-10 md:p-14 flex flex-col lg:flex-row justify-between gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-white w-full lg:w-1/2">
            <div className="border border-white/40 text-[10px] font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6">
              TAKE THE NEXT STEP
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Take The First Step <br className="hidden md:block" />
              Toward Your Dream Career.
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-10 max-w-md leading-relaxed">
              Leave your details and our team will help you choose the right program for your career goals.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-white/80 text-sm mb-1">
                  <span>@</span>
                  <span>Email ID</span>
                </div>
                <p className="text-lg font-semibold">zikrabyteinstitute@example.com</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-white/80 text-sm mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.215-.536a1.125 1.125 0 00-1.22.564l-1.25 2.5a13.08 13.08 0 01-6.702-6.702l2.5-1.25a1.125 1.125 0 00.564-1.22l-.536-3.215A1.125 1.125 0 0010.5 3.375h-1.372c-1.242 0-2.25 1.008-2.25 2.25z" />
                  </svg>
                  <span>Mobile Number</span>
                </div>
                <p className="text-lg font-semibold">+91 987 654 3210</p>
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
                <button type="submit" className="bg-[#6419e6] text-white font-semibold py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(100,25,230,0.35)] hover:scale-105 transition-transform text-sm">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
