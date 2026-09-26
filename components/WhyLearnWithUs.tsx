import React from 'react';

export default function WhyLearnWithUs() {
  return (
    <section className="w-full bg-[#f4f2ff] py-16 md:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
        
        {/* Main Flex Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
          
          {/* Left Purple Card */}
          <div 
            className="bg-[#9b83e8] p-6 flex flex-col flex-shrink-0 shadow-sm overflow-hidden"
            style={{ width: '100%', maxWidth: '400px', borderRadius: '24px' }}
          >
            <div>
              <div className="border border-white/40 text-[9px] font-semibold tracking-widest uppercase rounded-full px-3 py-1 mb-4 text-white inline-block">
                WHY LEARN WITH US
              </div>
              <h2 
                className="text-white mb-2"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '20px', 
                  lineHeight: '100%', 
                  letterSpacing: '0%' 
                }}
              >
                More Than Training. A Clearer Path To Your Career
              </h2>
              <p className="text-white/90 text-[13px] leading-relaxed mb-4">
                Learn practical skills, get expert guidance, and build the confidence to take your next career step.
              </p>
            </div>
            
            <div className="rounded-[16px] overflow-hidden w-full mt-auto h-[130px]">
              <img 
                src="/1c286551858bd10923039ed25cb6529e5d8a1467.jpg" 
                alt="Classroom learning" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Cards Grid (approx 55% width) */}
          <div className="w-full flex-1 flex flex-col gap-4">
            
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full h-[158px]">
              
              {/* Card 1 (Narrower) */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col justify-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:w-[44%] h-full">
                <h3 className="text-[17px] font-bold text-[#111] mb-2 leading-snug">Learn by Doing</h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0">
                  Work on real-world projects and practical tasks, not just theory.
                </p>
              </div>

              {/* Card 2 (Wider) */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col justify-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:w-[56%] h-full">
                <h3 className="text-[17px] font-bold text-[#111] mb-2 leading-snug">Learn from Industry Experts</h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0">
                  Get guidance from experienced professionals who understand the industry.
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full h-[158px]">
              
              {/* Card 3 (Wider) */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col justify-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:w-[56%] h-full">
                <h3 className="text-[17px] font-bold text-[#111] mb-2 leading-snug">Build Career-Ready Skills</h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0">
                  Develop the technical, professional, and problem-solving skills employers look for.
                </p>
              </div>

              {/* Card 4 (Narrower) */}
              <div className="bg-white rounded-[24px] p-6 flex flex-col justify-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:w-[44%] h-full">
                <h3 className="text-[17px] font-bold text-[#111] mb-2 leading-snug">Get Support Beyond the Classroom</h3>
                <p className="text-gray-500 text-sm leading-relaxed m-0">
                  Get guidance from learning to job search.
                </p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
