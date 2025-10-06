import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const ImmobileStatePage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-emerald-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles#relativite-restreinte"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-3 sm:mb-4 px-2">
            Situation : Presque Immobile
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-green-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Quand le budget va presque entièrement au temps
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-300 mb-4 sm:mb-6">Le Tapis Roulant Presque Plat</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
                <p className="text-base sm:text-lg text-green-100 leading-relaxed font-semibold">
                  Ton budget va presque entièrement au temps.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Si tu es presque immobile, la quasi-totalité de ton budget est consacrée au temps. Tu avances dans ton horloge à plein régime, et ton tapis roulant d'échelle descend à peine. <strong className="text-green-300">L'inclinaison de ton tapis roulant est très faible, presque plate</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 sm:mb-6">Répartition des Budgets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-800/20 p-4 sm:p-6 rounded-lg border border-green-400/30">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Budget ET</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Espace</span>
                    <span className="text-sm font-mono text-green-200">~0,001%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '0.1%'}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Temps</span>
                    <span className="text-sm font-mono text-green-200">~99,999%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-800/20 p-4 sm:p-6 rounded-lg border border-emerald-400/30">
                <h3 className="text-lg font-semibold text-emerald-300 mb-3">Budget TE</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Temps</span>
                    <span className="text-sm font-mono text-emerald-200">~99,999%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{width: '99.9%'}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Échelle</span>
                    <span className="text-sm font-mono text-emerald-200">~0,001%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{width: '0.1%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-900/40 to-cyan-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-teal-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-teal-300 mb-4 sm:mb-6">Conséquences Observables</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-green-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-green-200 mb-3">Temps Propre Maximal</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ton horloge bat à pleine vitesse. Chaque seconde de temps universel correspond à une seconde complète de ton temps propre. <strong className="text-white">Tu vis le temps à son rythme naturel maximal</strong>.
                </p>
              </div>

              <div className="bg-emerald-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <h3 className="text-lg font-semibold text-emerald-200 mb-3">Descente d'Échelle Minimale</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ta descente vers l'infiniment petit est imperceptible. Le tapis roulant est si plat que tu sembles stable dans l'échelle. <strong className="text-white">L'effet d'échelle est négligeable</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/relativite-restreinte-echelles/tapis-roulant"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/relativite-restreinte-echelles/vitesse-extreme"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Suivant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
