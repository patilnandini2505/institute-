import React from 'react';

export default function InstructorsSection() {
  return (
    <section 
      className="w-full relative min-h-[432px] md:h-[432px] flex items-center py-12 md:py-0 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: "url('/zb2.jpeg')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* Left Side: Images Grid */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-start pl-0 md:pl-10">
            <div className="grid grid-cols-3 gap-4 md:gap-6 w-full max-w-[450px]">
              
              {/* Top Row */}
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transform transition-transform hover:scale-105">
                <img src="/06cc120650af40d0ba3ce74614349d8f476b6d7c.jpg" alt="Instructor 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-full overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transform transition-transform hover:scale-105">
                <img src="/69e37d0d3c2c97e88aaded16e7734e88bccc7091.jpg" alt="Instructor 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transform transition-transform hover:scale-105">
                <img src="/94b1b17496750f90dfe7b2c9fda1bee73d79b490.jpg" alt="Instructor 3" className="w-full h-full object-cover" />
              </div>

              {/* Bottom Row */}
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transform transition-transform hover:scale-105">
                <img src="/576d5994317ac399516959459ff78a5ceaac3189.jpg" alt="Instructor 4" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transform transition-transform hover:scale-105">
                <img src="/955adefc6dbf8972748b3be25d7f17e2d33c3868.jpg" alt="Instructor 5" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-full overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transform transition-transform hover:scale-105">
                <img src="/cee9f6b9abbd23a32a66d634caf16b076b3417ac.jpg" alt="Instructor 6" className="w-full h-full object-cover" />
              </div>

            </div>
          </div>

          <div className="w-full md:w-[50%] pr-0 md:pr-10">
            <div 
              className="border-[#bfb2ea] bg-[#eff8d8] inline-flex items-center justify-center text-[11px] font-medium text-black tracking-wide uppercase rounded-full shadow-sm whitespace-nowrap px-4 py-1.5 h-[33px] mb-6"
              style={{ borderWidth: '1px' }}
            >
              LEARN FROM PEOPLE WHO'VE DONE IT
            </div>
            
            <h2 
              className="text-black mb-6 text-3xl md:text-[36px] leading-tight"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                letterSpacing: '0%',
              }}
            >
              {/* Mobile View: each in its own single line */}
              <span className="block md:hidden">
                <span className="block whitespace-nowrap">
                  Real <span className="text-[#6C5CE7]">Experience.</span>
                </span>
                <span className="block whitespace-nowrap">
                  Practical <span className="text-[#6C5CE7]">Guidance.</span>
                </span>
              </span>

              {/* Desktop View (>= md) */}
              <span className="hidden md:inline">
                <span className="whitespace-nowrap">
                  Real <span className="text-[#6C5CE7]">Experience.</span> Practical
                </span>
                <br />
                <span className="text-[#6C5CE7]">Guidance.</span>
              </span>
            </h2>
            
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed max-w-[500px] font-medium">
              Learn directly from experienced professionals who bring real-world knowledge into every session.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
