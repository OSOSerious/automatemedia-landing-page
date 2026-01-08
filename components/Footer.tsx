
import React from 'react';

const LogoStacked: React.FC = () => (
  <div className="flex flex-col items-center gap-6">
    <div className="w-28 h-28">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M30 85L48 25H52L70 85H60L55 65C45 60 35 75 25 75L30 85Z" fill="#4A3E9E" />
        <path d="M22 65C35 65 45 45 78 55V45C45 35 35 55 22 55V65Z" fill="url(#footer-wave-grad)" />
        <defs>
          <linearGradient id="footer-wave-grad" x1="22" y1="45" x2="78" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D3E0F5" />
            <stop offset="1" stopColor="#4A3E9E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <span className="text-5xl lg:text-[4.5rem] font-[900] text-[#333333] tracking-[-0.05em] leading-none">AutomateMedia</span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-44">
          <h2 className="text-[3.5rem] lg:text-[4.5rem] font-black text-[#333333] leading-[1.05] mb-10 tracking-tighter">
            Ready to explore AI for your <br /> media operations?
          </h2>
          <p className="text-2xl text-slate-500 mb-14 font-medium max-w-2xl mx-auto">
            We'll show you where AI can cut hours and unlock output immediately.
          </p>
          <button className="bg-[#4A3E9E] hover:bg-[#3b3182] text-white px-14 py-6 rounded-full text-2xl font-black transition-all shadow-2xl shadow-[#4A3E9E]/20">
            Book a Strategy Call
          </button>
        </div>

        <div className="flex justify-center mb-32 group hover:scale-[1.01] transition-transform duration-500">
          <LogoStacked />
        </div>

        <div className="pt-14 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-slate-300 font-bold text-[0.65rem] uppercase tracking-[0.25em]">
            © 2026 AutomateMedia. All rights reserved.
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <a href="mailto:hello@automatemedia.com" className="text-slate-400 font-black text-[0.7rem] hover:text-[#4A3E9E] transition-colors tracking-tight">hello@automatemedia.com</a>
            <div className="flex space-x-8">
              <a href="#" className="text-slate-400 font-black text-[0.7rem] hover:text-[#4A3E9E] transition-colors uppercase tracking-widest">Privacy</a>
              <a href="#" className="text-slate-400 font-black text-[0.7rem] hover:text-[#4A3E9E] transition-colors uppercase tracking-widest">Terms</a>
              <a href="#" className="text-slate-400 font-black text-[0.7rem] hover:text-[#4A3E9E] transition-colors uppercase tracking-widest">LinkedIn</a>
              <a href="#" className="text-slate-400 font-black text-[0.7rem] hover:text-[#4A3E9E] transition-colors uppercase tracking-widest">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
