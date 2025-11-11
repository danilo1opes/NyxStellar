import { useState, useEffect } from 'react';
import { planetsData } from '../../data/planets';
import { AnimatePresence, motion } from 'motion/react';
import PlanetCard from './PlanetCard';
import OrbitalRing from './PlanetOrbitalRing';
import { useCosmicGlow } from '../../hooks/useCosmicGlow';
import {
  titleVariants,
  infoVariants,
  planetaCentral,
  planetasBtt,
} from '../../animations';
import PlanetLoader from './PlanetLoader';

function PlanetCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { GlowElement } = useCosmicGlow(planetsData[currentIndex].color);

  // Preload das imagens
  useEffect(() => {
    const imagePromises = planetsData.map((planet) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = planet.svgPath;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, []);

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

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // PlanetLoader
  if (!imagesLoaded) return <PlanetLoader message="Explorando o universo..." />;

  return (
    <div className="container md:pt-12 relative">
      <GlowElement />

      {/* Display Planeta */}
      <div className="relative w-full h-[500px] md:h-[700px] lg:h-[1200px]">
        {/* 3D Orbital - Apenas Desktop */}
        <div
          className="hidden lg:block absolute inset-0 z-0"
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
        <div className="absolute -left-4 md:left-0 lg:-left-15 lg:-top-40 inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={visible.center.id}
              variants={planetaCentral}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`w-[380px] h-[380px] md:w-[400px] md:h-[400px] lg:w-[1000px] lg:h-[1000px] flex items-center justify-center ${visible.center.dropShadow}`}
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src={visible.center.svgPath}
                alt={visible.center.name}
                loading="eager"
                decoding="async"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                style={{
                  opacity: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botão Esquerda */}
        <button
          onClick={prev}
          className="absolute -left-10 top-68 md:left-4 lg:left-12 xl:-left-20 md:top-1/2 -translate-y-1/2 z-20 cursor-pointer touch-manipulation"
          aria-label="Planeta anterior"
        >
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <motion.div
              variants={planetasBtt}
              initial="rest"
              animate="rest"
              whileTap="tap"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-[180px] lg:h-[180px]"
            >
              <img
                src={visible.left.svgPath}
                alt={visible.left.name}
                loading="lazy"
                decoding="async"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                style={{
                  opacity: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
            <h3 className="text-snow font-only text-xs md:text-sm lg:text-base text-center">
              {visible.left.name}
            </h3>
          </div>
        </button>

        {/* Botão Direita */}
        <button
          onClick={next}
          className="absolute -right-10 top-68 md:right-4 lg:right-12 xl:-right-20 md:top-1/2 -translate-y-1/2 z-20 cursor-pointer touch-manipulation"
          aria-label="Próximo planeta"
        >
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <motion.div
              variants={planetasBtt}
              initial="rest"
              animate="rest"
              whileTap="tap"
              className="w-16 h-16 md:w-24 md:h-24 lg:w-[180px] lg:h-[180px]"
            >
              <img
                src={visible.right.svgPath}
                alt={visible.right.name}
                loading="lazy"
                decoding="async"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                style={{
                  opacity: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
            <h3 className="text-snow font-only text-xs md:text-sm lg:text-base text-center">
              {visible.right.name}
            </h3>
          </div>
        </button>
      </div>

      {/* Informações */}
      <div className="relative lg:absolute lg:inset-x-0 lg:top-0 z-20 mt-4 lg:mt-0 lg:pointer-events-none">
        <div className="flex flex-col items-center lg:pt-8 lg:md:pt-14 lg:pointer-events-auto">
          {/* Nome dos Planetas */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={visible.center.id}
              style={{
                background: 'var(--gradient-title)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="text-3xl md:text-5xl lg:text-8xl 2xl:text-9xl font-light mb-4 md:mb-6 lg:mb-8 tracking-[0.5rem] md:tracking-[0.8rem] lg:tracking-[1rem] text-center uppercase"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {visible.center.name}
            </motion.h2>
          </AnimatePresence>

          {/* Cards de Informação */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`info${visible.center.id}`}
              className="flex flex-wrap mb-16 md:mb-0 md:grid md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-4 md:gap-6 lg:gap-12 xl:gap-16 max-w-7xl px-4 w-full"
              variants={infoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PlanetCard label="GALÁXIA" value={visible.center.galaxy} />
              <PlanetCard label="DIÂMETRO" value={visible.center.diameter} />
              <PlanetCard
                label="DIA TERRESTRE"
                value={visible.center.dayLength}
              />
              <PlanetCard
                label="TEMPERATURA"
                value={visible.center.temperature}
              />
              <PlanetCard label="CLIMA" value={visible.center.climate} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default PlanetCarousel;
