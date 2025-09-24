import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Layers, Zap, Cpu, Binary, ArrowDown, Globe } from 'lucide-react';

// Hook pour détecter si on est sur mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return isMobile;
};

// Composant pour les chiffres binaires qui se téléportent
const TeleportingBinaryDigits: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Tableau des caractères possibles : 0, 1, q, ℓ
  const characters = ['0', '1', 'q', 'ℓ'];
  
  // Fonction pour générer un caractère aléatoire
  const getRandomCharacter = () => characters[Math.floor(Math.random() * characters.length)];

  // Fonction pour vérifier si deux positions se chevauchent
  const checkCollision = (newTop: number, newLeft: number, existingDigits: any[], minDistance: number = 0.8) => {
    return existingDigits.some(digit => {
      if (!digit.visible) return false; // Ignore les chiffres invisibles
      const distance = Math.sqrt(
        Math.pow(newTop - digit.top, 2) + Math.pow(newLeft - digit.left, 2)
      );
      return distance < minDistance;
    });
  };

  // Fonction pour générer une position sans collision
  const generateSafePosition = (existingDigits: any[], maxAttempts: number = 5) => {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const newTop = Math.random() * 90 + 5;
      const newLeft = Math.random() * 90 + 5;
      
      if (!checkCollision(newTop, newLeft, existingDigits)) {
        return { top: newTop, left: newLeft };
      }
    }
    
    // Si aucune position sûre n'est trouvée, retourner une position aléatoire
    return {
      top: Math.random() * 90 + 5,
      left: Math.random() * 90 + 5
    };
  };

  const [digits, setDigits] = React.useState(() => 
    Array.from({ length: isMobile ? 12 : 28 }, (_, i) => {
      // Génération initiale avec détection de collision
      const existingDigits: any[] = [];
      const position = generateSafePosition(existingDigits);
      
      const newDigit = {
        id: i,
        value: getRandomCharacter(),
        top: position.top,
        left: position.left,
        opacity: Math.random() * 0.3 + 0.1,
        size: ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)],
        visible: true,
        nextChangeTime: Date.now() + Math.random() * (isMobile ? 800 : 200) + (isMobile ? 400 : 100)
      };
      
      existingDigits.push(newDigit);
      return newDigit;
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
                nextChangeTime: now + (isMobile ? 500 : 200)
              };
            } else {
              // Réapparaître à un nouvel endroit avec de nouvelles propriétés (sans collision)
              const position = generateSafePosition(prevDigits.filter(d => d.id !== digit.id && d.visible));
              
              return {
                ...digit,
                value: getRandomCharacter(),
                top: position.top,
                left: position.left,
                opacity: Math.random() * 0.3 + 0.1,
                size: ['text-xl', 'text-2xl', 'text-3xl'][Math.floor(Math.random() * 3)],
                visible: true,
                nextChangeTime: now + Math.random() * (isMobile ? 1200 : 400) + (isMobile ? 800 : 300)
              };
            }
          }
          return digit;
        })
      );
    }, isMobile ? 400 : 150); // Vérification plus lente sur mobile

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            textShadow: isMobile ? '0 0 5px #00FF41' : '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {digit.value}
        </div>
      ))}
    </div>
  );
};

const TeleportingBinaryDigitsMemo = React.memo(TeleportingBinaryDigits);

