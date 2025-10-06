import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const UniversalBudgetPage: React.FC = () => {
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
            to="/relativite-echelles#relativite-restreinte"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-3 sm:mb-4 px-2">
            Le Budget Universel
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Deux comptes reliés par le curseur temps
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  Einstein avait montré que notre mouvement se partage entre l'espace et le temps : <strong className="text-white">plus tu avances vite dans l'espace, moins tu avances vite dans le temps</strong>.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Dans mon modèle, ce partage s'étend. Il existe un <strong className="text-cyan-300">budget universel</strong>, découpé en deux comptes reliés par un même pivot : le curseur temps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/20 p-4 sm:p-6 rounded-lg border border-blue-400/30">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Budget Espace-Temps (ET)</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Le budget d'Einstein : partage entre mouvement spatial et écoulement temporel.
                  </p>
                  <div className="bg-blue-800/30 p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-blue-200 font-mono">
                      ET = Espace + Temps = 100%
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border border-indigo-400/30">
                  <h3 className="text-lg font-semibold text-indigo-300 mb-3">Budget Temps-Échelle (TE)</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Le nouveau budget : partage entre écoulement temporel et descente d'échelle.
                  </p>
                  <div className="bg-indigo-800/30 p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-indigo-200 font-mono">
                      TE = Temps + Échelle = 100%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">La Connexion par le Curseur Temps</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Ces deux budgets sont connectés par le curseur temps :</strong> tout ce qui est soustrait au temps dans ET réapparaît automatiquement dans TE. Modifier l'un, c'est forcer l'autre à s'ajuster.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-32"></div>
            <Link
              to="/relativite-restreinte-echelles/pivot-temporel"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
