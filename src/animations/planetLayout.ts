import { Variants } from "motion";

export const imgVariants: Variants = {
  effect: {
    opacity: [5, 0.3, 5],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};