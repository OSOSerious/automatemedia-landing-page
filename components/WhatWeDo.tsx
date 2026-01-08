
import React from 'react';

const WhatWeDo: React.FC = () => {
  const items = [
    {
      title: "Research & Monitoring Automation",
      desc: "Tracks topics, leagues, creators and competitors automatically. Daily or real-time digests for editors.",
      icon: (
        <div className="w-16 h-16 bg-[#D3E0F5]/50 rounded-[1.25rem] flex items-center justify-center text-[#4A3E9E] mb-8 shadow-sm group-hover:bg-[#4A3E9E] group-hover:text-white transition-colors duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      )
    },
    {
      title: "Content Pipeline Automation",
      desc: "Turn clips, links, or news into structured drafts and cross-platform content.",
      icon: (
        <div className="w-16 h-16 bg-[#D3E0F5]/50 rounded-[1.25rem] flex items-center justify-center text-[#4A3E9E] mb-8 shadow-sm group-hover:bg-[#4A3E9E] group-hover:text-white transition-colors duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
        </div>
      )
    },
    {
      title: "Internal AI Tools & Dashboards",
      desc: "Private tools that centralize ideas, drafts, and insights, tailored to each team.",
      icon: (
        <div className="w-16 h-16 bg-[#D3E0F5]/50 rounded-[1.25rem] flex items-center justify-center text-[#4A3E9E] mb-8 shadow-sm group-hover:bg-[#4A3E9E] group-hover:text-white transition-colors duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </div>
      )
    }
  ];

  return (
    <section className="py-28 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">WHAT WE DO</h3>
          <h2 className="text-5xl font-black text-[#333333] leading-tight tracking-tight">Custom AI workflows, <br /> built around your team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="p-12 rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(74,62,158,0.1)] hover:-translate-y-4 transition-all duration-500 group">
              {item.icon}
              <h4 className="text-[1.6rem] font-black text-[#333333] mb-5 leading-tight group-hover:text-[#4A3E9E] transition-colors">{item.title}</h4>
              <p className="text-slate-500 font-semibold leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
