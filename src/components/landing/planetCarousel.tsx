import React from 'react';
import { planetsData } from '../../data/planets';
import { AnimatePresence, motion, Variants } from 'motion/react';
import InfoCard from './PlanetCard';
import OrbitalRing from './orbitalRing';
import { useCosmicGlow } from '../../hooks/useCosmicGlow';

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.9 },
  },
  exit: { opacity: 0, y: 20 },
};

const infoVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.9, delay: 0.1 },
  },
  exit: { opacity: 0 },
};

const planetaCentral: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    rotate: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 20,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    rotate: 0,
    transition: { duration: 0.6 },
  },
};

const planetasBtt: Variants = {
  rest: {
    scale: 0.8,
    opacity: 0.7,
    filter: 'brightness(0.8)',
    rotate: 0,
  },
  hover: {
    scale: 0.9,
    opacity: 1,
    filter: 'brightness(1.1)',
    rotate: 15,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 1.1,
    opacity: 1,
    filter: 'brightness(1.3) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))',
    rotate: -10,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    filter: 'brightness(0.6)',
    rotate: 30,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

function PlanetCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const { GlowElement } = useCosmicGlow(planetsData[currentIndex].color);

  function getVisiblePlanets() {
    const total = planetsData.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const rightIndex = (currentIndex + 1) % total;

    return {
      left: planetsData[leftIndex],
      center: planetsData[currentIndex],
      right: planetsData[rightIndex],
    };
  }

  const visible = getVisiblePlanets();

  function next() {
    setCurrentIndex((prev) => (prev + 1) % planetsData.length);
  }

  function prev() {
    setCurrentIndex(
      (prev) => (prev - 1 + planetsData.length) % planetsData.length,
    );
  }

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="container md:pt-12 relative">
      <GlowElement />
      {/* Display Planeta */}
      <div className="relative w-full h-[600px] md:h-[1200px]">
        {/* 3D Orbital*/}
        <div
          className="absolute inset-0 z-0"
          style={{
            perspective: '1500px',
            transformStyle: 'preserve-3d',
          }}
        >
          <OrbitalRing radius={600} delay={0} rotation={65} />
          <OrbitalRing radius={700} delay={0.5} rotation={65} />
          <OrbitalRing radius={800} delay={1} rotation={65} />
          <OrbitalRing radius={900} delay={1.5} rotation={65} />
          <OrbitalRing radius={1000} delay={2} rotation={65} />
          <OrbitalRing radius={1100} delay={2.5} rotation={65} />
        </div>

        {/* Planeta Central */}
        <div className="absolute inset-0 flex -top-50 -left-13 items-center justify-center z-10 pointer-events-none">
          <motion.img
            key={visible.center.id}
            src={visible.center.svgPath}
            width={1000}
            height={1000}
            alt={visible.center.name}
            variants={planetaCentral}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`max-w-full max-h-full object-contain ${visible.center.dropShadow}`}
          />
        </div>

        {/* Planetas Clicaveis Esquerda */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 group cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <div className="flex flex-col items-center gap-2">
              <motion.img
                src={visible.left.svgPath}
                width={180}
                height={180}
                alt={`Previous: ${visible.left.name}`}
                className="group-hover:scale-110 transition-all duration-300"
                variants={planetasBtt}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="tap"
                exit="exit"
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.6}
                dragMomentum={false}
              />
              <h3 className="text-snow font-only text-base md:text-lg text-center">
                {visible.left.name}
              </h3>
            </div>
          </AnimatePresence>
        </button>

        {/* Planetas Clicaveis Direita */}
        <button
          onClick={next}
          className="absolute right-4 md:right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 group cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <div className="flex flex-col items-center gap-2">
              <motion.img
                src={visible.right.svgPath}
                width={180}
                height={180}
                alt={`Next: ${visible.right.name}`}
                className="group-hover:scale-110 transition-all duration-300"
                variants={planetasBtt}
                initial="rest"
                animate="rest"
                whileHover="hover"
                whileTap="tap"
                exit="exit"
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.4}
                dragMomentum={false}
              />
              <h3 className="text-snow font-only text-base md:text-lg text-center">
                {visible.right.name}
              </h3>
            </div>
          </AnimatePresence>
        </button>
      </div>

      {/* Informações */}
      <div className="absolute inset-x-0 top-0 z-20 pointer-events-none">
        <div className="flex flex-col items-center pt-8 md:pt-14 pointer-events-auto">
          {/* Nome dos Planetas */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={visible.center.id}
              style={{
                background: 'var(--gradient-title)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="text-5xl lg:text-8xl 2xl:text-9xl font-light mb-8 tracking-[1rem] text-center uppercase"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {visible.center.name}
            </motion.h2>
          </AnimatePresence>

          {/* Informações */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`info${visible.center.id}`}
              className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16 max-w-7xl px-4"
              variants={infoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <InfoCard label="GALÁXIA" value={visible.center.galaxy} />
              <InfoCard label="DIÂMETRO" value={visible.center.diameter} />
              <InfoCard
                label="DIA TERRESTRE"
                value={visible.center.dayLength}
              />
              <InfoCard
                label="TEMPERATURA MÉDIA"
                value={visible.center.temperature}
              />
              <InfoCard label="CLIMA" value={visible.center.climate} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default PlanetCarousel;
