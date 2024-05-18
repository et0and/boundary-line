import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 50 }) => {
  const marqueeVariants = {
    animate: {
      x: [0, -1 * 100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="marquee">
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;