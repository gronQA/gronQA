import { useRef, useState, useEffect, type FC, type MouseEvent } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = "" }) => {
  return (
    <div 
      className={`relative flex items-center justify-start group ${className}`}
      style={{ cursor: 'pointer' }}
    >
      <span 
        style={{ 
          fontFamily: '"Roboto Condensed", sans-serif',
          fontWeight: 400,
          fontSize: '2.5rem',
          letterSpacing: '-2px',
          lineHeight: 1
        }}
        className="text-white group-hover:text-brand-green transition-colors duration-300 whitespace-nowrap antialiased"
      >
        &lt;gronka<span className="text-brand-green group-hover:text-brand-green">/</span>&gt;
      </span>
    </div>
  );
};

export default Logo;
