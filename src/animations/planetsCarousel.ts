import { Variants } from 'motion/react';

// Animação para o título do planeta
export const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

// Animação para os cards de informação
export const infoVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// Animação para o planeta central
export const planetaCentral: Variants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

// Animação para os botões laterais dos planetas
export const planetasBtt: Variants = {
  rest: {
    scale: 1,
    opacity: 0.7,
  },
  tap: {
    scale: 0.9,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

// Loader
export const spinnerVariants: Variants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
