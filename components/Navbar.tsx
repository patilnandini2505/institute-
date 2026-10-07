'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsSearchOpen(false);
    if (pathname === '/' || pathname === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)] z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-12">
        {/* Desktop / Tablet Navigation (md and above) */}
        <div className="hidden md:flex h-[92px] items-center justify-between gap-4 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleLogoClick} className="block cursor-pointer">
              <img src="/Group%202.svg" alt="Zikrabyte Logo" className="w-[150px] md:w-[187.48px] h-auto object-contain cursor-pointer" />
            </Link>
          </div>

          {/* Search Bar + Button Group */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Search Bar */}
            <div className="w-full max-w-[512px] shrink-0">
              <div className="w-full h-[60px] pt-2 pr-2 pb-2 pl-4 rounded-[40px] border border-gray-300 bg-white flex items-center justify-between shadow-sm focus-within:border-[#7b2ff7] focus-within:ring-1 focus-within:ring-[#7b2ff7] transition-all">
                <input 
                  type="text" 
                  placeholder="What do you want to learn?" 
                  className="w-full h-full bg-transparent outline-none font-medium text-gray-700 placeholder-gray-400"
                />
                <button className="w-[44px] h-[44px] shrink-0 bg-radial-brand rounded-full flex items-center justify-center text-white hover:brightness-110 transition-all shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0">
              <button className="w-[140px] lg:w-[152px] h-[52px] lg:h-[55px] p-[10px] lg:p-[16px] flex items-center justify-center gap-[6px] lg:gap-[10px] bg-radial-brand text-white font-semibold rounded-[40px] border-2 border-white shadow-[0_8px_20px_rgba(50,0,242,0.3)] text-xs lg:text-sm whitespace-nowrap btn-ripple-fill cursor-pointer">
                <span className="relative z-10">Talk to Advisor</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (< md) */}
        <div className="flex md:hidden flex-col pt-3 pb-3 gap-2.5">
          {/* Top Row: Logo, Search Icon, and Action Button */}
          <div className="flex items-center justify-between w-full">
            <Link href="/" onClick={handleLogoClick} className="flex-shrink-0 block cursor-pointer">
              <img src="/Group%202.svg" alt="Zikrabyte Logo" className="w-[120px] sm:w-[140px] h-auto object-contain cursor-pointer" />
            </Link>

            <div className="flex items-center gap-2">
              {/* Mobile Search Toggle Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className={`w-[38px] h-[38px] rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm transition-all active:scale-95 ${
                  isSearchOpen
                    ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    : 'text-[#6419e6] hover:bg-[#f4f2ff]'
                }`}
                aria-label={isSearchOpen ? 'Close search' : 'Open search'}
              >
                {isSearchOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#6419e6]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                )}
              </button>

              {/* Action Button */}
              <button className="h-[38px] px-3.5 sm:px-4 flex items-center justify-center bg-radial-brand text-white font-semibold rounded-[40px] border-2 border-white shadow-[0_4px_12px_rgba(50,0,242,0.25)] text-[12px] whitespace-nowrap btn-ripple-fill cursor-pointer">
                <span className="relative z-10">Talk to Advisor</span>
              </button>
            </div>
          </div>

          {/* Collapsible Mobile Search Bar */}
          {isSearchOpen && (
            <div className="w-full flex justify-center pt-1 px-1 animate-fadeIn">
              <div className="w-full max-w-[350px] sm:max-w-[400px] h-[42px] py-1 pr-1.5 pl-4 rounded-full border border-gray-300 bg-white flex items-center justify-between shadow-sm focus-within:border-[#7b2ff7] focus-within:ring-1 focus-within:ring-[#7b2ff7] transition-all">
                <input 
                  ref={inputRef}
                  type="text" 
                  placeholder="What do you want to learn?" 
                  className="w-full min-w-0 flex-1 h-full bg-transparent outline-none font-medium text-[13px] text-gray-700 placeholder-gray-400"
                />
                <button className="w-[32px] h-[32px] shrink-0 bg-radial-brand rounded-full flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
