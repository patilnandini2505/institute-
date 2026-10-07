import React from 'react';
import Link from 'next/link';

const stats = [
  {
    icon: "/Frame 5.svg",
    alt: "Students Trained",
    value: "100K+",
    label: "Students Trained"
  },
  {
    icon: "/Frame 5 (1).svg",
    alt: "Programs / Courses",
    value: "50+",
    label: "Programs / Courses"
  },
  {
    icon: "/Frame 5 (2).svg",
    alt: "Industry Mentors",
    value: "100+",
    label: "Industry Mentors"
  },
  {
    icon: "/Frame 5 (3).svg",
    alt: "Career Outcomes",
    value: "3K+",
    label: "Career Outcomes"
  },

];

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center bg-transparent overflow-hidden isolate">
      {/* Background Image / Waves Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 bg-no-repeat bg-cover md:bg-[length:100%_auto] pointer-events-none"
        style={{
          backgroundImage: "url('/Frame%201618879378.svg')",
          backgroundPosition: 'top center',
          opacity: 1
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-20 mt-[95px] sm:mt-[110px] md:mt-[120px]">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left space-y-5 w-full lg:w-auto shrink-0 z-20">
          <div
            className="border-[#bfb2ea] bg-[#eff8d8] inline-flex items-center justify-center text-[11px] font-medium text-black tracking-wide uppercase rounded-full shadow-sm whitespace-nowrap px-4 py-1.5 h-[33px]"
            style={{
              borderWidth: '1px',
            }}
          >
            MERN STACK DEVELOPMENT
          </div>

          <h1
            className="w-full text-[#111] font-bold"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: '1.2',
              letterSpacing: '0%'
            }}
          >
            From Learning to <br />
            <span className="text-[#6419e6]">Building Real Apps.</span>
          </h1>

          <p
            className="w-full text-[#4B5563] font-medium"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0%'
            }}
          >
            Learn by doing, build real-world projects, and develop the skills you need to <br className="hidden lg:block" />
            start your tech career.
          </p>

          <div
            className="flex flex-col sm:grid sm:[grid-template-columns:max-content_max-content] text-[#4B5563] py-2 gap-3 sm:gap-x-5 sm:gap-y-3"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              letterSpacing: '0%'
            }}
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-2 h-2 rounded-full bg-[#6419e6] shrink-0"></div>
              <span>Build 5+ real-world projects</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-2 h-2 rounded-full bg-[#6419e6] shrink-0"></div>
              <span>Live coding & hands-on practice</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-2 h-2 rounded-full bg-[#6419e6] shrink-0"></div>
              <span>Master Frontend + Backend Development</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-2 h-2 rounded-full bg-[#6419e6] shrink-0"></div>
              <span>Career guidance & placement support</span>
            </div>
          </div>

          <Link href="/courses" className="mt-4">
            <button className="px-7 py-3.5 bg-radial-brand text-white font-semibold rounded-full border-2 border-white shadow-[0_8px_20px_rgba(50,0,242,0.3)] flex items-center space-x-2 btn-ripple-fill cursor-pointer">
              <span className="relative z-10">View Course Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 relative z-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </Link>
        </div>

        {/* Right Graphic Area */}
        <div className="w-full lg:w-[50%] flex justify-center lg:justify-end relative mt-2 sm:mt-6 lg:mt-0 shrink-0">
          <style>{`
            @keyframes float-icon {
              0%, 100% { transform: translate(-50%, -50%) translateY(0); }
              50% { transform: translate(-50%, -50%) translateY(-12px); }
            }
            .animate-float-1 { animation: float-icon 6s ease-in-out infinite; }
            .animate-float-2 { animation: float-icon 7s ease-in-out infinite 1s; }
            .animate-float-3 { animation: float-icon 6.5s ease-in-out infinite 2s; }
            .animate-float-4 { animation: float-icon 7.5s ease-in-out infinite 0.5s; }
          `}</style>

          {/* The main container, maintaining a 1:1 aspect ratio and responsive scaling */}
          <div className="relative w-[85vw] max-w-[500px] aspect-square flex items-center justify-center pointer-events-none">

            {/* Outer Orbit Path Removed */}

            {/* Outer Stroke Circle (Ellipse 33) */}
            <img src="/Ellipse%2022.svg" alt="" className="hidden" /> {/* preloader */}
            <img src="/Ellipse%2033.svg" alt="" className="absolute w-[76%] h-[76%] z-0 object-contain" />

            {/* Inner Solid Circle (Ellipse 34) */}
            <img src="/Ellipse%2034.svg" alt="" className="absolute w-[64%] h-[64%] z-10 object-contain shadow-[0_0_40px_rgba(206,241,0,0.15)]" />

            {/* Orbiting Spheres Container */}
            <div className="absolute w-[76%] h-[76%] z-10 rounded-full pointer-events-none">
              {/* Top Left (135 deg) */}
              <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#CEF100] to-[#9cb800] shadow-[0_4px_10px_rgba(206,241,0,0.4)]"></div>
              {/* Bottom Left (225 deg) */}
              <div className="absolute top-[85.4%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#CEF100] to-[#9cb800] shadow-[0_4px_10px_rgba(206,241,0,0.4)]"></div>
              {/* Bottom Right (315 deg) */}
              <div className="absolute top-[85.4%] left-[85.4%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-[#CEF100] to-[#9cb800] shadow-[0_4px_10px_rgba(206,241,0,0.4)]"></div>
              {/* Right (0 deg) */}
              <div className="absolute top-[50%] left-[100%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#CEF100] to-[#9cb800] shadow-[0_4px_10px_rgba(206,241,0,0.4)]"></div>
              {/* Top Right (45 deg) */}
              <div className="absolute top-[14.6%] left-[85.4%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br from-[#CEF100] to-[#9cb800] shadow-[0_4px_10px_rgba(206,241,0,0.4)]"></div>
            </div>

            {/* Person Cutout - Layer 1: Bottom body clipped precisely to the circle circumference */}
            <div
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ clipPath: 'circle(31.8% at 50% 50%)' }}
            >
              <img
                src="/Ellipse%2022.svg"
                alt="Person Illustration"
                className="w-[370px] h-[425px] object-contain drop-shadow-2xl translate-y-[-25px] pointer-events-auto"
              />
            </div>

            {/* Person Cutout - Layer 2: Head & laptop popping out of the box at the top */}
            <div
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ clipPath: 'polygon(-50% -100%, 150% -100%, 150% 50%, -50% 50%)' }}
            >
              <img
                src="/Ellipse%2022.svg"
                alt=""
                className="w-[370px] h-[425px] object-contain drop-shadow-2xl translate-y-[-25px] pointer-events-auto"
              />
            </div>

            {/* Static Floating Icons (z-30) - Wrapped in 76% container to match green ring perfectly */}
            <div className="absolute w-[76%] h-[76%] z-30 pointer-events-none">

              {/* NPM */}
              <div className="absolute top-[3.3%] left-[33%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="w-[48px] h-[48px] bg-white rounded-[40px] flex items-center justify-center overflow-hidden">
                  <svg className="w-[150%] h-[150%]" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6 28.9355V36.9358H28.2637V38.264H33.6V36.9358H45.6V28.9355H21.6ZM28.2637 35.5955H26.9355V31.5958H25.5997V35.5955H22.9357V30.2675H28.2637V35.5955ZM32.2642 35.5955V36.9358H29.6002V30.2675H34.9365V35.5993H32.2642V35.5955ZM44.268 35.5955H42.936V31.5958H41.6002V35.5955H40.2645V31.5958H38.9362V35.5955H36.264V30.2675H44.268V35.5955ZM32.2642 31.5995H33.6V34.2673H32.2642V31.5995Z" fill="black" />
                  </svg>
                </div>
              </div>

              {/* FIGMA */}
              <div className="absolute top-[41.4%] left-[1.1%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="w-[48px] h-[48px] bg-[#1E1E1E] rounded-[40px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] flex items-center justify-center relative">
                  <div className="w-full h-full rounded-[40px] overflow-hidden flex items-center justify-center">
                    <img src="/Group.svg" alt="Figma" className="w-[55%] h-[55%] object-contain" />
                  </div>
                </div>
              </div>

              {/* AMAZON */}
              <div className="absolute top-[25.2%] left-[93%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="w-[48px] h-[48px] bg-white rounded-[40px] shadow-[0_5px_15px_rgba(0,0,0,0.12)] flex items-center justify-center overflow-hidden">
                  <img src="/Amazon.svg" alt="Amazon" className="w-[105%] h-[105%] object-cover" />
                </div>
              </div>

              {/* NEXT.JS */}
              <div className="absolute top-[74.8%] left-[93%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="w-[48px] h-[48px] bg-white rounded-[40px] shadow-[0_5px_15px_rgba(0,0,0,0.12)] flex items-center justify-center overflow-hidden">
                  <svg className="w-[105%] h-[105%]" viewBox="9.6 9.6 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.2235 54.6463C45.045 54.7409 45.06 54.7709 45.231 54.6839C45.2865 54.6614 45.333 54.6298 45.3735 54.5923C45.3735 54.5608 45.3735 54.5608 45.2235 54.6463ZM45.5835 54.4512C45.498 54.5217 45.498 54.5217 45.6 54.4752C45.654 54.4437 45.702 54.4136 45.702 54.4046C45.702 54.3641 45.678 54.3731 45.5835 54.4512ZM45.8175 54.3101C45.732 54.3806 45.732 54.3806 45.834 54.3341C45.8895 54.3026 45.936 54.2695 45.936 54.262C45.936 54.2245 45.912 54.232 45.8175 54.3101ZM46.0545 54.1704C45.969 54.241 45.969 54.241 46.068 54.193C46.1235 54.1629 46.17 54.1314 46.17 54.1224C46.17 54.0849 46.146 54.0924 46.0545 54.1704ZM46.374 53.9588C46.2105 54.0684 46.1535 54.1389 46.3035 54.0608C46.404 53.9993 46.575 53.8642 46.545 53.8642C46.4805 53.8882 46.4265 53.9287 46.3725 53.9588H46.374ZM32.0295 9.61748C31.92 9.62499 31.5915 9.65501 31.3035 9.67903C24.4815 10.2976 18.099 13.9726 14.0535 19.6339C11.817 22.737 10.365 26.3415 9.81748 30.1262C9.62398 31.4473 9.59998 31.8377 9.59998 33.6287C9.59998 35.4182 9.62398 35.8025 9.81748 37.1236C11.124 46.1477 17.538 53.7231 26.232 56.5304C27.7965 57.0303 29.436 57.3756 31.3035 57.5873C32.0295 57.6654 35.169 57.6654 35.895 57.5873C39.123 57.227 41.8485 56.4298 44.5455 55.0532C44.9595 54.843 45.0375 54.7875 44.982 54.7409C43.662 52.998 42.366 51.2535 41.0685 49.494L37.233 44.3102L32.4285 37.1867C30.8265 34.8027 29.2185 32.4247 27.585 30.0647C27.5685 30.0647 27.5475 33.2308 27.5385 37.0921C27.522 43.8553 27.522 44.13 27.4365 44.2861C27.351 44.4738 27.21 44.6299 27.0225 44.717C26.874 44.7876 26.7405 44.8026 26.031 44.8026H25.2195L25.008 44.6705C24.876 44.5849 24.7665 44.4663 24.696 44.3267L24.594 44.115L24.6015 34.7006L24.618 25.2862L24.7665 25.0985C24.861 24.9829 24.978 24.8883 25.11 24.8178C25.3065 24.7232 25.3845 24.7082 26.196 24.7082C27.1485 24.7082 27.306 24.7457 27.5565 25.0204C29.5005 27.9209 31.4385 30.8288 33.345 33.7458C36.4635 38.4777 40.7205 44.9347 42.813 48.1023L46.6185 53.8657L46.806 53.7411C48.6345 52.5206 50.298 51.0673 51.7335 49.4099C54.7575 45.945 56.7195 41.6829 57.384 37.1341C57.5775 35.813 57.6015 35.4212 57.6015 33.6317C57.6015 31.8407 57.5775 31.4578 57.384 30.1367C56.0775 21.1126 49.6635 13.5373 40.9695 10.7284C39.3435 10.2135 37.671 9.86219 35.9775 9.68203C35.523 9.63549 32.421 9.57995 32.031 9.62048L32.0295 9.61748ZM41.85 24.1452C42.0765 24.2533 42.2475 24.4575 42.3255 24.6917C42.366 24.8178 42.3735 27.4285 42.366 33.3089L42.3495 41.752L40.866 39.4701L39.3735 37.1867V31.057C39.3735 27.0832 39.39 24.8553 39.411 24.7457C39.4815 24.495 39.6525 24.2848 39.8805 24.1527C40.0665 24.0581 40.1385 24.0506 40.881 24.0506C41.5755 24.0506 41.6925 24.0581 41.8485 24.1452H41.85Z" fill="black" stroke="none" />
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-12 relative z-20 mt-6 mb-0">
        <div className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-[16px] px-6 py-8 md:py-0 md:px-8 lg:px-12 w-full md:h-[104px] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 w-[220px] max-w-full md:w-auto md:max-w-none"
            >
              <img
                src={stat.icon}
                alt={stat.alt}
                className="w-14 h-14 object-contain shadow-md rounded-full shrink-0"
              />
              <div className="flex flex-col justify-center items-center text-center flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                <h3 className="text-[1.7rem] font-semibold text-gray-900 leading-none">
                  {stat.value}
                </h3>
                <p className="text-gray-500 text-sm font-medium mt-1 whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft gradient fade from hero background into white section */}
      <div className="w-full h-24 md:h-36 bg-gradient-to-b from-transparent to-white relative z-20 pointer-events-none -mb-1 mt-4 md:mt-6" />

      {/* Companies Section */}
      <div className="w-full flex flex-col items-center relative z-20 px-6 pt-6 pb-24 bg-white">
        <div
          className="border-[#bfb2ea] bg-[#eff8d8] inline-flex items-center justify-center text-[11px] font-medium text-black tracking-wide uppercase rounded-full shadow-sm whitespace-nowrap px-4 py-1.5 h-[33px] mb-6"
          style={{
            borderWidth: '1px',
          }}
        >
          WHERE OUR LEARNERS ARE GROWING
        </div>

        <h2
          className="text-[#111] font-bold text-center mb-12"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            lineHeight: '1.2'
          }}
        >
          Our Learners Are Building Careers At Leading Companies
        </h2>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
        `}</style>
        <div className="w-full max-w-[1200px] overflow-hidden relative py-2">
          {/* Subtle edge fades for smooth marquee look */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center">
            <img src="/Continuous%20scroll.svg" alt="Leading Companies" className="h-7 sm:h-8 md:h-9 w-auto object-contain px-4 shrink-0" />
            <img src="/Continuous%20scroll.svg" alt="Leading Companies" className="h-7 sm:h-8 md:h-9 w-auto object-contain px-4 shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
