import { useRef, useState, type FC, type MouseEvent } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position relative to the element
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for magnetic effect - delicate settings
  const springConfig = { damping: 20, stiffness: 200 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Subtle magnetic pull (divided by 8 for a very delicate effect)
    x.set((clientX - centerX) / 8);
    y.set((clientY - centerY) / 8);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const brandGreen = '#12C841';
  const white = '#FFFFFF';

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-start ${className}`}
      style={{ cursor: 'pointer' }}
    >
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full h-full flex items-center justify-start"
      >
        <svg
          version="1.1"
          id="Layer_1"
          viewBox="0 0 520 160.17"
          className="h-full w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style type="text/css">
            {`
              @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap');
              .logo-text { 
                font-family: 'Roboto Condensed', sans-serif; 
                font-weight: 400; 
                transition: fill 0.3s ease;
              }
              .logo-symbol {
                transition: fill 0.3s ease;
              }
            `}
          </style>
          
          {/* Sygnet - Part 1 (White) */}
          <motion.path
            className="logo-symbol"
            style={{ fill: isHovered ? brandGreen : white }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            d="m 142.23505,95.03 c 0.71,33.05 -26.6,62.57 -61.820004,64.42 -17.26,0.9 -32.62,-5 -43.68,-15.19 -4.76,-4.38 -8.72,-9.56 -11.7,-15.34 l 0.8,-0.54 c 3.63,5.37 8.67,9.95 14.98,13.25 4.06,2.13 8.64,3.73 13.7,4.67 34.2,6.34 77.370004,-15.98 80.530004,-55.97 0.93,-11.77 -0.6,-23.21 -6.11,-30.32 11.04,6.96 13,21.56 13.3,35.02 z"
          />

          {/* Sygnet: The "Mark Sign" Polygon (Green) - Smooth Wipe Reveal */}
          <motion.polygon
            style={{ fill: brandGreen }}
            points="600,298.78 464.68,380.75 404.61,331.53 458.25,428.64 "
            transform="translate(-392.31495,-298.78)"
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
          />

          {/* Sygnet Accents (Green) */}
          <motion.path
            style={{ fill: brandGreen }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            d="m 28.325046,70.4 c 0,0 -17.79,28.93 2.57,56.25 0,0 -6.41,-17.49 6.43,-40.18 z"
          />
          <motion.path
            style={{ fill: brandGreen }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            d="m 37.325046,58.18 c 0,0 40.5,-40.18 86.790004,-3.54 l -8.04,5.36 c 0,0 -29.570004,-22.4 -72.320004,13.6 z"
          />

          {/* Logo Text - gron */}
          <motion.text
            className="logo-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ 
              fill: isHovered ? brandGreen : white,
              fontSize: '124px',
              letterSpacing: '-7px'
            }}
            x="146"
            y="133.4749"
          >gron</motion.text>

          {/* Logo Text - QA */}
          <motion.text
            className="logo-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ 
              fill: brandGreen,
              fontSize: '119px',
              letterSpacing: '-5px'
            }}
            x="339"
            y="133.4749"
          >QA</motion.text>
        </svg>
      </motion.div>
    </div>
  );
};

export default Logo;
