
import React from 'react';

const SocialProof: React.FC = () => {
  const brands = [
    "MEDIA BRAND 1", "SPORTS NETWORK", "CREATOR COLLECTIVE", "NEWS GROUP", "DIGITAL PUBLISHER"
  ];

  return (
    <section className="py-28 border-t border-slate-50 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">SOCIAL PROOF</h3>
          <h2 className="text-[2.2rem] font-black text-slate-900 tracking-tight">Trusted by modern media operators</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {brands.map((b, i) => (
            <div key={i} className="flex flex-col items-center">
               <div className="text-[0.6rem] font-black tracking-[0.2em] text-slate-900 leading-none mb-1">{b}</div>
               <div className="text-[0.5rem] text-slate-400 font-bold uppercase">(Logo Placeholder)</div>
            </div>
          ))}
        </div>

        <p className="text-center mt-20 text-slate-400 font-bold text-[0.9rem]">
          Working with sports & creator media brands in private.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
