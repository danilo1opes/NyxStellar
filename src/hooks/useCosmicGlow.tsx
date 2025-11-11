import React from 'react';
import { motion } from 'motion/react';
import { colorVariants } from '../animations';

export function useCosmicGlow(color: string) {
  const [glowColor, setGlowColor] = React.useState(color);
  const [isMobile, setIsMobile] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    // Debounce
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setGlowColor(color);
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [color]);

  function GlowElement() {
    // Não renderiza no mobile
    if (isMobile) return null;

    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={colorVariants}
          initial="hidden"
          animate="visible"
          style={{
            willChange: 'opacity',
          }}
        >
          {/* Glow Superior Direito - Otimizado */}
          <div
            className="absolute -top-32 -right-32 rounded-full"
            style={{
              width: '600px',
              height: '600px',
              background: `radial-gradient(circle, ${glowColor}40 0%, ${glowColor}15 40%, transparent 70%)`,
              filter: 'blur(80px)',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden' as const,
            }}
          />

          {/* Glow Superior Esquerdo - Otimizado */}
          <div
            className="absolute -top-60 -left-60 rounded-full"
            style={{
              width: '600px',
              height: '600px',
              background: `radial-gradient(circle, ${glowColor}50 0%, ${glowColor}20 50%, transparent 80%)`,
              filter: 'blur(100px)',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden' as const,
            }}
          />
        </motion.div>
      </div>
    );
  }

  return { GlowElement };
}
