import React from 'react';

export default function InstructorsSection() {
  return (
    <section className="w-full bg-[#f4f2ff] pt-[160px] pb-16 md:pb-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
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

          {/* Right Side: Text Content */}
          <div className="w-full md:w-[50%] pr-0 md:pr-10">
            <div className="border border-[#cbbcf6] text-gray-700 text-[10px] md:text-[11px] font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-6 inline-block bg-transparent">
              LEARN FROM PEOPLE WHO'VE DONE IT
            </div>
            
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-extrabold text-black leading-[1.1] mb-6 tracking-tight">
              Real <span className="text-[#6C5CE7]">Experience.</span> Practical <br className="hidden md:block"/>
              <span className="text-[#6C5CE7]">Guidance.</span>
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
