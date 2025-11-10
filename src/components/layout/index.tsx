import { ReactNode } from 'react';
import { Variants } from 'motion';
import { motion } from 'motion/react';
import Navbar from '../common/navbar';

interface LayoutProps {
  children: ReactNode;
}

const imgVariants: Variants = {
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

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <motion.img
        src="/star-animate.svg"
        alt="Stars Background"
        className="absolute top-0 left-0 object-cover opacity-90 animate-fadeStars -z-10"
        variants={imgVariants}
        animate="effect"
        style={{
          width: '60%',
          height: '70%',
        }}
      />
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
}
