
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 flex items-center ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <div className="transition-transform duration-300 active:scale-95">
          <Logo variant="horizontal" size="md" />
        </div>

        <div className="flex items-center">
          <button className="bg-[#4A3E9E] hover:bg-[#3b3182] text-white px-9 py-4 rounded-full text-base font-black tracking-tight shadow-lg shadow-[#4A3E9E]/10 transition-all active:scale-95">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
