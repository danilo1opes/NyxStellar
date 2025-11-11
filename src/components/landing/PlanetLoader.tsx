import { motion } from 'motion/react';
import { spinnerVariants } from '../../animations';

interface PlanetLoaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-12 h-12 border-2',
  md: 'w-16 h-16 md:w-24 md:h-24 border-4',
  lg: 'w-24 h-24 md:w-32 md:h-32 border-4 md:border-6',
};

function PlanetLoader({
  message = 'Carregando planetas...',
  size = 'md',
}: PlanetLoaderProps) {
  return (
    <div className="container md:pt-12 relative">
      <div className="relative w-full h-[500px] md:h-[700px] lg:h-[1200px] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className={`${sizeClasses[size]} border-snow/20 border-t-snow rounded-full mx-auto mb-4`}
            variants={spinnerVariants}
            animate="spin"
          />
          <p className="text-white/60 text-sm md:text-base">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default PlanetLoader;
