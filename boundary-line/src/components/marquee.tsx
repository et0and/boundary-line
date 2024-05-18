import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 50 }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const x = useMotionValue(0);

  const containerWidth = containerRef.current?.offsetWidth ?? 0;

  const marqueeRange = useTransform(
    x,
    [-containerWidth, textWidth],
    [textWidth, 0]
  );

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  React.useEffect(() => {
    let timeout: number;

    const animate = () => {
      timeout = window.setTimeout(() => {
        x.set(x.get() + speed / 60);
        animate();
      }, 1000 / 60);
    };

    animate();

    return () => window.clearTimeout(timeout);
  }, [speed, x]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      <motion.span ref={textRef} style={{ x: marqueeRange }} className="inline-block">
        {text}
      </motion.span>
    </div>
  );
};

export default Marquee;