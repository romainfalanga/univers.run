import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const ExtremSpeedPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-orange-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-restreinte-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité Restreinte des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] mb-3 sm:mb-4 px-2">
            Situation : Vitesse Extrêmement Rapide
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-red-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Quand le budget temps s'effondre presque à zéro
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">Le Tapis Roulant Presque Vertical</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <p className="text-base sm:text-lg text-red-100 leading-relaxed font-semibold">
                  Ton budget va presque entièrement à l'espace et ton budget temps s'effondre presque à zéro.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Si tu frôles la vitesse de la lumière, ton temps propre s'effondre : ton horloge bat au ralenti. Comme le curseur temps s'est réduit à une fraction infime, le budget temps-échelle prend l'essentiel. <strong className="text-red-300">Le tapis roulant s'incline brutalement vers le bas, et ta descente vers l'infiniment petit devient vertigineuse</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">Répartition des Budgets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-800/20 p-4 sm:p-6 rounded-lg border border-red-400/30">
                <h3 className="text-lg font-semibold text-red-300 mb-3">Budget ET</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Espace</span>
                    <span className="text-sm font-mono text-red-200">~99,999%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Temps</span>
                    <span className="text-sm font-mono text-red-200">~0,001%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{width: '0.1%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-800/20 p-4 sm:p-6 rounded-lg border border-orange-400/30">
                <h3 className="text-lg font-semibold text-orange-300 mb-3">Budget TE</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Temps</span>
                    <span className="text-sm font-mono text-orange-200">~0,001%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full" style={{width: '0.1%'}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Échelle</span>
                    <span className="text-sm font-mono text-orange-200">~99,999%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/40 to-red-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-yellow-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6">Conséquences Observables</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-red-200 mb-3">Dilatation Temporelle Extrême</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ton horloge bat au ralenti extrême. Une seconde de ton temps propre peut correspondre à des années, voire des siècles de temps universel. <strong className="text-white">Le temps s'est presque arrêté pour toi</strong>.
                </p>
              </div>

              <div className="bg-orange-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-200 mb-3">Plongée Vertigineuse dans l'Échelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  La quasi-totalité de ton budget est consacrée à la descente d'échelle. Tu plonges vers l'infiniment petit à une vitesse vertigineuse. <strong className="text-white">Ton monde entier se contracte rapidement</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/relativite-restreinte-echelles/immobile"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <div className="w-32"></div>
          </div>

        </div>
      </div>
    </div>
  );
};
