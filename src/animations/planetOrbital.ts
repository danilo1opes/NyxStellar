import { Variants } from 'motion';

export const orbitalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay },
  }),
};
