import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 50 }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const containerWidth = containerRef.current?.offsetWidth ?? 0;
  const textWidth = React.useMemo(() => {
    const span = document.createElement('span');
    span.textContent = text;
    document.body.appendChild(span);
    const width = span.offsetWidth;
    document.body.removeChild(span);
    return width;
  }, [text]);

  const marqueeRange = useTransform(
    x,
    [0, textWidth + containerWidth],
    [0, -textWidth]
  );

  React.useEffect(() => {
    let timeout: number;

    const animate = () => {
      timeout = window.setTimeout(() => {
        x.set(x.get() - speed / 60);
        animate();
      }, 1000 / 60);
    };

    animate();

    return () => window.clearTimeout(timeout);
  }, [speed, x]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      <motion.span style={{ x: marqueeRange }} className="inline-block">
        {text}
      </motion.span>
    </div>
  );
};

export default Marquee;