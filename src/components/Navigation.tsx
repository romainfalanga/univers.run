import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Microscope } from 'lucide-react';

// Fonction utilitaire pour générer un caractère aléatoire
const getRandomCharacter = () => {
  const characters = ['0', '1', 'q', 'ℓ'];
  return characters[Math.floor(Math.random() * characters.length)];
};

// Composant pour les chiffres binaires qui se téléportent
const TeleportingBinaryDigits: React.FC = () => {
  const [digits, setDigits] = React.useState(() => 
    Array.from({ length: 15 }, (_, i) => {
      return {
        id: i,
        value: getRandomCharacter(),
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        opacity: Math.random() * 0.3 + 0.1,
        size: ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)],
        visible: true,
        nextChangeTime: Date.now() + Math.random() * 200 + 100 // 0.1s à 0.3s
      };
    })
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setDigits(prevDigits => 
        prevDigits.map(digit => {
          if (now >= digit.nextChangeTime) {
            if (digit.visible) {
              // Disparaître complètement
              return {
                ...digit,
                visible: false,
                nextChangeTime: now + 200 // Réapparaître dans exactement 200ms
              };
            } else {
              // Réapparaître à un nouvel endroit avec de nouvelles propriétés
              return {
                ...digit,
                value: getRandomCharacter(),
                top: Math.random() * 90 + 5,
                left: Math.random() * 90 + 5,
                opacity: Math.random() * 0.3 + 0.1,
                size: ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)],
                visible: true,
                nextChangeTime: now + Math.random() * 800 + 400 // Rester visible 0.4s à 1.2s avant prochaine téléportation
              };
            }
          }
          return digit;
        })
      );
    }, 300); // Vérification toutes les 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {digits.map(digit => (
        <div
          key={digit.id}
          className={`absolute ${digit.size} font-mono text-cyan-400 transition-opacity duration-300 select-none ${
            digit.visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: `${digit.top}%`,
            left: `${digit.left}%`,
            opacity: digit.visible ? digit.opacity : 0,
            color: '#00FF41',
            textShadow: '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {digit.value}
        </div>
      ))}
    </>
  );
};

// Composant pour les chiffres binaires qui se téléportent dans le menu étendu
const TeleportingBinaryDigitsMenu: React.FC = () => {
  // Tableau des caractères possibles : 0, 1, q, ℓ
  const characters = ['0', '1', 'q', 'ℓ'];
  
  // Fonction pour générer un caractère aléatoire
  const getRandomCharacter = () => characters[Math.floor(Math.random() * characters.length)];

  const [digits, setDigits] = React.useState(() => 
    Array.from({ length: 28 }, (_, i) => {
      return {
        id: i,
        digit: getRandomCharacter(),
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        size: ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)],
        visible: true,
        nextChangeTime: Date.now() + Math.random() * 2000 + 1000 // 1s à 3s
      };
    })
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setDigits(prevDigits => 
        prevDigits.map(digit => {
          if (now >= digit.nextChangeTime) {
            if (digit.visible) {
              // Disparaître complètement
              return {
                ...digit,
                visible: false,
                nextChangeTime: now + 3000 // Réapparaître dans exactement 3 secondes
              };
            } else {
              // Réapparaître à un nouvel endroit avec de nouvelles propriétés
              return {
                ...digit,
                digit: getRandomCharacter(),
                top: Math.random() * 90 + 5,
                left: Math.random() * 90 + 5,
                size: ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)],
                visible: true,
                nextChangeTime: now + Math.random() * 6000 + 4000 // Rester visible 4s à 10s avant prochaine téléportation
              };
            }
          }
          return digit;
        })
      );
    }, 500); // Vérification toutes les 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {digits.map(digit => (
        <div
          key={digit.id}
          className={`absolute ${digit.size} font-mono transition-opacity duration-300 select-none ${
            digit.visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            top: `${digit.top}%`,
            left: `${digit.left}%`,
            opacity: digit.visible ? 0.4 : 0,
            color: '#00FF41',
            textShadow: '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {digit.digit}
        </div>
      ))}
    </>
  );
};

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayedText] = useState("L'univers est un jeu, alors amuse-toi");
  
  const navigationItems = [
    {
      path: '/code-univers',
      title: "Le code de l'univers",
      shortTitle: "Le code de l'univers",
      gradient: 'from-indigo-500/20 to-violet-500/20',
      hoverGradient: 'hover:from-indigo-500/10 hover:to-violet-500/10',
      textColor: 'text-indigo-300',
      hoverTextColor: 'hover:text-indigo-300',
      borderColor: 'border-indigo-400/30',
      hoverBorderColor: 'hover:border-indigo-400/20',
      shadowColor: 'shadow-indigo-500/25',
      hoverShadowColor: 'hover:shadow-indigo-500/20',
      glowFrom: 'from-indigo-400/10',
      glowTo: 'to-violet-400/10',
      hoverGlowFrom: 'from-indigo-400/5',
      hoverGlowTo: 'to-violet-400/5',
      dotColor: 'bg-indigo-400',
      dotColor2: 'bg-violet-400',
      icon: '🌌'
    },
    {
      path: '/god-binary',
      title: 'Dieu code en Binaire',
      shortTitle: 'Dieu code en Binaire',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      hoverGradient: 'hover:from-yellow-500/10 hover:to-orange-500/10',
      textColor: 'text-yellow-300',
      hoverTextColor: 'hover:text-yellow-300',
      borderColor: 'border-yellow-400/30',
      hoverBorderColor: 'hover:border-yellow-400/20',
      shadowColor: 'shadow-yellow-500/25',
      hoverShadowColor: 'hover:shadow-yellow-500/20',
      glowFrom: 'from-yellow-400/10',
      glowTo: 'to-orange-400/10',
      hoverGlowFrom: 'from-yellow-400/5',
      hoverGlowTo: 'to-orange-400/5',
      dotColor: 'bg-yellow-400',
      dotColor2: 'bg-orange-400',
      icon: '⚡'
    },
    {
      path: '/relativity',
      title: 'Relativité Restreinte',
      shortTitle: 'Relativité Restreinte',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      hoverGradient: 'hover:from-cyan-500/10 hover:to-blue-500/10',
      textColor: 'text-cyan-300',
      hoverTextColor: 'hover:text-cyan-300',
      borderColor: 'border-cyan-400/30',
      hoverBorderColor: 'hover:border-cyan-400/20',
      shadowColor: 'shadow-cyan-500/25',
      hoverShadowColor: 'hover:shadow-cyan-500/20',
      glowFrom: 'from-cyan-400/10',
      glowTo: 'to-blue-400/10',
      hoverGlowFrom: 'from-cyan-400/5',
      hoverGlowTo: 'to-blue-400/5',
      dotColor: 'bg-cyan-400',
      dotColor2: 'bg-blue-400',
      icon: '⚡'
    },
    {
      path: '/black-hole-concept',
      title: 'Horizon des Événements',
      shortTitle: 'Horizon des Événements',
      gradient: 'from-purple-500/20 to-pink-500/20',
      hoverGradient: 'hover:from-purple-500/10 hover:to-pink-500/10',
      textColor: 'text-purple-300',
      hoverTextColor: 'hover:text-purple-300',
      borderColor: 'border-purple-400/30',
      hoverBorderColor: 'hover:border-purple-400/20',
      shadowColor: 'shadow-purple-500/25',
      hoverShadowColor: 'hover:shadow-purple-500/20',
      glowFrom: 'from-purple-400/10',
      glowTo: 'to-pink-400/10',
      hoverGlowFrom: 'from-purple-400/5',
      hoverGlowTo: 'to-pink-400/5',
      dotColor: 'bg-purple-400',
      dotColor2: 'bg-pink-400',
      icon: '🕳️'
    },
    {
      path: '/quantum-lab',
      title: 'Laboratoire Quantique',
      shortTitle: 'Laboratoire Quantique',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      hoverGradient: 'hover:from-teal-500/10 hover:to-cyan-500/10',
      textColor: 'text-teal-300',
      hoverTextColor: 'hover:text-teal-300',
      borderColor: 'border-teal-400/30',
      hoverBorderColor: 'hover:border-teal-400/20',
      shadowColor: 'shadow-teal-500/25',
      hoverShadowColor: 'hover:shadow-teal-500/20',
      glowFrom: 'from-teal-400/10',
      glowTo: 'to-cyan-400/10',
      hoverGlowFrom: 'from-teal-400/5',
      hoverGlowTo: 'to-cyan-400/5',
      dotColor: 'bg-teal-400',
      dotColor2: 'bg-cyan-400',
      icon: '🔬'
    },
    {
      path: '/scale-lab',
      title: 'Laboratoire des Échelles',
      shortTitle: 'Laboratoire des Échelles',
      gradient: 'from-emerald-500/20 to-green-500/20',
      hoverGradient: 'hover:from-emerald-500/10 hover:to-green-500/10',
      textColor: 'text-emerald-300',
      hoverTextColor: 'hover:text-emerald-300',
      borderColor: 'border-emerald-400/30',
      hoverBorderColor: 'hover:border-emerald-400/20',
      shadowColor: 'shadow-emerald-500/25',
      hoverShadowColor: 'hover:shadow-emerald-500/20',
      glowFrom: 'from-emerald-400/10',
      glowTo: 'to-green-400/10',
      hoverGlowFrom: 'from-emerald-400/5',
      hoverGlowTo: 'to-green-400/5',
      dotColor: 'bg-emerald-400',
      dotColor2: 'bg-green-400',
      icon: '⚖️'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Barre de navigation principale */}
      <nav className="relative bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl z-50">
        {/* Effet de grille futuriste en arrière-plan */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 z-10"></div>
        
        {/* Chiffres binaires 0 et 1 flottants dans la nav bar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <TeleportingBinaryDigits />
        </div>
        
        {/* Ligne lumineuse animée en haut */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse z-10"></div>
        
        {/* Ligne lumineuse animée en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-4 sm:py-6 relative">
            
            {/* Bouton Menu Hamburger / Fermer - toujours présent */}
            <button
              onClick={toggleMobileMenu}
              className={`relative group text-white rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:shadow-[0_0_80px_rgba(147,51,234,0.8)] border-4 border-cyan-400/40 hover:border-purple-400/80 ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-r from-red-600/95 via-pink-600/95 to-red-600/95' 
                  : 'bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-indigo-900/95'
              }`}
            >
              {/* Fond principal avec gradient animé */}
              <div className={`absolute inset-0 rounded-3xl ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-r from-red-900/95 via-pink-900/95 via-red-800/95 to-red-900/95' 
                  : 'bg-gradient-to-r from-slate-900/95 via-purple-900/95 via-blue-900/95 to-indigo-900/95'
              }`}></div>
              
              {/* Couche de grille futuriste */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:15px_15px] rounded-3xl"></div>
              
              {/* Effet de vagues énergétiques */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 via-purple-500/20 via-pink-500/20 to-transparent bg-[length:200%_100%] animate-gradient-x rounded-3xl"></div>
              
              {/* Bordures lumineuses multiples */}
              <div className={`absolute inset-0 rounded-3xl border-2 shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_50px_rgba(147,51,234,0.6)] transition-all duration-1000 ${
                isMobileMenuOpen 
                  ? 'border-red-400/50 group-hover:border-red-400/70' 
                  : 'border-cyan-400/50 group-hover:border-purple-400/70'
              }`}></div>
              <div className="absolute inset-1 rounded-3xl border border-purple-400/30 shadow-[0_0_20px_rgba(147,51,234,0.2)] group-hover:border-pink-400/50 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-1000"></div>
              <div className="absolute inset-2 rounded-3xl border border-pink-400/20 shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:border-cyan-400/40 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-1000"></div>
              
              {/* Particules flottantes dans le fond */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-40 group-hover:opacity-70 transition-opacity duration-1000"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Effet de scan diagonal */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-3xl transform rotate-12"></div>
              
              {/* Lueur externe pulsante */}
              <div className={`absolute -inset-6 rounded-3xl blur-2xl animate-pulse opacity-40 group-hover:opacity-80 group-hover:blur-3xl transition-all duration-1000 ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-r from-red-600/30 via-pink-600/30 via-red-600/30 to-pink-600/30' 
                  : 'bg-gradient-to-r from-cyan-600/30 via-purple-600/30 via-pink-600/30 to-yellow-600/30'
              }`}></div>
              
              {/* Effet holographique */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 via-purple-300/10 to-transparent bg-[length:300%_100%] animate-gradient-x rounded-3xl opacity-30 group-hover:opacity-60 transition-all duration-1000"></div>
              
              {/* Fond lumineux animé */}
              <div className={`absolute inset-0 rounded-3xl blur-xl animate-pulse group-hover:blur-2xl transition-all duration-1000 ${
                isMobileMenuOpen 
                  ? 'bg-gradient-to-r from-red-400/20 via-pink-400/20 to-red-400/20' 
                  : 'bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20'
              }`}></div>
              
              {/* Effet de particules scintillantes */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-50 group-hover:opacity-90 transition-opacity duration-1000"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1.5 + Math.random() * 1.5}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Icône Menu/Fermer avec effets multiples */}
              <div className="relative z-10">
                <div className="relative">
                  {/* Icône principale - change selon l'état */}
                  {isMobileMenuOpen ? (
                    <X className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                  ) : (
                    <Menu className="w-8 h-8 sm:w-10 sm:h-10 relative z-10 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                  )}
                  
                  {/* Effet de lueur externe sur l'icône */}
                  <div className="absolute inset-0 opacity-30 blur-sm">
                    {isMobileMenuOpen ? (
                      <X className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
                    ) : (
                      <Menu className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                    )}
                  </div>
                  
                  {/* Bordure lumineuse animée autour de l'icône */}
                  <div className={`absolute -inset-2 rounded-2xl opacity-20 blur-lg animate-pulse ${
                    isMobileMenuOpen 
                      ? 'bg-gradient-to-r from-red-400 via-pink-400 via-red-400 to-pink-400' 
                      : 'bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-yellow-400'
                  }`}></div>
                  
                  {/* Effet de scan horizontal sur l'icône */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-scan rounded-2xl"></div>
                  
                  {/* Reflets cristallins sur l'icône */}
                  <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-sm opacity-40"></div>
                  <div className="absolute bottom-0 right-1/4 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent blur-sm opacity-30"></div>
                </div>
              </div>
              
              {/* Particules orbitales autour du bouton */}
              <div className={`absolute -top-2 -right-2 w-3 h-3 rounded-full animate-ping opacity-60 group-hover:opacity-90 transition-opacity duration-1000 ${
                isMobileMenuOpen ? 'bg-red-400' : 'bg-cyan-400'
              }`}></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60 group-hover:opacity-90 transition-opacity duration-1000 animation-delay-300"></div>
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50 group-hover:opacity-80 transition-opacity duration-1000 animation-delay-500"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-50 group-hover:opacity-80 transition-opacity duration-1000 animation-delay-700"></div>
              
              {/* Anneaux énergétiques qui s'étendent au hover */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/0 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-purple-400/0 animate-pulse animation-delay-300"></div>
            </button>
          </div>
        </div>

        {/* Effet de scan horizontal */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-scan pointer-events-none"></div>
      </nav>

      {/* Menu Étendu - S'étend vers le bas depuis la barre de navigation */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-gradient-to-br from-slate-900/98 via-blue-900/98 to-purple-900/98 backdrop-blur-2xl border-b-2 border-cyan-400/40 shadow-2xl transition-all duration-700 ease-in-out z-[99999] overflow-hidden ${
          isMobileMenuOpen 
            ? 'h-screen opacity-100 visible overflow-y-auto pointer-events-auto' 
            : 'h-0 opacity-0 invisible overflow-hidden pointer-events-none'
        }`}
        style={{ zIndex: 99999 }}
        onClick={(e) => {
          // Fermer le menu si on clique sur le fond
          if (e.target === e.currentTarget) {
            e.preventDefault();
            e.stopPropagation();
            setIsMobileMenuOpen(false);
          }
        }}
      >
        {/* Effet de grille futuriste en arrière-plan du menu étendu - identique à la nav bar */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
        
        {/* Chiffres binaires 0 et 1 flottants dans l'espace-temps */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <TeleportingBinaryDigitsMenu />
        </div>
        
        {/* Contenu du menu avec les liens de navigation */}
        <div 
          className="h-full flex flex-col items-center justify-start p-4 sm:p-8 pt-24 sm:pt-32 pb-20 overflow-y-auto relative z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Titre "Menu de Dieu" intégré dans le contenu */}
          <div className="absolute top-8 sm:top-16 left-1/2 transform -translate-x-1/2 z-40">
            <div className="relative group cursor-default">
              {/* Fond principal avec gradient animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-purple-900/95 via-blue-900/95 to-indigo-900/95 rounded-3xl"></div>
              
              {/* Couche de grille futuriste */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:25px_25px] rounded-3xl"></div>
              
              {/* Effet de vagues énergétiques */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 via-purple-500/10 via-pink-500/10 to-transparent bg-[length:200%_100%] animate-gradient-x rounded-3xl"></div>
              
              {/* Bordures lumineuses multiples */}
              <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.3)]"></div>
              <div className="absolute inset-1 rounded-3xl border border-purple-400/30 shadow-[0_0_20px_rgba(147,51,234,0.2)]"></div>
              <div className="absolute inset-2 rounded-3xl border border-pink-400/20 shadow-[0_0_15px_rgba(236,72,153,0.15)]"></div>
              
              {/* Particules flottantes dans le fond */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-40"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${3 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Effet de scan diagonal */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-3xl transform rotate-12"></div>
              
              {/* Lueur externe pulsante */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 via-pink-600/20 to-yellow-600/20 rounded-3xl blur-xl animate-pulse opacity-60 group-hover:opacity-100 transition-all duration-1000"></div>
              
              {/* Effet holographique */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/5 via-purple-300/5 to-transparent bg-[length:300%_100%] animate-gradient-x rounded-3xl opacity-50 group-hover:opacity-80 transition-all duration-1000"></div>
              
              {/* Fond lumineux animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur-2xl animate-pulse group-hover:blur-xl transition-all duration-1000"></div>
              
              {/* Effet de particules scintillantes */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-70"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Texte principal avec effets multiples */}
              <h2 className="relative z-10 text-3xl sm:text-5xl font-black mb-0 transform transition-all duration-1000 p-3 sm:p-8 rounded-3xl overflow-hidden">
                <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] group-hover:drop-shadow-[0_0_50px_rgba(147,51,234,1)] transition-all duration-1000 font-extrabold tracking-wider whitespace-nowrap">
                  Menu de l'univers
                </span>
                
                {/* Bordure lumineuse animée */}
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-yellow-400 rounded-3xl opacity-30 blur-2xl animate-pulse group-hover:opacity-60 group-hover:blur-3xl transition-all duration-1000"></div>
                
                {/* Effet de scan horizontal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-3xl"></div>
                
                {/* Reflets cristallins */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm opacity-60 group-hover:opacity-100 transition-all duration-1000"></div>
                <div className="absolute bottom-0 right-1/4 w-1/3 h-1 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent blur-sm opacity-40 group-hover:opacity-80 transition-all duration-1000"></div>
              </h2>
            </div>
          </div>
          
          {/* Phrase stylisée sous le titre */}
          <div className="mt-8 sm:mt-20 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
            <div className="relative group cursor-default">
              {/* Fond principal avec gradient animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-purple-800/90 to-indigo-800/90 rounded-2xl"></div>
              
              {/* Couche de grille futuriste */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl"></div>
              
              {/* Effet de vagues énergétiques */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 via-purple-500/5 via-pink-500/5 to-transparent bg-[length:200%_100%] animate-gradient-x rounded-2xl"></div>
              
              {/* Bordures lumineuses */}
              <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]"></div>
              <div className="absolute inset-1 rounded-2xl border border-purple-400/20 shadow-[0_0_15px_rgba(147,51,234,0.15)]"></div>
              
              {/* Particules flottantes */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-30"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Lueur externe pulsante */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl blur-xl animate-pulse opacity-50"></div>
              
              {/* Effet holographique */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/3 via-purple-300/3 to-transparent bg-[length:300%_100%] animate-gradient-x rounded-2xl opacity-40"></div>
              
              {/* Texte principal */}
              <div className="relative z-10 p-4 sm:p-6 text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-cyan-200 via-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] leading-relaxed italic">
                  {displayedText}
                </p>
                
                {/* Bordure lumineuse animée autour du texte */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl opacity-20 blur-lg animate-pulse"></div>
                
                {/* Effet de scan horizontal */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-2xl"></div>
                
                {/* Reflets cristallins */}
                <div className="absolute top-2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm opacity-40"></div>
                <div className="absolute bottom-2 right-1/4 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent blur-sm opacity-30"></div>
              </div>
              
              {/* Particules orbitales */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60 animation-delay-300"></div>
            </div>
          </div>
          
          {/* Bouton de fermeture X en haut à droite du contenu */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-6 sm:gap-8 max-w-5xl w-full flex-shrink-0">
            {navigationItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative group flex items-center justify-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 sm:duration-700 transform hover:scale-105 active:scale-95 flex-1 sm:max-w-xs ${
                  location.pathname === item.path
                    ? `bg-gradient-to-br from-slate-800/95 to-slate-700/95 ${item.borderColor} ${item.shadowColor} shadow-2xl`
                    : `bg-slate-800/95 border-slate-600/50 hover:bg-gradient-to-br hover:from-slate-700/95 hover:to-slate-600/95 ${item.hoverBorderColor} ${item.hoverShadowColor} hover:shadow-2xl`
                }`}
              >
                {/* Effet de grille futuriste */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:15px_15px] rounded-2xl sm:rounded-3xl opacity-30"></div>
                
                {/* Effet de lueur */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.glowFrom} ${item.glowTo} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-50 transition-all duration-300 sm:duration-700 blur-xl`}></div>
                
                {/* Particules animées */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                  <div className={`absolute -top-1 -right-1 w-3 h-3 ${item.dotColor} rounded-full animate-ping opacity-75`}></div>
                  <div className={`absolute -bottom-1 -left-1 w-3 h-3 ${item.dotColor2} rounded-full animate-ping opacity-75 animation-delay-300`}></div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  <h3 className={`text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold ${item.textColor} group-hover:text-white transition-colors duration-300 sm:duration-500 text-center`}>
                    {item.title}
                  </h3>
                </div>
                
                {/* Effet de scan */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 sm:duration-1000 rounded-2xl sm:rounded-3xl"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};