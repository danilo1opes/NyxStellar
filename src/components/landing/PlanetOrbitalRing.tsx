import { motion } from 'motion/react';
import { orbitalVariants } from '../../animations';

interface OrbitalRingProps {
  radius: number;
  delay?: number;
  rotation?: number;
}

export default function OrbitalRing({
  radius,
  delay = 0,
  rotation = 65,
}: OrbitalRingProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: `${radius}px`,
        height: `${radius}px`,
        top: '50%',
        left: '50%',
        marginTop: `-${radius / 2}px`,
        marginLeft: `-${radius / 2}px`,
        borderRadius: '50%',
        border: '1px solid rgba(100, 120, 180, 0.3)',
        transform: `rotateX(${rotation}deg)`,
        transformStyle: 'preserve-3d',
        boxShadow: '0 0 20px rgba(100, 120, 180, 0.15)',
      }}
      variants={orbitalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={delay}
    />
  );
}
