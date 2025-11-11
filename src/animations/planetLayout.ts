import { Variants } from 'motion/react';

export const starVariants: Variants = {
  twinkle: (i: number) => ({
    opacity: [0.3, 1, 0.3],
    filter: [
      'brightness(0.8) blur(0px)',
      'brightness(1.8) blur(1px)',
      'brightness(0.8) blur(0px)',
    ],
    transition: {
      duration: 2 + Math.random() * 3,
      delay: i * 0.1 + Math.random() * 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  }),
};
