import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const FormulaPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles-final"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-3 sm:mb-4 px-2">
            La Formule de la Relativité des Échelles
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            L'expression mathématique de l'inclinaison universelle
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">La Formule Unifiée</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Dans ce modèle, la relativité générale d'Einstein s'étend naturellement. L'inclinaison du tapis roulant dépend à la fois de votre vitesse et de l'environnement gravitationnel :
              </p>

              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <div className="bg-cyan-800/30 p-4 sm:p-6 rounded-lg text-center">
                  <p className="text-lg sm:text-xl font-mono text-cyan-200 mb-3">
                    Inclinaison = Vitesse × Coefficient_Gravitationnel
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">
                    Où Coefficient_Gravitationnel dépend de la courbure locale de l'espace-temps
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  Cette formule simple exprime une réalité profonde : <strong className="text-white">chaque objet dans l'univers suit la même loi fondamentale</strong>, où sa vitesse personnelle et son environnement gravitationnel se combinent pour déterminer son inclinaison cosmique.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Les Deux Contributions</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border border-indigo-400/30">
                  <h3 className="text-lg font-semibold text-indigo-300 mb-3">Contribution de la Vitesse</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Plus vous allez vite, plus votre composante personnelle d'inclinaison augmente. C'est l'effet de la relativité restreinte.
                  </p>
                  <div className="bg-indigo-800/30 p-3 rounded-lg">
                    <p className="text-sm font-mono text-indigo-200 text-center">
                      Inclinaison_Vitesse = v / c
                    </p>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      où v est votre vitesse et c la vitesse de la lumière
                    </p>
                  </div>
                </div>

                <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border border-purple-400/30">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">Contribution de la Gravité</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Plus la courbure locale est forte, plus le coefficient multiplicateur est grand. C'est l'effet de la relativité générale.
                  </p>
                  <div className="bg-purple-800/30 p-3 rounded-lg">
                    <p className="text-sm font-mono text-purple-200 text-center">
                      Coefficient_Gravitationnel = f(R)
                    </p>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      où R représente la courbure de l'espace-temps
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">La Combinaison</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ces deux contributions se multiplient pour créer l'inclinaison totale. <strong className="text-white">Votre vitesse personnelle est amplifiée par le coefficient gravitationnel de votre environnement</strong>. Ainsi, un objet au repos dans un champ gravitationnel intense aura une inclinaison due uniquement à la gravité, tandis qu'un photon dans le vide intergalactique aura une inclinaison due uniquement à sa vitesse.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 sm:mb-6">Les Cas Limites</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30">
                  <h4 className="font-semibold text-green-300 mb-2 text-center">Repos, Espace Plat</h4>
                  <p className="text-xs sm:text-sm text-gray-300 text-center mb-3">v = 0, R = 0</p>
                  <div className="bg-green-800/30 p-2 rounded">
                    <p className="text-xs font-mono text-green-200 text-center">Inclinaison ≈ 0</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">Tapis roulant presque plat, avancement surtout dans le temps</p>
                </div>

                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-400/30">
                  <h4 className="font-semibold text-yellow-300 mb-2 text-center">Vitesse Lumière, Espace Plat</h4>
                  <p className="text-xs sm:text-sm text-gray-300 text-center mb-3">v = c, R = 0</p>
                  <div className="bg-yellow-800/30 p-2 rounded">
                    <p className="text-xs font-mono text-yellow-200 text-center">Inclinaison = 1</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">Tapis roulant à 45°, partage équilibré temps-échelle</p>
                </div>

                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30">
                  <h4 className="font-semibold text-red-300 mb-2 text-center">Horizon du Trou Noir</h4>
                  <p className="text-xs sm:text-sm text-gray-300 text-center mb-3">R → ∞</p>
                  <div className="bg-red-800/30 p-2 rounded">
                    <p className="text-xs font-mono text-red-200 text-center">Inclinaison → ∞</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">Tapis roulant vertical, plongée totale dans l'échelle</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-900/40 to-emerald-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-lg font-semibold text-teal-200 mb-3">Les Environnements Intermédiaires</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Entre ces cas extrêmes, tous les objets de l'univers se situent quelque part sur ce spectre. <strong className="text-white">Un satellite en orbite, une planète autour de son étoile, une étoile dans sa galaxie</strong> : chacun avec son inclinaison unique, calculée par cette formule unifiée qui englobe à la fois vitesse et gravité.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4 sm:mb-6">L'Élégance de l'Unification</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  Cette formule simple capture l'essence de la Relativité des Échelles : <strong className="text-white">un seul moteur universel (la vitesse de la lumière), mais une infinité d'inclinaisons possibles</strong>, déterminées par la combinaison de votre vitesse personnelle et de la courbure gravitationnelle de votre environnement.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est l'harmonie entre la relativité restreinte d'Einstein (qui traite de la vitesse) et la relativité générale d'Einstein (qui traite de la gravité), étendue au tissu d'espace-temps-d'échelle à cinq dimensions.
              </p>

              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Une Loi Universelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  De l'électron au superamas galactique, du photon au trou noir, <strong className="text-white">tous obéissent à cette même loi fondamentale</strong>. C'est l'unité mathématique de l'univers, exprimée dans une formule qui relie vitesse, gravité, et échelle dans un cadre cohérent et élégant.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">La Symphonie Mathématique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette formule est la partition de la symphonie cosmique. Tous les instruments jouent la même note (c, la vitesse de la lumière), mais chacun avec son harmonique unique (son inclinaison), créant ensemble <strong className="text-white">la mélodie infinie de l'univers en cinq dimensions</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-8">
          <div className="flex justify-start">
            <Link
              to="/relativite-echelles-final/tapis-roulant"
              className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent : Le Tapis Roulant Unifié
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
