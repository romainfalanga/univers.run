import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const PivotTemporelPage: React.FC = () => {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(99,102,241,0.8)] mb-3 sm:mb-4 px-2">
            Le Pivot Temporel
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-indigo-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Le temps comme lien entre les deux budgets
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le temps joue un rôle unique dans ce modèle : <strong className="text-indigo-300">il est le pivot qui relie les deux budgets</strong>. Quand votre vitesse change, votre budget temps-espace se réorganise, et automatiquement, votre budget temps-échelle s'ajuste en miroir.
              </p>

              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">La Connexion Invisible</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le temps est présent dans les deux budgets : budget Espace-Temps (ET) et budget Temps-Échelle (TE). <strong className="text-white">C'est le curseur commun qui synchronise les deux</strong>. Lorsque vous modifiez votre vitesse spatiale, vous réduisez votre part de temps dans ET, et cette réduction se répercute immédiatement dans TE.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">Budget Espace-Temps (ET)</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Quand vous accélérez dans l'espace, votre temps ralentit. Le curseur temps diminue dans ce budget.
                  </p>
                  <div className="bg-cyan-800/30 p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-cyan-200 font-mono">
                      ET = Espace ↑ + Temps ↓ = 100%
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border border-indigo-400/30">
                  <h3 className="text-lg font-semibold text-indigo-300 mb-3">Budget Temps-Échelle (TE)</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Automatiquement, la réduction de temps dans ET libère de l'échelle dans TE. Vous plongez plus vite vers l'infiniment petit.
                  </p>
                  <div className="bg-indigo-800/30 p-3 rounded-lg">
                    <p className="text-xs sm:text-sm text-indigo-200 font-mono">
                      TE = Temps ↓ + Échelle ↑ = 100%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Un Mécanisme Symétrique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Tout ce qui est soustrait au temps dans ET réapparaît automatiquement comme échelle dans TE.</strong> C'est une conservation parfaite : le budget universel total reste constant, seule sa répartition change selon votre vitesse et votre environnement gravitationnel.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">L'Équilibre Cosmique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le pivot temporel garantit que <strong className="text-white">l'univers reste cohérent à toutes les échelles</strong>. Que vous soyez un photon filant à la vitesse de la lumière ou un atome au repos, vous êtes soumis à la même loi : votre mouvement total à travers le tissu d'espace-temps-d'échelle est toujours égal à la vitesse de la lumière.
                </p>
              </div>

            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/relativite-restreinte-echelles/budget-universel"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/relativite-restreinte-echelles/tapis-roulant"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
