export interface PlanetData {
  id: string;
  name: string;
  galaxy: string;
  diameter: string;
  dayLength: string;
  temperature: string;
  climate: string;
  svgPath: string;
  color: string;
  dropShadow: string;
}

export const planetsData: PlanetData[] = [
  {
    id: 'obscyra',
    name: 'Obscyra',
    galaxy: 'Andrômeda-IV',
    diameter: '16,400 km',
    dayLength: '26 Horas Terrestres',
    temperature: '-20°C a 0°C',
    climate: 'Polar',
    svgPath: '/assets/planet-purple.svg',
    color: '#921BBC',
    dropShadow: 'drop-shadow-[0_0_77.8626px_rgba(128,0,255,0.6)]',
  },
  {
    id: 'lunareth',
    name: 'Lunareth',
    galaxy: 'Andrômeda-IV',
    diameter: '11,540 km',
    dayLength: '56 Horas Terrestres',
    temperature: '10°C a 30°C',
    climate: 'Tropical',
    svgPath: '/assets/planet-orange.svg',
    color: '#8E7416',
    dropShadow:
      'drop-shadow-[0_0_90px_rgba(255,100,40,0.7)] drop-shadow-[0_0_40px_rgba(255,160,90,0.5)]',
  },
  {
    id: 'eclune',
    name: 'Eclune',
    galaxy: 'Sombrero',
    diameter: '56,780 km',
    dayLength: '12 Horas Terrestres',
    temperature: '60°C a 90°C',
    climate: 'Tropical',
    svgPath: '/assets/planet-green.svg',
    color: '#067A2F',
    dropShadow:
      'drop-shadow-[0_0_100px_rgba(40,255,200,0.9)] drop-shadow-[0_0_50px_rgba(10,180,120,0.7)] drop-shadow-[0_0_20px_rgba(160,255,230,0.9)]',
  },
  {
    id: 'abyssal',
    name: 'Abyssal',
    galaxy: 'Virgo A',
    diameter: '120,780 km',
    dayLength: '4 Horas Terrestres',
    temperature: '10°C a 40°C',
    climate: 'Temperado',
    svgPath: '/assets/planet-blue.svg',
    color: '#1A75FF',
    dropShadow:
      'drop-shadow-[0_0_90px_rgba(80,180,255,0.9)] drop-shadow-[0_0_45px_rgba(40,120,255,0.7)]',
  },
];
