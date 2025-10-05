import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = [
    {
      title: "Tissu d'Espace-Temps-d'Échelle",
      path: "/tissu-espace-temps-echelle",
      colorFrom: "from-emerald-900/40",
      colorTo: "to-teal-900/30",
      borderColor: "border-emerald-400",
      subPages: [
        { title: "La Superposition des Tissus", path: "/tissu-espace-temps-echelle/superposition" },
        { title: "Le Tapis Roulant", path: "/tissu-espace-temps-echelle/tapis-roulant" }
      ]
    },
    {
      title: "Relativité Restreinte des Échelles",
      path: "/relativite-restreinte-echelles",
      colorFrom: "from-cyan-900/40",
      colorTo: "to-blue-900/30",
      borderColor: "border-cyan-400",
      subPages: [
        { title: "Le Budget Universel", path: "/relativite-restreinte-echelles/budget-universel" },
        { title: "Le Pivot Temporel", path: "/relativite-restreinte-echelles/pivot-temporel" },
        { title: "Le Tapis Roulant", path: "/relativite-restreinte-echelles/tapis-roulant" },
        { title: "Situation : Presque Immobile", path: "/relativite-restreinte-echelles/immobile" },
        { title: "Situation : Vitesse Extrêmement Rapide", path: "/relativite-restreinte-echelles/vitesse-extreme" }
      ]
    },
    {
      title: "Relativité Générale des Échelles",
      path: "/relativite-generale-echelles",
      colorFrom: "from-purple-900/40",
      colorTo: "to-indigo-900/30",
      borderColor: "border-purple-400",
      subPages: [
        { title: "Le Tapis roulant", path: "/relativite-generale-echelles/escalator-universel" },
        { title: "Les Différents Environnements", path: "/relativite-generale-echelles/environnements" }
      ]
    },
    {
      title: "Les Tapis Roulants",
      path: "/relativite-echelles-final",
      colorFrom: "from-purple-900/40",
      colorTo: "to-pink-900/30",
      borderColor: "border-purple-400",
      subPages: []
    },
    {
      title: "Le Musée des Dimensions",
      path: "/experiences-pensee-echelles",
      colorFrom: "from-orange-900/40",
      colorTo: "to-red-900/30",
      borderColor: "border-orange-400",
      subPages: [
        { title: "L'Entrée du Musée", path: "/experiences-pensee-echelles/entree-musee" },
        { title: "La Première Pièce", path: "/experiences-pensee-echelles/premiere-piece" }
      ]
    },
    {
      title: "L'Expansion",
      path: "/expansion-interne",
      colorFrom: "from-indigo-900/40",
      colorTo: "to-purple-900/30",
      borderColor: "border-indigo-400",
      subPages: [
        { title: "L'Illusion de l'Expansion", path: "/expansion-interne/illusion-expansion" },
        { title: "La Loi de Hubble Réinterprétée", path: "/expansion-interne/loi-hubble" },
        { title: "L'Énergie Sombre Réexaminée", path: "/expansion-interne/energie-sombre" }
      ]
    },
    {
      title: "Les Trous Noirs",
      path: "/trous-noirs-echelles",
      colorFrom: "from-gray-900/40",
      colorTo: "to-black/30",
      borderColor: "border-gray-400",
      subPages: [
        { title: "Création", path: "/trous-noirs-echelles/creation" },
        { title: "Le Passage : Un Saut d'Échelle", path: "/trous-noirs-echelles/passage" },
        { title: "Pourquoi le Retour est Impossible", path: "/trous-noirs-echelles/retour-impossible" },
        { title: "La Taille de l'Univers Quantique", path: "/trous-noirs-echelles/taille-univers" },
        { title: "Les Univers Internes", path: "/trous-noirs-echelles/univers-internes" },
        { title: "L'Harmonie au Bout de la Descente", path: "/trous-noirs-echelles/harmonie" },
        { title: "La Singularité", path: "/trous-noirs-echelles/singularite" },
        { title: "L'Horizon des Événements", path: "/trous-noirs-echelles/horizon" },
        { title: "L'Invisibilité du Trou Noir", path: "/trous-noirs-echelles/invisibilite" },
        { title: "Derrière l'Horizon", path: "/trous-noirs-echelles/derriere-horizon" }
      ]
    }
  ];

  return (
    <>
      <nav className="fixed bottom-0 w-full bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-xl border-t border-amber-500/30 shadow-2xl z-50">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 z-10"></div>

        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2 sm:py-3 relative">

            <button
              onClick={toggleMenu}
              className={`relative group text-white rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(251,191,36,0.5)] hover:shadow-[0_0_80px_rgba(245,158,11,0.8)] border-4 border-amber-400/40 hover:border-yellow-400/80 ${
                isMenuOpen
                  ? 'bg-gradient-to-r from-red-600/95 via-pink-600/95 to-red-600/95'
                  : 'bg-gradient-to-r from-slate-900/95 via-amber-900/95 to-yellow-900/95'
              } p-3 sm:p-4`}
            >
              <div className={`absolute inset-0 rounded-3xl ${
                isMenuOpen
                  ? 'bg-gradient-to-r from-red-900/95 via-pink-900/95 via-red-800/95 to-red-900/95'
                  : 'bg-gradient-to-r from-slate-900/95 via-amber-900/95 via-yellow-900/95 to-amber-900/95'
              }`}></div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,191,36,0.15)_1px,transparent_1px),linear-gradient(rgba(251,191,36,0.15)_1px,transparent_1px)] bg-[size:15px_15px] rounded-3xl"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 via-yellow-500/20 via-orange-500/20 to-transparent bg-[length:200%_100%] animate-gradient-x rounded-3xl"></div>

              <div className={`absolute inset-0 rounded-3xl border-2 shadow-[0_0_30px_rgba(251,191,36,0.4)] group-hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all duration-1000 ${
                isMenuOpen
                  ? 'border-red-400/50 group-hover:border-red-400/70'
                  : 'border-amber-400/50 group-hover:border-yellow-400/70'
              }`}></div>
              <div className="absolute inset-1 rounded-3xl border border-yellow-400/30 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:border-orange-400/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-1000"></div>
              <div className="absolute inset-2 rounded-3xl border border-orange-400/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] group-hover:border-amber-400/40 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] transition-all duration-1000"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-3xl transform rotate-12"></div>

              <div className={`absolute -inset-6 rounded-3xl blur-2xl animate-pulse opacity-40 group-hover:opacity-80 group-hover:blur-3xl transition-all duration-1000 ${
                isMenuOpen
                  ? 'bg-gradient-to-r from-red-600/30 via-pink-600/30 via-red-600/30 to-pink-600/30'
                  : 'bg-gradient-to-r from-amber-600/30 via-yellow-600/30 via-orange-600/30 to-amber-600/30'
              }`}></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 via-yellow-300/10 to-transparent bg-[length:300%_100%] animate-gradient-x rounded-3xl opacity-30 group-hover:opacity-60 transition-all duration-1000"></div>

              <div className={`absolute inset-0 rounded-3xl blur-xl animate-pulse group-hover:blur-2xl transition-all duration-1000 ${
                isMenuOpen
                  ? 'bg-gradient-to-r from-red-400/20 via-pink-400/20 to-red-400/20'
                  : 'bg-gradient-to-r from-amber-400/20 via-yellow-400/20 to-orange-400/20'
              }`}></div>

              <div className="relative z-10">
                <div className="relative">
                  {isMenuOpen ? (
                    <X className="w-6 h-6 sm:w-8 sm:h-8 relative z-10 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
                  ) : (
                    <Menu className="w-6 h-6 sm:w-8 sm:h-8 relative z-10 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
                  )}

                  <div className="absolute inset-0 opacity-30 blur-sm">
                    {isMenuOpen ? (
                      <X className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                    ) : (
                      <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                    )}
                  </div>

                  <div className={`absolute -inset-2 rounded-2xl opacity-20 blur-lg animate-pulse ${
                    isMenuOpen
                      ? 'bg-gradient-to-r from-red-400 via-pink-400 via-red-400 to-pink-400'
                      : 'bg-gradient-to-r from-amber-400 via-yellow-400 via-orange-400 to-amber-400'
                  }`}></div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 animate-scan rounded-2xl"></div>

                  <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-sm opacity-40"></div>
                  <div className="absolute bottom-0 right-1/4 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-300/90 to-transparent blur-sm opacity-30"></div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/0 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-yellow-400/0 animate-pulse animation-delay-300"></div>
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent animate-scan pointer-events-none"></div>
      </nav>

      <div
        className={`fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-slate-900/98 via-emerald-900/98 to-teal-900/98 backdrop-blur-2xl shadow-2xl transition-all duration-700 ease-in-out z-[99999] overflow-hidden ${
          isMenuOpen
            ? 'opacity-100 visible overflow-y-auto pointer-events-auto'
            : 'opacity-0 invisible overflow-hidden pointer-events-none'
        }`}
        style={{ zIndex: 99999 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            e.preventDefault();
            e.stopPropagation();
            setIsMenuOpen(false);
          }
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>

        <div
          className="h-full flex flex-col items-center justify-start p-4 sm:p-8 pt-12 sm:pt-16 pb-20 overflow-y-auto relative z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-8 sm:mb-12">
            <div className="relative group cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 via-teal-900/95 to-emerald-900/95 rounded-3xl"></div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.15)_1px,transparent_1px)] bg-[size:25px_25px] rounded-3xl"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 via-teal-500/10 via-cyan-500/10 to-transparent bg-[length:200%_100%] animate-gradient-x rounded-3xl"></div>

              <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400/40 shadow-[0_0_30px_rgba(16,185,129,0.3)]"></div>
              <div className="absolute inset-1 rounded-3xl border border-teal-400/30 shadow-[0_0_20px_rgba(20,184,166,0.2)]"></div>
              <div className="absolute inset-2 rounded-3xl border border-cyan-400/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-3xl transform rotate-12"></div>

              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 via-cyan-600/20 to-emerald-600/20 rounded-3xl blur-xl animate-pulse opacity-60 group-hover:opacity-100 transition-all duration-1000"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/5 via-teal-300/5 to-transparent bg-[length:300%_100%] animate-gradient-x rounded-3xl opacity-50 group-hover:opacity-80 transition-all duration-1000"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 rounded-3xl blur-2xl animate-pulse group-hover:blur-xl transition-all duration-1000"></div>

              <h2 className="relative z-10 text-2xl sm:text-4xl font-black mb-0 transform transition-all duration-1000 p-3 sm:p-6 rounded-3xl overflow-hidden">
                <span className="relative z-10 bg-gradient-to-r from-emerald-300 via-teal-300 via-cyan-300 to-green-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] group-hover:drop-shadow-[0_0_50px_rgba(20,184,166,1)] transition-all duration-1000 font-extrabold tracking-wider whitespace-nowrap">
                  Relativité des échelles
                </span>

                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-400 via-cyan-400 to-emerald-400 rounded-3xl opacity-30 blur-2xl animate-pulse group-hover:opacity-60 group-hover:blur-3xl transition-all duration-1000"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-3xl"></div>

                <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm opacity-60 group-hover:opacity-100 transition-all duration-1000"></div>
                <div className="absolute bottom-0 right-1/4 w-1/3 h-1 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent blur-sm opacity-40 group-hover:opacity-80 transition-all duration-1000"></div>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-6xl w-full">
            {sections.map((section, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <Link
                  to={section.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center justify-between p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-br ${section.colorFrom} ${section.colorTo} ${section.borderColor} hover:shadow-2xl`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:15px_15px] rounded-xl sm:rounded-2xl opacity-30"></div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-300 relative z-10">
                    {section.title}
                  </h3>
                </Link>

                {section.subPages.length > 0 && (
                  <div className="ml-4 sm:ml-6 space-y-2">
                    {section.subPages.map((subPage, subIndex) => {
                      const isActive = location.pathname === subPage.path;
                      return (
                        <Link
                          key={subIndex}
                          to={subPage.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`relative block p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:translate-x-2 ${
                            isActive
                              ? 'bg-gradient-to-r from-amber-900/40 via-yellow-900/30 to-amber-900/40 border-amber-400/40 hover:border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]'
                              : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {isActive && (
                            <>
                              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,191,36,0.1)_1px,transparent_1px),linear-gradient(rgba(251,191,36,0.1)_1px,transparent_1px)] bg-[size:15px_15px] rounded-lg opacity-30"></div>

                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 via-yellow-500/10 to-transparent bg-[length:200%_100%] animate-gradient-x rounded-lg"></div>

                              <div className="absolute inset-0 rounded-lg border border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.2)]"></div>

                              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 via-yellow-600/20 to-amber-600/20 rounded-lg blur-md animate-pulse opacity-40"></div>
                            </>
                          )}

                          <p className={`relative z-10 text-sm sm:text-base transition-colors ${
                            isActive
                              ? 'text-amber-200 font-semibold'
                              : 'text-gray-200 hover:text-white'
                          }`}>
                            {subPage.title}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
