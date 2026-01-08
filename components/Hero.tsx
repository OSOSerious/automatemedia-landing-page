
import React from 'react';
import { BrandIcon } from './Logo';

// Fix: Added default export for Hero component to resolve the import error in App.tsx
const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-24 lg:pt-56 lg:pb-44 overflow-hidden bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl lg:text-[6.5rem] font-black text-[#333333] leading-[0.9] mb-12 tracking-tighter">
              AI operations for <br />
              <span className="relative inline-block px-5 my-2 ml-[-0.5rem]">
                {/* Headline highlight matched to grey box in latest screenshot */}
                <span className="absolute inset-0 bg-[#EFEFEF] transform -skew-x-1"></span>
                {/* Fix: Changed text color to #333333 for visibility against the light grey background */}
                <span className="relative text-[#333333]">modern media</span>
              </span> <br />
              companies
            </h1>
            <p className="text-2xl text-slate-500 leading-snug mb-16 max-w-xl font-bold">
              We design and build custom AI workflows that automate research, content, and distribution — so your team can publish more with less effort.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <button className="bg-[#4A3E9E] hover:bg-[#3b3182] text-white px-10 py-5 rounded-full text-2xl font-black shadow-2xl shadow-[#4A3E9E]/20 transition-all active:scale-95 relative overflow-hidden group">
                <span className="relative z-10">Book a Strategy Call</span>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <div className="text-slate-400 text-sm font-bold leading-tight">
                30-minute audit of your workflows. <br />
                <span className="text-[#4A3E9E] font-black">Founder-led.</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center pt-8 reveal" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Central Box: Replaced 'AI' text with Brand Logo as requested */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-white rounded-[2.8rem] animate-glow border border-slate-100 flex items-center justify-center z-20 shadow-[0_20px_50px_rgba(74,62,158,0.08)]">
                <div className="absolute inset-2 bg-slate-50/50 rounded-[2.3rem] flex items-center justify-center">
                  <BrandIcon className="w-24 h-24" />
                </div>
              </div>

              {/* ORBITAL ICONS - Fix: Added .map() to properly render the array objects as valid ReactNodes */}
              {[
                { delay: '0.1s', pos: 'top-0 left-1/2 -translate-x-1/2', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                { delay: '0.3s', pos: 'top-1/4 right-0', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { delay: '0.5s', pos: 'bottom-0 left-1/2 -translate-x-1/2', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
                { delay: '0.7s', pos: 'top-1/4 left-0', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`absolute ${item.pos} w-14 h-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center shadow-xl shadow-slate-200/50 z-10 animate-float`}
                  style={{ animationDelay: item.delay }}
                >
                  <svg className="w-6 h-6 text-[#4A3E9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
