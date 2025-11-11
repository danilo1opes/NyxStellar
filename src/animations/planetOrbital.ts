import { Variants } from 'motion/react';

export const orbitalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2.9,
      repeat: Infinity,
      repeatType: 'reverse',
      delay: delay * 0.3,
      ease: 'easeOut',
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};
