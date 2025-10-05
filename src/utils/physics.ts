import { DataPoint } from '../types';

export const SPEED_OF_LIGHT = 299792.458;

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
