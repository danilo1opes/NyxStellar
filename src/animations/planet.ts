import { Variants } from 'motion';

// Animação Planet Position
export const getPlanetVariants = (
  position: 'left' | 'center' | 'right',
): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: position === 'center' ? [0, -15, 0] : [0, -10, 0],
    transition: {
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
      y: {
        duration: position === 'center' ? 5 : 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5 },
  },
});
