
import React from 'react';

export const BrandIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* The main 'A' frame */}
    <path 
      d="M28 85L48 20H52L72 85H62L58 70H42L38 85H28Z" 
      fill="#4A3E9E" 
    />
    {/* The wavy crossbar with gradient as seen in screenshots */}
    <path 
      d="M22 65C35 65 45 45 78 55V45C45 35 35 55 22 55V65Z" 
      fill="url(#wave-grad)" 
    />
    <defs>
      <linearGradient id="wave-grad" x1="22" y1="45" x2="78" y2="65" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D3E0F5" />
        <stop offset="1" stopColor="#4A3E9E" />
      </linearGradient>
    </defs>
  </svg>
);

export const Logo: React.FC<{ variant?: 'horizontal' | 'stacked', size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  variant = 'horizontal', 
  size = 'md' 
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-3xl lg:text-[2.2rem]',
    lg: 'text-5xl lg:text-[3.5rem]',
    xl: 'text-6xl lg:text-[4.5rem]'
  };

  if (variant === 'stacked') {
    return (
      <div className="flex flex-col items-center gap-4 group cursor-default">
        <BrandIcon className={`${iconSizes[size]} transition-transform duration-500 group-hover:scale-110`} />
        <span className={`${textSizes[size]} font-[900] text-[#333333] tracking-[-0.05em] leading-none`}>
          AutomateMedia
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 group cursor-default">
      <BrandIcon className={`${iconSizes[size]} transition-transform duration-500 group-hover:scale-110`} />
      <span className={`${textSizes[size]} font-[900] text-[#333333] tracking-[-0.05em] leading-none`}>
        AutomateMedia
      </span>
    </div>
  );
};
