import { DataPoint } from '../types';

export const SPEED_OF_LIGHT = 299792.458;
export const GRAVITATIONAL_CONSTANT = 6.67430e-11;
export const SOLAR_MASS = 1.989e30;
export const EARTH_MASS = 5.972e24;
export const EARTH_RADIUS = 6371;
export const SOLAR_RADIUS = 695700;

export const calculateGamma = (velocity: number): number => {
  const vFraction = velocity / SPEED_OF_LIGHT;
  if (vFraction >= 1) return 320;
  if (vFraction <= 0) return 1;

  const gamma = 1 / Math.sqrt(1 - vFraction * vFraction);
  return Math.min(gamma, 320);
};

export const calculateVelocity = (gamma: number): number => {
  if (gamma <= 1) return 0;
  if (gamma >= 320) return SPEED_OF_LIGHT * 0.99999;

  const vFraction = Math.sqrt(1 - 1 / (gamma * gamma));
  return vFraction * SPEED_OF_LIGHT;
};

export const generateVelocityToGammaData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const numPoints = 1000;

  for (let i = 0; i <= numPoints; i++) {
    const velocityFraction = i / numPoints;
    const velocity = velocityFraction * SPEED_OF_LIGHT;
    const gamma = calculateGamma(velocity);
    data.push({ x: velocity, y: gamma });
  }

  return data;
};

export const generateGammaToVelocityData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  const maxGamma = 320;
  const numPoints = 1000;

  for (let i = 0; i <= numPoints; i++) {
    const gamma = 1 + (i / numPoints) * (maxGamma - 1);
    const velocity = calculateVelocity(gamma);
    data.push({ x: gamma, y: velocity });
  }

  return data;
};

export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};

export const formatVelocityFraction = (velocity: number): string => {
  const fraction = (velocity / SPEED_OF_LIGHT) * 100;
  return `${fraction.toFixed(4)}%`;
};

export const formatVelocityKmPerSec = (velocity: number, gamma: number): string => {
  if (gamma >= 320) {
    return '299,792';
  }
  return velocity.toLocaleString('fr-FR', { maximumFractionDigits: 0 });
};

export const formatTime = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds.toFixed(2)} secondes`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} minute${minutes > 1 ? 's' : ''} ${secs.toFixed(0)} seconde${secs !== 1 ? 's' : ''}`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} heure${hours > 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    return `${days} jour${days > 1 ? 's' : ''} ${hours} heure${hours !== 1 ? 's' : ''}`;
  } else if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    const days = Math.floor((seconds % 2592000) / 86400);
    return `${months} mois ${days} jour${days !== 1 ? 's' : ''}`;
  } else {
    const years = Math.floor(seconds / 31536000);
    const months = Math.floor((seconds % 31536000) / 2592000);
    return `${years} an${years > 1 ? 's' : ''} ${months} mois`;
  }
};

export const calculateSchwarzschildRadius = (massKg: number): number => {
  const c = SPEED_OF_LIGHT * 1000;
  return (2 * GRAVITATIONAL_CONSTANT * massKg) / (c * c) / 1000;
};

export const calculateTimeDilationAtSurface = (massKg: number, radiusKm: number): number => {
  const rs = calculateSchwarzschildRadius(massKg);

  if (radiusKm <= rs) return 0;

  const factor = 1 - (rs / radiusKm);
  return Math.sqrt(factor);
};

export const calculateTimeDilationAtCenter = (massKg: number, radiusKm: number): number => {
  const rs = calculateSchwarzschildRadius(massKg);

  if (radiusKm <= rs) return 0;

  const factor = 1 - (rs / radiusKm);
  const term1 = (3 / 2) * Math.sqrt(factor);
  const term2 = 1 / 2;

  return term1 - term2;
};

export const calculateTimeDilationAtDistance = (massKg: number, radiusKm: number, distanceKm: number): number => {
  const rs = calculateSchwarzschildRadius(massKg);

  if (radiusKm <= rs) return 0;

  if (distanceKm <= radiusKm) {
    const rRatio = distanceKm / radiusKm;
    const factorSurface = 1 - (rs / radiusKm);
    const term1 = (3 / 2) * Math.sqrt(factorSurface);
    const term2 = (1 / 2) * Math.sqrt(1 - (rs * rRatio * rRatio) / radiusKm);

    return term1 - term2;
  } else {
    return calculateTimeDilationAtSurface(massKg, distanceKm);
  }
};

export const calculateDensity = (massKg: number, radiusKm: number): number => {
  const radiusM = radiusKm * 1000;
  const volume = (4 / 3) * Math.PI * Math.pow(radiusM, 3);
  return massKg / volume;
};

export const formatMass = (massKg: number): string => {
  if (massKg >= SOLAR_MASS) {
    return `${(massKg / SOLAR_MASS).toFixed(2)} masses solaires`;
  } else if (massKg >= EARTH_MASS) {
    return `${(massKg / EARTH_MASS).toFixed(2)} masses terrestres`;
  } else {
    return `${massKg.toExponential(2)} kg`;
  }
};

export const formatRadius = (radiusKm: number): string => {
  if (radiusKm >= SOLAR_RADIUS) {
    return `${(radiusKm / SOLAR_RADIUS).toFixed(2)} rayons solaires`;
  } else if (radiusKm >= EARTH_RADIUS) {
    return `${(radiusKm / EARTH_RADIUS).toFixed(2)} rayons terrestres`;
  } else {
    return `${radiusKm.toLocaleString('fr-FR', { maximumFractionDigits: 0 })} km`;
  }
};

export const formatDensity = (densityKgPerM3: number): string => {
  if (densityKgPerM3 >= 1e15) {
    return `${(densityKgPerM3 / 1e18).toExponential(2)} × 10¹⁸ kg/m³`;
  } else if (densityKgPerM3 >= 1e9) {
    return `${(densityKgPerM3 / 1e9).toExponential(2)} × 10⁹ kg/m³`;
  } else if (densityKgPerM3 >= 1e6) {
    return `${(densityKgPerM3 / 1e6).toExponential(2)} × 10⁶ kg/m³`;
  } else if (densityKgPerM3 >= 1000) {
    return `${(densityKgPerM3 / 1000).toFixed(2)} × 10³ kg/m³`;
  } else {
    return `${densityKgPerM3.toFixed(2)} kg/m³`;
  }
};

