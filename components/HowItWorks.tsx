
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Discovery",
      desc: "Map workflows + opportunities",
      icon: <svg className="w-11 h-11 text-[#5B6FAD] group-hover:text-[#4A3E9E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.258 0 2.443.231 3.536.652M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    },
    {
      num: 2,
      title: "Prototype",
      desc: "Deliver one quick win automation",
      icon: <svg className="w-11 h-11 text-[#5B6FAD] group-hover:text-[#4A3E9E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      num: 3,
      title: "Scale",
      desc: "Expand into full AI operations",
      icon: <svg className="w-11 h-11 text-[#5B6FAD] group-hover:text-[#4A3E9E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-28">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">HOW IT WORKS</h3>
          <h2 className="text-[2.6rem] font-black text-[#333333] tracking-tight">Simple, high-impact process</h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-20">
          {/* Flowing Connector Lines - using Secondary Blue */}
          <div className="hidden md:block absolute top-[75px] left-[15%] right-[15%] h-[2px] z-0">
             <svg className="w-full h-full overflow-visible">
                <line x1="0" y1="1" x2="100%" y2="1" stroke="#D3E0F5" strokeWidth="2" strokeDasharray="12,12" className="animate-flow" />
             </svg>
          </div>

          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 group">
              <div className="w-36 h-36 bg-white rounded-full border border-slate-100 shadow-2xl shadow-slate-100 flex items-center justify-center mb-10 group-hover:border-[#4A3E9E] group-hover:shadow-[#4A3E9E]/10 transition-all duration-500">
                {s.icon}
              </div>
              <div className="absolute top-[115px] w-9 h-9 bg-[#D3E0F5] border-4 border-white rounded-full flex items-center justify-center text-[#5B6FAD] font-black text-sm group-hover:bg-[#4A3E9E] group-hover:text-white transition-all shadow-md group-hover:scale-110">
                {s.num}
              </div>
              <h4 className="text-2xl font-black text-[#333333] mb-3 group-hover:text-[#4A3E9E] transition-colors">{s.title}</h4>
              <p className="text-slate-500 font-bold text-lg max-w-[200px]">{s.desc}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[70px] -right-4 translate-x-1/2 opacity-30">
                   <svg className="w-8 h-8 text-[#5B6FAD] group-hover:text-[#4A3E9E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <button className="bg-[#4A3E9E] hover:bg-[#3b3182] text-white px-12 py-5 rounded-full text-xl font-black relative overflow-hidden group">
            <span className="relative z-10">Book a Strategy Call</span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
