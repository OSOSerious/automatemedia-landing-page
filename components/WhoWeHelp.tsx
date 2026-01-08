
import React from 'react';

const WhoWeHelp: React.FC = () => {
  const categories = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#5B6FAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Sports & news media brands"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#5B6FAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Creator networks and multi-page operators"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#5B6FAD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "In-house media teams at fast-growing companies"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">WHO WE HELP</h3>
          <h2 className="text-[2.2rem] font-black text-[#333333] tracking-tight">Built for high-output media teams</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <div key={i} className="flex items-center p-7 bg-[#F9F9F9] border border-slate-100 rounded-[2rem] hover:bg-[#D3E0F5]/30 hover:shadow-2xl hover:shadow-[#4A3E9E]/5 hover:border-[#4A3E9E]/20 transition-all cursor-default group">
              <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mr-6 shadow-sm group-hover:scale-105 transition-transform">
                {c.icon}
              </div>
              <p className="text-[1.05rem] font-black text-[#333333] leading-snug">{c.title}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-14 text-slate-400 font-bold italic text-[0.9rem]">
          These teams already produce at scale — we remove the friction.
        </p>
      </div>
    </section>
  );
};

export default WhoWeHelp;
