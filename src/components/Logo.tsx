import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'inverted';
  onClick?: () => void;
}

export function Logo({ className = '', variant = 'default', onClick }: LogoProps) {
  // Embedded logo as text with professional styling to match the brand
  // This will work on all environments including Netlify deployment
  return (
    <div 
      className={`inline-flex items-center gap-3 ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="flex flex-col">
        <div className={`font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-none ${
          variant === 'inverted' ? 'text-white' : 'text-gray-900'
        }`}>
          CR8
        </div>
        <div className={`font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase ${
          variant === 'inverted' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          SOLUTIONS
        </div>
      </div>
    </div>
  );
}
