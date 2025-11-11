import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { imgVariants } from '../../animations';
import Navbar from '../common/navbar';
import Footer from '../common/footer';

interface LayoutProps {
  children: ReactNode;
}

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
      <Footer />
    </div>
  );
}
