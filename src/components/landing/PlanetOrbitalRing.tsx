import { motion, Variants } from 'motion/react';
import { orbitalVariants } from '../../animations';

interface Orbital {
  radius: number;
  delay?: number;
  rotation?: number;
}

function OrbitalRing({ radius, delay = 0, rotation = 65 }: Orbital) {
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
        border: '1px solid rgba(100, 120, 180, 0.25)',
        transform: `rotateX(${rotation}deg)`,
        transformStyle: 'preserve-3d',
      }}
      variants={orbitalVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    />
  );
}

export default OrbitalRing;
