import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const EventHorizonPage: React.FC = () => {
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
            to="/relativite-echelles#trous-noirs"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-3 sm:mb-4 px-2">
            L'Horizon des Événements
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Frontière mystérieuse et changement de règle
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  L'horizon est la frontière mystérieuse des trous noirs, au-delà de laquelle rien ne revient. Dans les équations d'Einstein, l'espace s'inverse en temps et tout se fige.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                <strong className="text-blue-300">La Relativité des échelles en donne une explication et une image claire :</strong> le tapis roulant propre de l'objet qui tombe penche de plus en plus, jusqu'à se dresser presque à la verticale.
              </p>

              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">Changement de Règle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  La Relativité des échelles en donne une explication claire : <strong className="text-white">le tapis roulant propre de l'objet qui tombe penche de plus en plus, jusqu'à se dresser presque à la verticale</strong>. C'est le moment où la règle qui mesure la réalité change.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Continuité pour l'Observateur</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Pour l'observateur extérieur qui observe l'astre tomber dans le trou noir, tout paraît figé car ce qui se passe est projeté trop loin dans l'infiniment petit.
                  Mais pour l'objet qui franchit l'horizon, <strong className="text-white">rien ne s'arrête : il poursuit sa marche à la vitesse de la lumière</strong>, et, dès qu'il passe l'horizon des événements, tout redevient normal, mais à un cran plus profond de la réalité.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/trous-noirs-echelles/singularite"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/trous-noirs-echelles/invisibilite"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-black hover:from-gray-500 hover:to-gray-800 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
