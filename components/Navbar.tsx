import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="h-[92px] fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md border-b border-gray-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-50">
      <div className="max-w-7xl h-full mx-auto px-6 md:px-12 lg:px-12 py-4 flex items-center justify-between ">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/Group%202.svg" alt="Zikrabyte Logo" className="w-[120px] sm:w-[150px] md:w-[187.48px] h-auto object-contain" />
          </Link>
        </div>

        {/* Search Bar + Button Group */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-[512px] shrink-0">
            <div className="w-full h-[60px] pt-2 pr-2 pb-2 pl-4 rounded-[40px] border border-gray-300 bg-white flex items-center justify-between shadow-sm focus-within:border-[#7b2ff7] focus-within:ring-1 focus-within:ring-[#7b2ff7] transition-all">
              <input 
                type="text" 
                placeholder="What do you want to learn?" 
                className="w-full h-full bg-transparent outline-none font-medium text-gray-700 placeholder-gray-400"
              />
              <button className="w-[44px] h-[44px] shrink-0 bg-[#6419e6] rounded-full flex items-center justify-center text-white hover:bg-[#5b17d4] transition-colors shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0">
            <button className="w-[130px] sm:w-[152px] h-[44px] sm:h-[55px] p-[10px] sm:p-[16px] flex items-center justify-center gap-[6px] sm:gap-[10px] bg-[#7b2ff7] text-white font-semibold rounded-[40px] border-2 border-transparent hover:bg-[#6819e6] transition-all shadow-[0_8px_20px_rgba(123,47,247,0.3)] hover:shadow-[0_8px_25px_rgba(123,47,247,0.4)] text-[12px] sm:text-sm whitespace-nowrap">
              Talk to advisor
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
