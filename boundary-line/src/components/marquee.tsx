import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 50 }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLSpanElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const x = useMotionValue(0);

  const marqueeRange = useTransform(
    x,
    [0, textWidth + containerWidth],
    [0, -textWidth]
  );

  useLayoutEffect(() => {
    if (containerRef.current && textRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  React.useEffect(() => {
    let timeout: number;

    const animate = () => {
      timeout = window.setTimeout(() => {
        x.set(x.get() - speed / 60);

        // Check if the text has moved out of the container
        if (x.get() <= -textWidth) {
          // Reset the x value to loop the text
          x.set(containerWidth);
        }

        animate();
      }, 1000 / 60);
    };

    animate();

    return () => window.clearTimeout(timeout);
  }, [speed, x, textWidth, containerWidth]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap w-full">
      <motion.span
        ref={textRef}
        style={{ x: marqueeRange }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </div>
  );
};

export default Marquee;