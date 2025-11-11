import { motion } from 'motion/react';
import { starVariants } from '../../animations';

const TOTAL_STARS = 80;

export default function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {Array.from({ length: TOTAL_STARS }).map((_, i) => {
        const size = Math.random() * 3 + 1; // 1 a 4px
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 2 + Math.random() * 4;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              boxShadow: '0 0 4px rgba(255,255,255,0.8)',
            }}
            custom={i}
            variants={starVariants}
            initial="twinkle"
            animate="twinkle"
          />
        );
      })}
    </div>
  );
}
