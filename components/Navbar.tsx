import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full h-[92px] fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md border-b border-gray-100/50 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] z-50">
      <div className="w-full max-w-[1440px] h-full mx-auto px-6 lg:px-[100px] py-[16px] flex items-center gap-[10px]">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/Group%202.svg" alt="Zikrabyte Logo" className="w-[150px] md:w-[187.48px] h-auto object-contain" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-full max-w-[500px] ml-auto mr-4">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="What do you want to learn?" 
              className="w-full h-[52px] pl-6 pr-14 rounded-full border border-gray-300 outline-none focus:border-[#7b2ff7] focus:ring-1 focus:ring-[#7b2ff7] transition-all bg-white shadow-sm font-medium text-gray-700 placeholder-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[38px] h-[38px] bg-[#6419e6] rounded-full flex items-center justify-center text-white hover:bg-[#5b17d4] transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0 hidden sm:block">
          <button className="h-[46px] px-5 lg:px-7 bg-[#7b2ff7] text-white font-semibold rounded-full hover:bg-[#6819e6] transition-all shadow-[0_8px_20px_rgba(123,47,247,0.3)] hover:shadow-[0_8px_25px_rgba(123,47,247,0.4)] text-sm lg:text-base whitespace-nowrap">
            Talk to advisor
          </button>
        </div>
      </div>
    </nav>
  );
}