export const CodeUniversePage: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <div 
        className="min-h-screen relative z-10"
      >
        {/* Effets d'arrière-plan améliorés */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-indigo-900/30 z-0"></div>
        
        {/* Champ d'étoiles animé - désactivé sur mobile */}
        {!isMobile && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.2),transparent_50%)] animate-star-field z-0"></div>
        )}
        
        {/* Grille quantique subtile */}
        <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.03)_50%,transparent_75%)] bg-[length:80px_80px] opacity-60 z-0 ${!isMobile ? 'animate-pulse' : ''}`}></div>
        
        {/* Effet de lueur cosmique - désactivé sur mobile */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-cosmic-glow z-0"></div>
        )}
        
        {/* Chiffres binaires téléportants */}
        {!isMobile && <TeleportingBinaryDigitsMemo />}
        
        {/* Page d'introduction */}
        <div className="w-full flex items-start justify-center p-4 sm:p-6 pt-4 relative z-20">
          <div className="max-w-4xl mx-auto w-full text-center">
            
            {/* Titre principal */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_40px_rgba(6,182,212,1)] mb-4 sm:mb-6 leading-tight tracking-wide neon-glow">
                Le code de l'univers
              </h1>
            </div>

            {/* Contenu d'introduction consolidé */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {/* Bloc principal d'introduction */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl floating-card">
                <div className="space-y-4 sm:space-y-5">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed font-medium">
                    Imaginons que l'univers fonctionne avec du code informatique.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed font-medium">
                    Chaque couche correspond à un langage ou à un niveau d'abstraction, qui encapsule le précédent et prépare le suivant.
                  </p>
                  
                  <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-yellow-400/40 glow-border-yellow">
                    <p className="text-base sm:text-lg lg:text-xl text-yellow-100 leading-relaxed font-semibold">
                      Ce que nous voyons à l'échelle humaine : "le monde macroscopique" est une interface utilisateur : le rendu final d'un immense processus de compilation qui descend jusqu'à une mer de 0 et 1.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section des Cadres Supérieurs - nouvelle section */}
            <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-gray-400/50 shadow-2xl mb-6 sm:mb-8 floating-card">
              <div className="flex items-center mb-4 sm:mb-6">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-gray-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-300">
                  Le cadre supérieur
                </h2>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 font-medium">
                Avant d'explorer les échelles qui composent la réalité, il faut comprendre qu'elles ne peuvent exister que parce qu'il y a un <strong className="text-white">cadre supérieur</strong> qui les contient et les rend possibles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Cadre Universel : Tissu de l'espace-temps */}
                <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-blue-400/40 shadow-xl">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-blue-400" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-300">
                      Tissu de l'espace-temps
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                    <p className="font-medium">
                       Le tissu de l'espace-temps est le cadre fondamentale dans lequel la matière prend forme. C'est la toile décrite par la relativité générale d'Einstein : un maillage invisible qui relie l'espace et le temps en une seule structure.
                    </p>
                  </div>
                </div>
                
                {/* Cadre Informatique : Appareil électronique */}
                <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-purple-400/40 shadow-xl">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Cpu className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-purple-400" />
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-purple-300">
                      Appareil électronique
                    </h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                    <p className="font-medium">
                      L'appareil électronique est le support qui permet à l'interface de prendre forme : c'est le smartphone ou tout autre dispositif qui sert de support materiel au code et lui donne une existence concrète.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-gray-900/60 to-slate-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border-l-4 border-gray-400">
                <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed font-medium">
                  <strong className="text-white">Point clé :</strong> Ces cadres supérieurs ne sont pas des "échelles" au sens où nous l'entendons dans la cascade qui suit. Ils sont les <strong className="text-gray-300">fondations</strong> qui permettent à toutes les échelles d'exister et d'interagir. Dans l'analogie, le tissu de l'espace-temps et l'appareil électronique jouent le même rôle : ils sont les <strong className="text-gray-300">environnements d'exécution</strong> de leurs cascades respectives.
                </p>
              </div>
            </div>

            {/* Cascade des échelles - Section ajoutée */}
            <div className="bg-gradient-to-br from-emerald-900/60 to-teal-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border-2 border-emerald-400/50 shadow-2xl mb-6 sm:mb-8 floating-card glow-border-emerald">
              <div className="flex items-center mb-4 sm:mb-6">
                <Layers className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-emerald-400 animate-pulse" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-300 neon-text-emerald">
                  La Cascade des Échelles
                </h2>
              </div>
              
              {/* Première partie : Échelles "classiques" observables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   🌌 Cascade Universelle
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { 
                        level: "Échelle macroscopique", 
                        scale: "10<sup>-4</sup> m à 1 m", 
                        desc: "Ce que nous voyons : humains, objets, monde visible", 
                        connection: "→ Formé par l'assemblage de milliards de molécules organisées",
                        color: "bg-purple-900/40 border-purple-400" 
                      },
                      { 
                        level: "Échelle moléculaire", 
                        scale: "10<sup>-9</sup> à 10<sup>-6</sup> m", 
                        desc: "Assemblages d'atomes : ADN, protéines, matériaux", 
                        connection: "→ Propriétés émergentes par liaison d'atomes spécifiques",
                        color: "bg-blue-900/40 border-blue-400" 
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">
                          {item.level}
                          <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: item.scale }}></span>
                        </div>
                        <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                        {item.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {item.connection}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   💻 Cascade Informatique
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { 
                        level: "Interface utilisateur", 
                        desc: "Ce que nous voyons : humains, objets, monde visible", 
                        connection: "→ Rendu généré par la du HTML/CSS",
                        color: "bg-purple-900/40 border-purple-400" 
                      },
                      { 
                        level: "HTML/CSS", 
                        desc: "L'HTML et le CSS décrivent la réalité et son fonctionnement", 
                        connection: "→ L'HTML et le CSS sont généré par les composants Reacts",
                        color: "bg-blue-900/40 border-blue-400" 
                      }
                    ].map((item, index) => (
                      <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center`}>
                        <div className="font-bold text-white text-xs sm:text-sm">{item.level}</div>
                        <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                        {item.connection && (
                          <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                            {item.connection}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Paragraphe de transition : Superposition Quantique */}
              <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-indigo-400/50 shadow-2xl mb-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-indigo-300 text-center mb-3 sm:mb-4">
                  Transition vers la Superposition Quantique
                </h3>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                  <p>
                    À partir de l'échelle atomique (~10⁻¹⁰ m), tout change : nous entrons dans le domaine de la <strong className="text-purple-300">superposition quantique</strong>.
                  </p>
                  <p>
                    <strong className="text-cyan-300">Dans l'univers :</strong> à cette échelle, les entités physiques (atomes, électrons, particules) existent dans plusieurs états à la fois. Dans l'<strong className="text-purple-300">expérience de la double fente</strong>, par exemple, un électron ou un atome passe simultanément par les deux fentes, créant des interférences avec lui-même. Leur existence est une <strong className="text-yellow-300">probabilité</strong> diffuse jusqu'à ce qu'une observation ou une mesure "effondre" cette superposition en un état défini.
                  </p>
                  <p>
                    <strong className="text-green-300">Dans l'application :</strong> En suivant cette logique, l'organisation des composants React qui produit le HTML et le CSS n'existe pas sous une forme unique et figée. Elle se déploie comme un ensemble de <strong className="text-yellow-300">probabilités</strong> d'agencements de composants possibles. Ce n'est qu'au moment où l'on observe cette organisation que les composants prennent une configuration particulière.

De même, le JavaScript qui compose un composant React n'existe pas à l'avance sous une seule écriture. Il est une <strong className="text-yellow-300">probabilité</strong> parmi une infinité de manières de produire le même rendu. Ce n'est qu'au moment où l'on "ouvre" le composant et que l'on regarde sous son capot que le code se matérialise dans une version précise, comme si l'acte d'observation faisait émerger une implémentation unique parmi toutes les possibilités.
                  </p>
                </div>
              </div>

              {/* Deuxième partie : Échelles en "superposition quantique" */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Cascade Universelle (Physique) - Suite */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   🌌 Cascade Universelle (Suite)
                  </h3>
                  {[
                    {
                      level: "Échelle atomique",
                      scale: "10<sup>-10</sup> m",
                      desc: "Briques de la matière en superposition quantique : hydrogène, carbone, fer",
                      connection: "→ Formés par l'assemblage de protons, neutrons et électrons",
                      color: "bg-green-900/40 border-green-400"
                    },
                    {
                      level: "Échelle nucléaire",
                      scale: "10<sup>-15</sup> m",
                      desc: "Cœur des atomes révélé par observation : protons et neutrons",
                      connection: "→ Constitués de quarks liés par des gluons",
                      color: "bg-yellow-900/40 border-yellow-400"
                    },
                    {
                      level: "Échelle des particules fondamentales",
                      scale: "10<sup>-18</sup> m",
                      desc: "Constituants ultimes révélés par mesure : quarks, leptons, bosons",
                      connection: "→ Révélées comme briques ultimes",
                      color: "bg-orange-900/40 border-orange-400"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center mb-2 sm:mb-3`}>
                      <div className="font-bold text-white text-xs sm:text-sm">
                        {item.level}
                        {item.scale && <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: item.scale }}></span>}
                      </div>
                      <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                      {item.connection && (
                        <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                          {item.connection}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Cascade Informatique (Logicielle) - Suite */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-emerald-200 mb-3 sm:mb-4">
                   💻 Cascade Informatique (Suite)
                  </h3>
                  {[
                    {
                      level: "Composants React",
                      desc: "Composants de la réalité réutilisables qui permettent la création du l'HTML et du CSS",
                      connection: "→ Logique et structure définies par le code JavaScript",
                      color: "bg-green-900/40 border-green-400"
                    },
                    {
                      level: "JavaScript",
                      desc: "Logique du fonctionnement de chaque composant codé en Java script",
                      connection: "→ Java Script est fait de 0 et de 1, rendue lisible par des programmes",
                      color: "bg-yellow-900/40 border-yellow-400"
                    },
                    {
                      level: "0 et 1 (Binaire)",
                      desc: "Les informations élémentaires de la réalité compilés en 0 et 1.",
                      connection: "→ C'est la brique ultime du code ",
                      color: "bg-orange-900/40 border-orange-400"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`p-2 sm:p-3 rounded-lg border-l-4 ${item.color} min-h-[60px] sm:min-h-[70px] flex flex-col justify-center mb-2 sm:mb-3`}>
                      <div className="font-bold text-white text-xs sm:text-sm">{item.level}</div>
                      <div className="text-gray-300 text-xs mt-1">{item.desc}</div>
                      {item.connection && (
                        <div className="text-yellow-200 text-xs mt-1 italic font-medium">
                          {item.connection}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Échelle de Planck - section séparée */}
              <div className="mt-4 sm:mt-6">
                <div className="p-2 sm:p-3 rounded-lg border-l-4 bg-red-900/40 border-red-400 min-h-[60px] sm:min-h-[70px] flex flex-col justify-center">
                  <div className="font-bold text-white text-xs sm:text-sm">
                    Échelle de Planck
                    <span className="text-cyan-300 font-mono ml-2" dangerouslySetInnerHTML={{ __html: "10<sup>-35</sup> m" }}></span>
                  </div>
                  <div className="text-gray-300 text-xs mt-1">L'échelle de Planck est la limite ultime de la réalité : à cette échelle, l'espace, le temps et la matière cessent d'avoir une signification</div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 border-l-4 border-cyan-400">
                <p className="text-xs sm:text-sm lg:text-base text-cyan-100 leading-relaxed font-medium">
                <strong className="text-cyan-300">Chaque couche encapsule la précédente :</strong> L'interface utilisateur que nous voyons est générée par du HTML et du CSS, eux-mêmes issus des composants React, écrits en JavaScript. Ce JavaScript, à son niveau le plus fondamental, est composé de 0 et de 1.

De la même façon, notre corps est constitué de molécules, elles-mêmes faites d'atomes, formés de nucléons, composés de particules fondamentales.
                </p>
              </div>
            </div>

            {/* Bouton "Dieu code en Binaire" */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link
                to="/god-binary"
                className="group relative bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 hover:from-yellow-700 hover:via-orange-700 hover:to-red-700 text-white rounded-full px-8 py-4 sm:px-12 sm:py-6 shadow-2xl transition-all duration-700 transform hover:scale-115 active:scale-95 border-4 border-yellow-400/60 hover:border-yellow-300/80 overflow-hidden"
              >
                {/* Effet de lueur divine */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-red-400/30 rounded-full blur-2xl animate-pulse group-hover:blur-3xl transition-all duration-700"></div>
                
                {/* Particules divines */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-80 group-hover:opacity-100"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${1 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Anneaux énergétiques orbitaux */}
                <div className="absolute -inset-4 border-2 border-yellow-400/30 rounded-full animate-spin opacity-40 group-hover:opacity-70 transition-all duration-700" style={{ animationDuration: '8s' }}></div>
                <div className="absolute -inset-6 border border-orange-400/20 rounded-full animate-spin opacity-30 group-hover:opacity-60 transition-all duration-700" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
                <div className="absolute -inset-8 border border-red-400/15 rounded-full animate-spin opacity-20 group-hover:opacity-50 transition-all duration-700" style={{ animationDuration: '16s' }}></div>
                
                {/* Effet de scan divin */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-full"></div>
                
                {/* Effet de pulsation divine */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-full animate-pulse opacity-50 group-hover:opacity-80 transition-all duration-700"></div>
                
                {/* Contenu du bouton */}
                <div className="relative z-10 flex items-center justify-center">
                  <Binary className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 group-hover:animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  <span className="text-base sm:text-lg lg:text-xl font-black whitespace-nowrap group-hover:text-yellow-100 transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                    Dieu Code en Binaire
                  </span>
                </div>
                
                {/* Bordure lumineuse animée */}
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full opacity-40 blur-xl animate-pulse group-hover:opacity-80 group-hover:blur-2xl transition-all duration-700"></div>
                
                {/* Particules orbitales externes */}
                <div className="absolute -top-3 -right-3 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-orange-400 rounded-full animate-ping opacity-60 group-hover:opacity-90 transition-opacity duration-700 animation-delay-300"></div>
                <div className="absolute -top-3 -left-3 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-50 group-hover:opacity-80 transition-opacity duration-700 animation-delay-500"></div>
                <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-yellow-300 rounded-full animate-ping opacity-50 group-hover:opacity-80 transition-opacity duration-700 animation-delay-700"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};