export interface RealCelestialBody {
  name: string;
  mass: number;
  radius: number;
  density: number;
  category: 'planète' | 'étoile' | 'géante' | 'supergéante' | 'naine blanche' | 'étoile à neutrons' | 'trou noir';
}

export const REAL_CELESTIAL_BODIES: RealCelestialBody[] = [
  { name: 'Mercure', mass: 3.301e23, radius: 2439.7, density: 5427, category: 'planète' },
  { name: 'Vénus', mass: 4.867e24, radius: 6051.8, density: 5243, category: 'planète' },
  { name: 'Terre', mass: EARTH_MASS, radius: EARTH_RADIUS, density: 5514, category: 'planète' },
  { name: 'Mars', mass: 6.417e23, radius: 3389.5, density: 3933, category: 'planète' },
  { name: 'Jupiter', mass: 1.898e27, radius: 69911, density: 1326, category: 'planète' },
  { name: 'Saturne', mass: 5.683e26, radius: 58232, density: 687, category: 'planète' },
  { name: 'Uranus', mass: 8.681e25, radius: 25362, density: 1271, category: 'planète' },
  { name: 'Neptune', mass: 1.024e26, radius: 24622, density: 1638, category: 'planète' },

  { name: 'Proxima Centauri', mass: SOLAR_MASS * 0.122, radius: 107280, density: 56.8e3, category: 'étoile' },
  { name: 'Barnard\'s Star', mass: SOLAR_MASS * 0.144, radius: 119800, density: 50.3e3, category: 'étoile' },
  { name: 'Wolf 359', mass: SOLAR_MASS * 0.09, radius: 96600, density: 80.5e3, category: 'étoile' },
  { name: 'Lalande 21185', mass: SOLAR_MASS * 0.46, radius: 321000, density: 13.5e3, category: 'étoile' },
  { name: 'Sirius B', mass: SOLAR_MASS * 1.018, radius: 5850, density: 2.67e9, category: 'naine blanche' },
  { name: 'Procyon B', mass: SOLAR_MASS * 0.602, radius: 8600, density: 3.7e8, category: 'naine blanche' },
  { name: '40 Eridani B', mass: SOLAR_MASS * 0.573, radius: 10700, density: 1.8e8, category: 'naine blanche' },
  { name: 'Van Maanen 2', mass: SOLAR_MASS * 0.67, radius: 6700, density: 6.8e8, category: 'naine blanche' },

  { name: 'Alpha Centauri A', mass: SOLAR_MASS * 1.1, radius: 854000, density: 1.51e3, category: 'étoile' },
  { name: 'Alpha Centauri B', mass: SOLAR_MASS * 0.907, radius: 599000, density: 1.78e3, category: 'étoile' },
  { name: 'Tau Ceti', mass: SOLAR_MASS * 0.783, radius: 551000, density: 1.71e3, category: 'étoile' },
  { name: 'Epsilon Eridani', mass: SOLAR_MASS * 0.82, radius: 550000, density: 1.8e3, category: 'étoile' },
  { name: 'Soleil', mass: SOLAR_MASS, radius: SOLAR_RADIUS, density: 1408, category: 'étoile' },
  { name: 'Sirius A', mass: SOLAR_MASS * 2.063, radius: 1.191e6, density: 435, category: 'étoile' },
  { name: 'Vega', mass: SOLAR_MASS * 2.135, radius: 1.602e6, density: 187, category: 'étoile' },
  { name: 'Altair', mass: SOLAR_MASS * 1.79, radius: 1.63e6, density: 150, category: 'étoile' },
  { name: 'Fomalhaut', mass: SOLAR_MASS * 1.92, radius: 1.842e6, density: 104, category: 'étoile' },
  { name: 'Procyon A', mass: SOLAR_MASS * 1.499, radius: 1.569e6, density: 156, category: 'étoile' },

  { name: 'Pollux', mass: SOLAR_MASS * 1.91, radius: 6.092e6, density: 1.27, category: 'géante' },
  { name: 'Arcturus', mass: SOLAR_MASS * 1.08, radius: 1.808e7, density: 0.0047, category: 'géante' },
  { name: 'Aldebaran', mass: SOLAR_MASS * 1.16, radius: 3.044e7, density: 0.00045, category: 'géante' },
  { name: 'Capella A', mass: SOLAR_MASS * 2.5, radius: 8.713e6, density: 0.93, category: 'géante' },
  { name: 'Capella B', mass: SOLAR_MASS * 2.5, radius: 6.954e6, density: 1.46, category: 'géante' },

  { name: 'Bételgeuse', mass: SOLAR_MASS * 14, radius: 7.64e8, density: 5.5e-7, category: 'supergéante' },
  { name: 'Rigel', mass: SOLAR_MASS * 21, radius: 5.43e7, density: 0.0018, category: 'supergéante' },
  { name: 'Antares', mass: SOLAR_MASS * 12, radius: 5.52e8, density: 1.3e-6, category: 'supergéante' },
  { name: 'Deneb', mass: SOLAR_MASS * 19, radius: 1.52e8, density: 1.8e-5, category: 'supergéante' },
  { name: 'VY Canis Majoris', mass: SOLAR_MASS * 17, radius: 1.42e9, density: 5e-8, category: 'supergéante' },
  { name: 'UY Scuti', mass: SOLAR_MASS * 7, radius: 1.188e9, density: 7e-8, category: 'supergéante' },
  { name: 'Mu Cephei', mass: SOLAR_MASS * 19.2, radius: 9.72e8, density: 3.6e-7, category: 'supergéante' },

  { name: 'PSR J0348+0432', mass: SOLAR_MASS * 2.01, radius: 13, density: 5.5e17, category: 'étoile à neutrons' },
  { name: 'PSR J1614-2230', mass: SOLAR_MASS * 1.97, radius: 13, density: 5.4e17, category: 'étoile à neutrons' },
  { name: 'PSR J0740+6620', mass: SOLAR_MASS * 2.14, radius: 13, density: 6e17, category: 'étoile à neutrons' },
  { name: 'Vela Pulsar', mass: SOLAR_MASS * 1.4, radius: 12, density: 6e17, category: 'étoile à neutrons' },
  { name: 'Crab Pulsar', mass: SOLAR_MASS * 1.4, radius: 12, density: 6e17, category: 'étoile à neutrons' },

  { name: 'Cygnus X-1', mass: SOLAR_MASS * 21.2, radius: 62.4, density: 2.0e15, category: 'trou noir' },
  { name: 'Sagittarius A*', mass: SOLAR_MASS * 4.154e6, radius: 1.224e7, density: 7.2e6, category: 'trou noir' },
  { name: 'M87*', mass: SOLAR_MASS * 6.5e9, radius: 1.92e10, density: 0.12, category: 'trou noir' },
  { name: 'V404 Cygni', mass: SOLAR_MASS * 9, radius: 26.5, density: 1.1e16, category: 'trou noir' },
  { name: 'GRO J1655-40', mass: SOLAR_MASS * 6.3, radius: 18.6, density: 2.8e16, category: 'trou noir' },

  { name: 'WD 0346+246', mass: SOLAR_MASS * 1.28, radius: 3000, density: 1.4e10, category: 'naine blanche' },
  { name: 'BPM 37093', mass: SOLAR_MASS * 1.1, radius: 4000, density: 4e9, category: 'naine blanche' },
  { name: 'Stein 2051 B', mass: SOLAR_MASS * 0.675, radius: 5800, density: 7.3e8, category: 'naine blanche' },
  { name: 'G117-B15A', mass: SOLAR_MASS * 0.59, radius: 8500, density: 2.9e8, category: 'naine blanche' },
  { name: 'ZZ Ceti', mass: SOLAR_MASS * 0.63, radius: 7500, density: 4.3e8, category: 'naine blanche' },
  { name: 'IK Pegasi B', mass: SOLAR_MASS * 1.15, radius: 4500, density: 5.5e9, category: 'naine blanche' },
  { name: 'GD 358', mass: SOLAR_MASS * 0.61, radius: 8200, density: 3.2e8, category: 'naine blanche' },
  { name: 'PG 1159-035', mass: SOLAR_MASS * 0.59, radius: 7000, density: 4.7e8, category: 'naine blanche' },

  { name: 'Spica', mass: SOLAR_MASS * 11.43, radius: 4.84e6, density: 1.7, category: 'étoile' },
  { name: 'Regulus', mass: SOLAR_MASS * 3.8, radius: 2.569e6, density: 5.2, category: 'étoile' },
  { name: 'Achernar', mass: SOLAR_MASS * 6.7, radius: 5.564e6, density: 0.49, category: 'étoile' },
  { name: 'Acrux', mass: SOLAR_MASS * 17.8, radius: 5.74e6, density: 1.6, category: 'étoile' },
  { name: 'Mimosa', mass: SOLAR_MASS * 16, radius: 6.09e6, density: 1.3, category: 'étoile' },
  { name: 'Adhara', mass: SOLAR_MASS * 12.6, radius: 1.0e7, density: 0.15, category: 'géante' },
  { name: 'Shaula', mass: SOLAR_MASS * 14.5, radius: 4.18e6, density: 4.6, category: 'étoile' },
  { name: 'Bellatrix', mass: SOLAR_MASS * 8.6, radius: 4.17e6, density: 2.8, category: 'étoile' },
  { name: 'Alnilam', mass: SOLAR_MASS * 40, radius: 2.39e7, density: 0.0077, category: 'supergéante' },
  { name: 'Alnitak', mass: SOLAR_MASS * 33, radius: 1.40e7, density: 0.028, category: 'supergéante' },
  { name: 'Mintaka', mass: SOLAR_MASS * 24, radius: 1.15e7, density: 0.043, category: 'géante' },

  { name: 'Mira', mass: SOLAR_MASS * 1.2, radius: 2.85e8, density: 3.3e-6, category: 'géante' },
  { name: 'R Leporis', mass: SOLAR_MASS * 2.5, radius: 2.88e8, density: 6.5e-6, category: 'géante' },
  { name: 'Chi Cygni', mass: SOLAR_MASS * 2.1, radius: 3.17e8, density: 4.2e-6, category: 'géante' },
  { name: 'T Cephei', mass: SOLAR_MASS * 1.5, radius: 3.29e8, density: 2.4e-6, category: 'géante' },

  { name: 'RX J1856.5-3754', mass: SOLAR_MASS * 1.4, radius: 11, density: 7e17, category: 'étoile à neutrons' },
  { name: 'PSR B1919+21', mass: SOLAR_MASS * 1.4, radius: 12, density: 6e17, category: 'étoile à neutrons' },
  { name: 'PSR B1257+12', mass: SOLAR_MASS * 1.4, radius: 12, density: 6e17, category: 'étoile à neutrons' },
  { name: 'PSR J1748-2446ad', mass: SOLAR_MASS * 1.4, radius: 12, density: 6e17, category: 'étoile à neutrons' },
  { name: '4U 1820-30', mass: SOLAR_MASS * 1.4, radius: 11.5, density: 6.3e17, category: 'étoile à neutrons' },

  { name: 'A0620-00', mass: SOLAR_MASS * 6.6, radius: 19.5, density: 2.5e16, category: 'trou noir' },
  { name: 'GS 2000+25', mass: SOLAR_MASS * 7.5, radius: 22.1, density: 1.8e16, category: 'trou noir' },
  { name: 'XTE J1550-564', mass: SOLAR_MASS * 9.1, radius: 26.8, density: 1.1e16, category: 'trou noir' },
  { name: 'GRS 1915+105', mass: SOLAR_MASS * 14, radius: 41.3, density: 4.3e15, category: 'trou noir' },
  { name: 'LMC X-1', mass: SOLAR_MASS * 10.9, radius: 32.1, density: 7.7e15, category: 'trou noir' },
  { name: 'NGC 4889', mass: SOLAR_MASS * 2.1e10, radius: 6.2e10, density: 0.014, category: 'trou noir' },
  { name: 'TON 618', mass: SOLAR_MASS * 6.6e10, radius: 1.95e11, density: 0.00037, category: 'trou noir' },
  { name: 'IC 1101', mass: SOLAR_MASS * 4e10, radius: 1.18e11, density: 0.0024, category: 'trou noir' },

  { name: 'GD 50', mass: SOLAR_MASS * 0.98, radius: 5400, density: 1.5e9, category: 'naine blanche' },
  { name: 'GD 165', mass: SOLAR_MASS * 0.64, radius: 7800, density: 3.8e8, category: 'naine blanche' },
  { name: 'LHS 3250', mass: SOLAR_MASS * 0.72, radius: 6500, density: 6.1e8, category: 'naine blanche' },
  { name: 'WD 1856+534', mass: SOLAR_MASS * 0.52, radius: 9200, density: 1.8e8, category: 'naine blanche' },
  { name: 'LP 145-141', mass: SOLAR_MASS * 0.61, radius: 7300, density: 4.1e8, category: 'naine blanche' },
  { name: 'GD 394', mass: SOLAR_MASS * 1.05, radius: 4800, density: 3.8e9, category: 'naine blanche' },
  { name: 'LHS 1126', mass: SOLAR_MASS * 0.68, radius: 7100, density: 5.2e8, category: 'naine blanche' },
  { name: 'WD 0745+238', mass: SOLAR_MASS * 0.95, radius: 5600, density: 1.1e9, category: 'naine blanche' },

  { name: 'WD 0136+768', mass: SOLAR_MASS * 0.55, radius: 8800, density: 2.1e8, category: 'naine blanche' },
  { name: 'WD 0548-001', mass: SOLAR_MASS * 0.58, radius: 8400, density: 2.5e8, category: 'naine blanche' },
  { name: 'WD 1115+166', mass: SOLAR_MASS * 0.62, radius: 7900, density: 3.0e8, category: 'naine blanche' },
  { name: 'WD 1659+440', mass: SOLAR_MASS * 0.65, radius: 7600, density: 3.4e8, category: 'naine blanche' },
  { name: 'WD 2007-303', mass: SOLAR_MASS * 0.69, radius: 7200, density: 4.7e8, category: 'naine blanche' },
  { name: 'WD 0346-011', mass: SOLAR_MASS * 0.73, radius: 6900, density: 5.5e8, category: 'naine blanche' },
  { name: 'WD 1620-391', mass: SOLAR_MASS * 0.76, radius: 6600, density: 6.2e8, category: 'naine blanche' },
  { name: 'WD 2149+021', mass: SOLAR_MASS * 0.79, radius: 6300, density: 7.1e8, category: 'naine blanche' },
  { name: 'WD 0413-077', mass: SOLAR_MASS * 0.82, radius: 6100, density: 7.8e8, category: 'naine blanche' },
  { name: 'WD 1544-377', mass: SOLAR_MASS * 0.85, radius: 5900, density: 8.6e8, category: 'naine blanche' },
  { name: 'WD 0308-565', mass: SOLAR_MASS * 0.88, radius: 5700, density: 9.5e8, category: 'naine blanche' },
  { name: 'WD 1949+057', mass: SOLAR_MASS * 0.91, radius: 5500, density: 1.05e9, category: 'naine blanche' },
  { name: 'WD 0644+025', mass: SOLAR_MASS * 0.94, radius: 5300, density: 1.16e9, category: 'naine blanche' },
  { name: 'WD 1214+267', mass: SOLAR_MASS * 0.97, radius: 5100, density: 1.28e9, category: 'naine blanche' },
  { name: 'WD 0811-459', mass: SOLAR_MASS * 1.00, radius: 4900, density: 1.42e9, category: 'naine blanche' },
  { name: 'WD 1036-204', mass: SOLAR_MASS * 1.03, radius: 4700, density: 1.58e9, category: 'naine blanche' },
  { name: 'WD 1327-083', mass: SOLAR_MASS * 1.06, radius: 4500, density: 1.75e9, category: 'naine blanche' },
  { name: 'WD 2048+263', mass: SOLAR_MASS * 1.09, radius: 4300, density: 1.95e9, category: 'naine blanche' },
  { name: 'WD 0101+048', mass: SOLAR_MASS * 1.12, radius: 4100, density: 2.18e9, category: 'naine blanche' },
  { name: 'WD 0839-327', mass: SOLAR_MASS * 1.16, radius: 3900, density: 2.52e9, category: 'naine blanche' },
  { name: 'WD 1257+037', mass: SOLAR_MASS * 1.19, radius: 3700, density: 2.91e9, category: 'naine blanche' },
  { name: 'WD 1544-259', mass: SOLAR_MASS * 1.22, radius: 3500, density: 3.38e9, category: 'naine blanche' },
  { name: 'WD 0126+101', mass: SOLAR_MASS * 1.25, radius: 3300, density: 3.94e9, category: 'naine blanche' },
  { name: 'WD 2039-682', mass: SOLAR_MASS * 1.27, radius: 3150, density: 4.45e9, category: 'naine blanche' },
  { name: 'WD 0548-317', mass: SOLAR_MASS * 1.29, radius: 3050, density: 4.84e9, category: 'naine blanche' },
  { name: 'WD 1314+293', mass: SOLAR_MASS * 1.31, radius: 2950, density: 5.28e9, category: 'naine blanche' },
  { name: 'WD 0437+152', mass: SOLAR_MASS * 1.33, radius: 2850, density: 5.79e9, category: 'naine blanche' },
  { name: 'WD 0549+158', mass: SOLAR_MASS * 1.32, radius: 2750, density: 6.3e9, category: 'naine blanche' },
  { name: 'WD 1349-274', mass: SOLAR_MASS * 1.30, radius: 2650, density: 6.9e9, category: 'naine blanche' },
  { name: 'WD 2147+280', mass: SOLAR_MASS * 1.28, radius: 2550, density: 7.6e9, category: 'naine blanche' },
  { name: 'WD 0957-666', mass: SOLAR_MASS * 1.26, radius: 2450, density: 8.4e9, category: 'naine blanche' },
  { name: 'WD 1711+668', mass: SOLAR_MASS * 1.24, radius: 2350, density: 9.4e9, category: 'naine blanche' },
  { name: 'WD 0023+388', mass: SOLAR_MASS * 1.22, radius: 2250, density: 1.06e10, category: 'naine blanche' },
  { name: 'WD 1659+662', mass: SOLAR_MASS * 1.20, radius: 2150, density: 1.20e10, category: 'naine blanche' },
  { name: 'WD 1309+853', mass: SOLAR_MASS * 1.18, radius: 2050, density: 1.37e10, category: 'naine blanche' },
  { name: 'WD 0341-459', mass: SOLAR_MASS * 1.16, radius: 1950, density: 1.58e10, category: 'naine blanche' },
  { name: 'WD 2103+815', mass: SOLAR_MASS * 1.14, radius: 1850, density: 1.84e10, category: 'naine blanche' },
  { name: 'WD 0816+376', mass: SOLAR_MASS * 1.12, radius: 1750, density: 2.17e10, category: 'naine blanche' },
  { name: 'WD 1425-811', mass: SOLAR_MASS * 1.10, radius: 1650, density: 2.60e10, category: 'naine blanche' },

  { name: 'WD 0142-246', mass: SOLAR_MASS * 0.53, radius: 9100, density: 1.85e8, category: 'naine blanche' },
  { name: 'WD 1935+276', mass: SOLAR_MASS * 0.56, radius: 8700, density: 2.3e8, category: 'naine blanche' },
  { name: 'WD 0652+426', mass: SOLAR_MASS * 0.59, radius: 8300, density: 2.65e8, category: 'naine blanche' },
  { name: 'WD 1422+095', mass: SOLAR_MASS * 0.63, radius: 7800, density: 3.15e8, category: 'naine blanche' },
  { name: 'WD 2117+539', mass: SOLAR_MASS * 0.66, radius: 7500, density: 3.55e8, category: 'naine blanche' },
  { name: 'WD 0855-035', mass: SOLAR_MASS * 0.70, radius: 7100, density: 4.3e8, category: 'naine blanche' },
  { name: 'WD 1659-531', mass: SOLAR_MASS * 0.74, radius: 6800, density: 5.1e8, category: 'naine blanche' },
  { name: 'WD 0108-319', mass: SOLAR_MASS * 0.77, radius: 6500, density: 5.8e8, category: 'naine blanche' },
  { name: 'WD 1333+005', mass: SOLAR_MASS * 0.80, radius: 6200, density: 6.6e8, category: 'naine blanche' },
  { name: 'WD 2326+049', mass: SOLAR_MASS * 0.83, radius: 6000, density: 7.4e8, category: 'naine blanche' },
  { name: 'WD 0310-688', mass: SOLAR_MASS * 0.86, radius: 5800, density: 8.2e8, category: 'naine blanche' },
  { name: 'WD 1615+154', mass: SOLAR_MASS * 0.89, radius: 5600, density: 9.1e8, category: 'naine blanche' },
  { name: 'WD 2032+248', mass: SOLAR_MASS * 0.92, radius: 5400, density: 1.01e9, category: 'naine blanche' },
  { name: 'WD 0433+270', mass: SOLAR_MASS * 0.96, radius: 5200, density: 1.21e9, category: 'naine blanche' },
  { name: 'WD 1244-125', mass: SOLAR_MASS * 0.99, radius: 5000, density: 1.35e9, category: 'naine blanche' },
  { name: 'WD 1855+338', mass: SOLAR_MASS * 1.02, radius: 4800, density: 1.52e9, category: 'naine blanche' },
  { name: 'WD 0501+527', mass: SOLAR_MASS * 1.05, radius: 4600, density: 1.71e9, category: 'naine blanche' },
  { name: 'WD 1105-340', mass: SOLAR_MASS * 1.08, radius: 4400, density: 1.92e9, category: 'naine blanche' },
  { name: 'WD 1748-708', mass: SOLAR_MASS * 1.11, radius: 4200, density: 2.16e9, category: 'naine blanche' },
  { name: 'WD 0232-592', mass: SOLAR_MASS * 1.14, radius: 4000, density: 2.43e9, category: 'naine blanche' },
  { name: 'WD 1422-835', mass: SOLAR_MASS * 1.17, radius: 3800, density: 2.75e9, category: 'naine blanche' },
  { name: 'WD 2040+061', mass: SOLAR_MASS * 1.20, radius: 3600, density: 3.14e9, category: 'naine blanche' },
  { name: 'WD 0644-375', mass: SOLAR_MASS * 1.23, radius: 3400, density: 3.62e9, category: 'naine blanche' },
  { name: 'WD 1312-098', mass: SOLAR_MASS * 1.26, radius: 3200, density: 4.2e9, category: 'naine blanche' },

  { name: 'PSR J0437-4715', mass: SOLAR_MASS * 1.44, radius: 12.2, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1909-3744', mass: SOLAR_MASS * 1.47, radius: 12.1, density: 6.0e17, category: 'étoile à neutrons' },
  { name: 'PSR J1614-2230', mass: SOLAR_MASS * 1.97, radius: 12.8, density: 5.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J0348+0432', mass: SOLAR_MASS * 2.01, radius: 12.9, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J0740+6620', mass: SOLAR_MASS * 2.14, radius: 12.4, density: 6.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J2215+5135', mass: SOLAR_MASS * 2.27, radius: 12.0, density: 7.9e17, category: 'étoile à neutrons' },
  { name: 'PSR J1311-3430', mass: SOLAR_MASS * 1.27, radius: 11.8, density: 5.5e17, category: 'étoile à neutrons' },
  { name: 'PSR J1801-1417', mass: SOLAR_MASS * 1.24, radius: 10.8, density: 6.6e17, category: 'étoile à neutrons' },
  { name: 'PSR J1045-4509', mass: SOLAR_MASS * 1.22, radius: 10.5, density: 7.0e17, category: 'étoile à neutrons' },
  { name: 'PSR J0614-3329', mass: SOLAR_MASS * 1.2, radius: 10.2, density: 7.5e17, category: 'étoile à neutrons' },
  { name: 'PSR J1903+0327 (R=10.0km)', mass: SOLAR_MASS * 1.67, radius: 10.0, density: 1.0e18, category: 'étoile à neutrons' },
  { name: 'PSR J1614-2230 (R=10.5km)', mass: SOLAR_MASS * 1.97, radius: 10.5, density: 1.1e18, category: 'étoile à neutrons' },
  { name: 'PSR J0740+6620 (R=10.8km)', mass: SOLAR_MASS * 2.14, radius: 10.8, density: 1.1e18, category: 'étoile à neutrons' },
  { name: 'PSR J1738+0333 (R=13.5km)', mass: SOLAR_MASS * 1.47, radius: 13.5, density: 4.6e17, category: 'étoile à neutrons' },
  { name: 'PSR J1909-3744 (R=13.8km)', mass: SOLAR_MASS * 1.47, radius: 13.8, density: 4.3e17, category: 'étoile à neutrons' },
  { name: 'PSR J0437-4715 (R=13.2km)', mass: SOLAR_MASS * 1.44, radius: 13.2, density: 4.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J1853+1303 (R=13.5km)', mass: SOLAR_MASS * 1.42, radius: 13.5, density: 4.4e17, category: 'étoile à neutrons' },
  { name: 'PSR J1843-1113 (R=13.8km)', mass: SOLAR_MASS * 1.41, radius: 13.8, density: 4.2e17, category: 'étoile à neutrons' },
  { name: 'PSR J1933-6211 (R=13.5km)', mass: SOLAR_MASS * 1.4, radius: 13.5, density: 4.3e17, category: 'étoile à neutrons' },
  { name: 'PSR J2043+1711 (R=13.2km)', mass: SOLAR_MASS * 1.38, radius: 13.2, density: 4.5e17, category: 'étoile à neutrons' },
  { name: 'PSR J1807-2500B (R=13.8km)', mass: SOLAR_MASS * 1.37, radius: 13.8, density: 4.1e17, category: 'étoile à neutrons' },
  { name: 'PSR J1748-2021B (R=13.5km)', mass: SOLAR_MASS * 1.35, radius: 13.5, density: 4.2e17, category: 'étoile à neutrons' },
  { name: 'PSR J1949+3106 (R=13.2km)', mass: SOLAR_MASS * 1.34, radius: 13.2, density: 4.4e17, category: 'étoile à neutrons' },
  { name: 'PSR J1600-3053 (R=13.5km)', mass: SOLAR_MASS * 1.32, radius: 13.5, density: 4.1e17, category: 'étoile à neutrons' },
  { name: 'PSR J1713+0747 (R=13.2km)', mass: SOLAR_MASS * 1.31, radius: 13.2, density: 4.3e17, category: 'étoile à neutrons' },
  { name: 'PSR J1910-5959A (R=13.5km)', mass: SOLAR_MASS * 1.3, radius: 13.5, density: 4.0e17, category: 'étoile à neutrons' },
  { name: 'PSR J1918+1444 (R=13.8km)', mass: SOLAR_MASS * 1.29, radius: 13.8, density: 3.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1918-0642 (R=13.5km)', mass: SOLAR_MASS * 1.28, radius: 13.5, density: 3.9e17, category: 'étoile à neutrons' },
  { name: 'PSR J1311-3430 (R=13.8km)', mass: SOLAR_MASS * 1.27, radius: 13.8, density: 3.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J2145-0750 (R=13.5km)', mass: SOLAR_MASS * 1.26, radius: 13.5, density: 3.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1829+2456 (R=13.2km)', mass: SOLAR_MASS * 1.25, radius: 13.2, density: 4.0e17, category: 'étoile à neutrons' },
  { name: 'PSR J1802-2124 (R=13.5km)', mass: SOLAR_MASS * 1.24, radius: 13.5, density: 3.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J1748-2446ad', mass: SOLAR_MASS * 1.4, radius: 11.9, density: 6.0e17, category: 'étoile à neutrons' },
  { name: 'PSR J1903+0327', mass: SOLAR_MASS * 1.67, radius: 12.3, density: 5.5e17, category: 'étoile à neutrons' },
  { name: 'PSR J1738+0333', mass: SOLAR_MASS * 1.47, radius: 12.0, density: 6.1e17, category: 'étoile à neutrons' },
  { name: 'PSR J0751+1807', mass: SOLAR_MASS * 2.1, radius: 12.7, density: 6.2e17, category: 'étoile à neutrons' },
  { name: 'PSR J2043+1711', mass: SOLAR_MASS * 1.38, radius: 11.7, density: 6.2e17, category: 'étoile à neutrons' },
  { name: 'PSR J1949+3106', mass: SOLAR_MASS * 1.34, radius: 11.6, density: 6.1e17, category: 'étoile à neutrons' },
  { name: 'PSR J1918-0642', mass: SOLAR_MASS * 1.28, radius: 11.5, density: 5.9e17, category: 'étoile à neutrons' },
  { name: 'PSR J1012+5307', mass: SOLAR_MASS * 1.83, radius: 12.5, density: 5.6e17, category: 'étoile à neutrons' },
  { name: 'PSR J1713+0747', mass: SOLAR_MASS * 1.31, radius: 11.8, density: 5.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J1802-2124', mass: SOLAR_MASS * 1.24, radius: 11.4, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1853+1303', mass: SOLAR_MASS * 1.42, radius: 12.0, density: 5.9e17, category: 'étoile à neutrons' },
  { name: 'PSR J1910-5959A', mass: SOLAR_MASS * 1.3, radius: 11.7, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J2234+0611', mass: SOLAR_MASS * 1.353, radius: 11.9, density: 5.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J0030+0451', mass: SOLAR_MASS * 1.44, radius: 13.0, density: 4.9e17, category: 'étoile à neutrons' },
  { name: 'PSR J1810+1744', mass: SOLAR_MASS * 1.58, radius: 12.2, density: 6.3e17, category: 'étoile à neutrons' },
  { name: 'PSR J1843-1113', mass: SOLAR_MASS * 1.41, radius: 11.9, density: 6.0e17, category: 'étoile à neutrons' },
  { name: 'PSR J1906+0746', mass: SOLAR_MASS * 1.29, radius: 11.6, density: 5.9e17, category: 'étoile à neutrons' },
  { name: 'PSR J0337+1715', mass: SOLAR_MASS * 1.4376, radius: 12.1, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1946+3417', mass: SOLAR_MASS * 1.828, radius: 12.6, density: 5.5e17, category: 'étoile à neutrons' },
  { name: 'PSR J2129-0429', mass: SOLAR_MASS * 1.74, radius: 12.4, density: 5.6e17, category: 'étoile à neutrons' },
  { name: 'PSR J1829+2456', mass: SOLAR_MASS * 1.25, radius: 11.5, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1918+1444', mass: SOLAR_MASS * 1.29, radius: 11.7, density: 5.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J1227-4853', mass: SOLAR_MASS * 1.92, radius: 12.7, density: 5.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J2145-0750', mass: SOLAR_MASS * 1.26, radius: 11.6, density: 5.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J1600-3053', mass: SOLAR_MASS * 1.32, radius: 11.8, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1903-7051', mass: SOLAR_MASS * 1.6, radius: 12.3, density: 5.4e17, category: 'étoile à neutrons' },
  { name: 'PSR J2051-0827', mass: SOLAR_MASS * 1.52, radius: 12.1, density: 6.2e17, category: 'étoile à neutrons' },
  { name: 'PSR J1955+2908', mass: SOLAR_MASS * 1.71, radius: 12.5, density: 5.5e17, category: 'étoile à neutrons' },
  { name: 'PSR J1933-6211', mass: SOLAR_MASS * 1.4, radius: 12.0, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J1748-2021B', mass: SOLAR_MASS * 1.35, radius: 11.9, density: 5.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J1807-2500B', mass: SOLAR_MASS * 1.37, radius: 11.9, density: 5.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J0453+1559', mass: SOLAR_MASS * 1.559, radius: 12.2, density: 6.2e17, category: 'étoile à neutrons' },
  { name: 'PSR J1756-2251', mass: SOLAR_MASS * 1.341, radius: 11.8, density: 5.8e17, category: 'étoile à neutrons' },

  { name: 'PSR J2215+5135 (R=11.5km)', mass: SOLAR_MASS * 2.27, radius: 11.5, density: 8.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J0740+6620 (R=11.8km)', mass: SOLAR_MASS * 2.14, radius: 11.8, density: 7.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J0348+0432 (R=12.3km)', mass: SOLAR_MASS * 2.01, radius: 12.3, density: 6.4e17, category: 'étoile à neutrons' },
  { name: 'PSR J1614-2230 (R=11.9km)', mass: SOLAR_MASS * 1.97, radius: 11.9, density: 6.7e17, category: 'étoile à neutrons' },
  { name: 'PSR J1946+3417 (R=12.0km)', mass: SOLAR_MASS * 1.828, radius: 12.0, density: 6.3e17, category: 'étoile à neutrons' },
  { name: 'PSR J1903+0327 (R=11.7km)', mass: SOLAR_MASS * 1.67, radius: 11.7, density: 6.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J0453+1559 (R=11.6km)', mass: SOLAR_MASS * 1.559, radius: 11.6, density: 7.0e17, category: 'étoile à neutrons' },
  { name: 'PSR J1909-3744 (R=11.5km)', mass: SOLAR_MASS * 1.47, radius: 11.5, density: 6.8e17, category: 'étoile à neutrons' },
  { name: 'PSR J0437-4715 (R=11.2km)', mass: SOLAR_MASS * 1.44, radius: 11.2, density: 7.2e17, category: 'étoile à neutrons' },
  { name: 'PSR J1738+0333 (R=11.3km)', mass: SOLAR_MASS * 1.47, radius: 11.3, density: 7.3e17, category: 'étoile à neutrons' },
];

export const getCategoryColor = (category: RealCelestialBody['category']): string => {
  const colors = {
    'planète': 'from-blue-50 to-cyan-50 border-blue-400',
    'étoile': 'from-yellow-50 to-amber-50 border-yellow-400',
    'géante': 'from-orange-50 to-red-50 border-orange-400',
    'supergéante': 'from-red-50 to-pink-50 border-red-400',
    'naine blanche': 'from-slate-50 to-blue-50 border-slate-400',
    'étoile à neutrons': 'from-gray-50 to-slate-50 border-gray-500',
    'trou noir': 'from-purple-50 to-gray-50 border-purple-500',
  };
  return colors[category];
};

export const getCategoryDescription = (category: RealCelestialBody['category']): string => {
  const descriptions = {
    'planète': 'Corps céleste en orbite autour d\'une étoile, sans fusion nucléaire interne.',
    'étoile': 'Sphère de plasma en fusion nucléaire, émettant lumière et chaleur.',
    'géante': 'Étoile évoluée ayant épuisé son hydrogène, en expansion importante.',
    'supergéante': 'Étoile massive en fin de vie, extrêmement brillante et volumineuse.',
    'naine blanche': 'Résidu stellaire ultra-dense, cœur refroidi d\'une étoile de masse faible ou moyenne.',
    'étoile à neutrons': 'Objet compact extrême, composé presque entièrement de neutrons, vestige de supernova.',
    'trou noir': 'Région de l\'espace où la gravité est si intense que rien ne peut s\'en échapper.',
  };
  return descriptions[category];
};

export const findMatchingCelestialBody = (mass: number, radius: number): RealCelestialBody | null => {
  const density = calculateDensity(mass, radius);

  let bestMatch: RealCelestialBody | null = null;
  let bestDifference = Infinity;

  for (const body of REAL_CELESTIAL_BODIES) {
    const massDiff = Math.abs(Math.log10(mass) - Math.log10(body.mass));
    const radiusDiff = Math.abs(Math.log10(radius) - Math.log10(body.radius));
    const densityDiff = Math.abs(Math.log10(density) - Math.log10(body.density));

    const totalDiff = densityDiff * 2 + massDiff + radiusDiff;

    if (totalDiff < bestDifference) {
      bestDifference = totalDiff;
      bestMatch = body;
    }
  }

  if (bestDifference < 5) {
    return bestMatch;
  }

  return null;
};

export const calculateAutoRadius = (mass: number): number => {
  if (mass < EARTH_MASS * 20) {
    if (mass < EARTH_MASS * 0.5) {
      return EARTH_RADIUS * Math.pow(mass / EARTH_MASS, 0.27);
    } else {
      return EARTH_RADIUS * Math.pow(mass / EARTH_MASS, 0.55);
    }
  } else if (mass < SOLAR_MASS * 0.08) {
    const jup_mass = 1.898e27;
    return 69911 * Math.pow(mass / jup_mass, 0.1);
  } else if (mass < SOLAR_MASS * 1.3) {
    return SOLAR_RADIUS * Math.pow(mass / SOLAR_MASS, 0.8);
  } else if (mass < SOLAR_MASS * 8) {
    return SOLAR_RADIUS * Math.pow(mass / SOLAR_MASS, 0.57);
  } else if (mass < SOLAR_MASS * 60) {
    return SOLAR_RADIUS * 15 * Math.pow(mass / (SOLAR_MASS * 20), 0.6);
  } else {
    const rsStar = calculateSchwarzschildRadius(mass);
    if (mass < SOLAR_MASS * 3) {
      return Math.max(10, rsStar * 2);
    } else {
      return Math.max(rsStar * 1.5, rsStar * 10 / Math.log10(mass / SOLAR_MASS));
    }
  }
};

export const calculateTimeDilationFactor = (massKg: number, radiusKm: number): number => {
  const rs = calculateSchwarzschildRadius(massKg);

  if (radiusKm <= rs) return Infinity;

  const dilationAtCenter = calculateTimeDilationAtCenter(massKg, radiusKm);
  if (dilationAtCenter <= 0 || dilationAtCenter >= 1) return 1;

  return 1 / dilationAtCenter;
};

export const findMassForDilationFactorAndRadius = (targetFactor: number, radiusKm: number): number => {
  if (targetFactor <= 1) {
    return EARTH_MASS;
  }

  const targetDilation = 1 / targetFactor;

  const term2 = 0.5;
  const term1 = targetDilation + term2;
  const sqrtFactor = term1 / 1.5;

  if (sqrtFactor <= 0 || sqrtFactor >= 1) {
    return EARTH_MASS;
  }

  const rsOverR = 1 - (sqrtFactor * sqrtFactor);
  const rs = rsOverR * radiusKm;

  if (rs <= 0) {
    return EARTH_MASS;
  }

  const c = SPEED_OF_LIGHT * 1000;
  const mass = (rs * 1000 * c * c) / (2 * GRAVITATIONAL_CONSTANT);

  if (!isFinite(mass) || mass <= 0) {
    return EARTH_MASS;
  }

  return mass;
};

export const findMassRadiusForDilationFactor = (targetFactor: number): { mass: number; radius: number } => {
  if (targetFactor <= 1) {
    return { mass: EARTH_MASS, radius: EARTH_RADIUS };
  }

  let mass = EARTH_MASS;
  let bestMass = mass;
  let bestRadius = EARTH_RADIUS;
  let bestDiff = Infinity;

  const maxIterations = 200;
  const tolerance = 0.01;

  for (let i = 0; i < maxIterations; i++) {
    const massScale = Math.pow(10, (i / maxIterations) * 12 - 2);
    mass = EARTH_MASS * massScale;

    const rs = calculateSchwarzschildRadius(mass);

    let radiusMin = rs * 1.5;
    let radiusMax = rs * 1000;

    for (let j = 0; j < 50; j++) {
      const radius = (radiusMin + radiusMax) / 2;
      const currentFactor = calculateTimeDilationFactor(mass, radius);

      if (!isFinite(currentFactor) || currentFactor === Infinity || currentFactor < 1) {
        radiusMin = radius;
        continue;
      }

      const diff = Math.abs(currentFactor - targetFactor);

      if (diff < bestDiff) {
        bestDiff = diff;
        bestMass = mass;
        bestRadius = radius;
      }

      if (diff < tolerance) {
        return { mass: bestMass, radius: bestRadius };
      }

      if (currentFactor < targetFactor) {
        radiusMin = radius;
      } else {
        radiusMax = radius;
      }
    }
  }

  return { mass: bestMass, radius: bestRadius };
};

export const calculateCompacityFromGamma = (gamma: number): number => {
  if (gamma <= 1) return 0;

  const targetDilation = 1 / gamma;
  const term2 = 0.5;
  const term1 = targetDilation + term2;
  const sqrtFactor = term1 / 1.5;

  if (sqrtFactor <= 0 || sqrtFactor >= 1) return 0;

  const compacity = 1 - (sqrtFactor * sqrtFactor);
  return Math.max(0, Math.min(0.99, compacity));
};

export const calculateGammaFromCompacity = (compacity: number): number => {
  if (compacity <= 0) return 1;
  if (compacity >= 1) return Infinity;

  const factor = 1 - compacity;
  const dilationAtCenter = (3 / 2) * Math.sqrt(factor) - 0.5;

  if (dilationAtCenter <= 0) return Infinity;

  return 1 / dilationAtCenter;
};

export const calculateMassRadiusFromGammaCompacity = (
  gamma: number,
  compacity: number
): { mass: number; radius: number } => {
  if (gamma <= 1 || compacity <= 0) {
    return { mass: EARTH_MASS, radius: EARTH_RADIUS };
  }

  if (compacity >= 1) {
    return { mass: SOLAR_MASS, radius: calculateSchwarzschildRadius(SOLAR_MASS) };
  }

  const baseRadius = EARTH_RADIUS * Math.pow(gamma, 2);
  const rs = compacity * baseRadius;

  const c = SPEED_OF_LIGHT * 1000;
  const mass = (rs * 1000 * c * c) / (2 * GRAVITATIONAL_CONSTANT);
  const radius = baseRadius;

  if (!isFinite(mass) || !isFinite(radius) || mass <= 0 || radius <= 0) {
    return { mass: EARTH_MASS, radius: EARTH_RADIUS };
  }

  return { mass, radius };
};

export const calculateCompacityFromMassRadius = (massKg: number, radiusKm: number): number => {
  const rs = calculateSchwarzschildRadius(massKg);
  return rs / radiusKm;
};

export const formatCompacity = (compacity: number): string => {
  return `${(compacity * 100).toFixed(2)}%`;
};
