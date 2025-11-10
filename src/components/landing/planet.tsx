import { PlanetData } from '../../data/planets';
import { motion, Variants } from 'motion/react';

interface PlanetProps {
  planet: PlanetData;
  position: 'left' | 'center' | 'right';
  onClick: () => void;
}

const getVariants = (position: 'left' | 'center' | 'right'): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: position === 'center' ? [0, -15, 0] : [0, -10, 0],
    transition: {
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
      y: {
        duration: position === 'center' ? 5 : 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5 },
  },
});

function Planet({ planet, position, onClick }: PlanetProps) {
  const sizes = {
    left: 140,
    center: 380,
    right: 140,
  };

  const positions = {
    left: { x: '-40%', y: '50%' },
    center: { x: '50%', y: '50%' },
    right: { x: '140%', y: '50%' },
  };

  const size = sizes[position];
  const place = positions[position];

  return (
    <motion.div
      className={`absolute ${
        position === 'center' ? 'cursor-default' : 'cursor-pointer'
      }`}
      style={{
        width: size,
        height: size,
        left: place.x,
        top: place.y,
        transform: 'translate(-50%, -50%)',
        zIndex: position === 'center' ? 10 : 5,
      }}
      onClick={position !== 'center' ? onClick : undefined}
      variants={getVariants(position)}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={position !== 'center' ? { scale: 1.1 } : {}}
    >
      {/* Efeito de Luz */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{
          background: planet.color,
          filter: 'blur(40px)',
        }}
      />

      {/* Planeta em SVG */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          boxShadow: `0 0 ${position === 'center' ? '80' : '40'}px ${
            planet.color
          }`,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${planet.color}dd, ${planet.color}66, ${planet.color}33)`,
          }}
        >
          <img
            src={planet.svgPath}
            alt={planet.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Nomes dos Planetas */}
      {position !== 'center' && (
        <motion.p
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm tracking-widest text-gray-400 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {planet.name}
        </motion.p>
      )}
    </motion.div>
  );
}

export default Planet;
