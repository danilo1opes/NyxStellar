import React from 'react';
import PlanetCard from './PlanetCard';
import OrbitalRing from './PlanetOrbitalRing';
import PlanetLoader from './PlanetLoader';
import { planetsData } from '../../data/planets';
import { AnimatePresence, motion } from 'motion/react';
import { useCosmicGlow } from '../../hooks/useCosmicGlow';
import {
  titleVariants,
  infoVariants,
  planetaCentral,
  planetasBtt,
} from '../../animations';

function PlanetCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const { GlowElement } = useCosmicGlow(planetsData[currentIndex].color);

  // Distância mínima pro swipe
  const minSwipeDistance = 50;

  // Preload das imagens
  React.useEffect(() => {
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

  // Handlers para swipe no mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  React.useEffect(() => {
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
      <div
        className="relative w-full h-[500px] md:h-[700px] lg:h-[1200px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-label="Carrossel de planetas"
        role="region"
      >
        {/* 3D Orbital - Apenas Desktop */}
        <div
          className="hidden lg:block absolute inset-0 z-0"
          style={{
            perspective: '1500px',
            transformStyle: 'preserve-3d',
          }}
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            {/* Anéis */}
            <OrbitalRing
              key={`ring-600-${visible.center.id}`}
              radius={600}
              delay={0}
              rotation={65}
            />
            <OrbitalRing
              key={`ring-700-${visible.center.id}`}
              radius={700}
              delay={0.5}
              rotation={65}
            />
            <OrbitalRing
              key={`ring-800-${visible.center.id}`}
              radius={800}
              delay={1}
              rotation={65}
            />
            <OrbitalRing
              key={`ring-900-${visible.center.id}`}
              radius={900}
              delay={1.5}
              rotation={65}
            />
            <OrbitalRing
              key={`ring-1000-${visible.center.id}`}
              radius={1000}
              delay={2}
              rotation={65}
            />
            <OrbitalRing
              key={`ring-1100-${visible.center.id}`}
              radius={1100}
              delay={2.5}
              rotation={65}
            />
          </AnimatePresence>
        </div>

        {/* Planeta Central */}
        <div className="absolute lg:-left-5 lg:-top-5 2xl:-top-8 inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
          <AnimatePresence mode="wait">
            <motion.figure
              key={visible.center.id}
              variants={planetaCentral}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`w-[500px] h-[500px] md:w-[400px] md:h-[400px] lg:w-[1000px] lg:h-[1000px] 2xl:w-[1100px] 2xl:h-[1100px] flex items-center justify-center ${visible.center.dropShadow}`}
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src={visible.center.svgPath}
                alt={visible.center.name}
                title={`${visible.center.name} - ${visible.center.climate}`}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                itemProp="image"
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                style={{
                  opacity: 0,
                  width: '76.5%',
                  height: '92.5%',
                  maxWidth: '1018px',
                  maxHeight: '1018px',
                  objectFit: 'contain',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  display: 'block',
                }}
              />
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Botão Esquerda */}
        <button
          onClick={prev}
          className="hidden md:block absolute left-4 lg:left-12 xl:-left-20 top-1/2 -translate-y-1/2 z-20 cursor-pointer touch-manipulation"
          aria-label={`Ver planeta anterior: ${visible.left.name}`}
          title={`Planeta ${visible.left.name}`}
        >
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <motion.div
              variants={planetasBtt}
              initial="rest"
              animate="rest"
              whileTap="tap"
              className="w-24 h-24 lg:w-[180px] lg:h-[180px]"
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
            <h3 className="text-snow font-only text-sm lg:text-base text-center">
              {visible.left.name}
            </h3>
          </div>
        </button>

        {/* Botão Direita */}
        <button
          onClick={next}
          className="hidden md:block absolute right-4 lg:right-12 xl:-right-20 top-1/2 -translate-y-1/2 z-20 cursor-pointer touch-manipulation"
          aria-label={`Ver próximo planeta: ${visible.right.name}`}
          title={`Planeta ${visible.right.name}`}
        >
          <div className="flex flex-col items-center gap-1 md:gap-2">
            <motion.div
              variants={planetasBtt}
              initial="rest"
              animate="rest"
              whileTap="tap"
              className="w-24 h-24 lg:w-[180px] lg:h-[180px]"
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
            <h3 className="text-snow font-only text-sm lg:text-base text-center">
              {visible.right.name}
            </h3>
          </div>
        </button>

        {/* Indicadores - Apenas Mobile */}
        <div
          className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"
          aria-label="Navegação de planetas"
        >
          {planetsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-snow w-8' : 'bg-snow/30'
              }`}
              aria-label={`Ir para planeta ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Informações */}
      <div
        className="relative lg:absolute lg:inset-x-0 lg:top-0 z-20 mt-4 lg:mt-0 lg:pointer-events-none"
        aria-label="Informações do planeta"
      >
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
              className="flex flex-wrap mb-16 lg:flex lg:flex-wrap justify-center md:mb-12 lg:mb-0 gap-4 md:gap-6 lg:gap-12 xl:gap-16 max-w-7xl px-4 w-full"
              variants={infoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="list"
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
