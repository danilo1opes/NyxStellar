'use client';
import React from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';

const colorVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.6 },
  },
};

export function useCosmicGlow(color: string) {
  const [glowColor, setGlowColor] = React.useState(color);

  React.useEffect(() => {
    setGlowColor(color);
  }, [color]);

  function GlowElement() {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={glowColor}
            className="absolute inset-0"
            variants={colorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Glow no Canto Superior Direito */}
            <div
              className="absolute -top-32 -right-32 rounded-full"
              style={{
                width: '700px',
                height: '700px',
                background: `radial-gradient(circle, ${glowColor}50 0%, ${glowColor}20 40%, transparent 70%)`,
                filter: 'blur(100px)',
              }}
            />

            {/* Glow Adicional Superior Esquerdo */}
            <div
              className="absolute -top-60 -left-60 rounded-full"
              style={{
                width: '700px',
                height: '700px',
                background: `radial-gradient(circle, ${glowColor}70 0%, ${glowColor}30 50%, transparent 80%)`,
                filter: 'blur(130px)',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return { GlowElement };
}
