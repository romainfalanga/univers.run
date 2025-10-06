import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const EnvironmentsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-cyan-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles#relativite-generale"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-3 sm:mb-4 px-2">
            Les Différents Environnements
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Comment la gravité locale modifie l'inclinaison du tapis roulant
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4 sm:mb-6">Du Vide au Trou Noir</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                L'inclinaison du tapis roulant n'est pas la même partout dans l'univers. Elle dépend de l'environnement gravitationnel local : <strong className="text-blue-300">la densité de masse et d'énergie autour de vous détermine l'angle de votre descente</strong>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-400/30">
              <h3 className="text-lg font-semibold text-green-300 mb-3">Région Calme et Vide</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                Le poids est faible : le tissu de l'espace-temps est presque plat car il n'y a quasiment pas de masse ou d'énergie.
              </p>
              <div className="bg-green-800/30 p-3 rounded-lg">
                <p className="text-xs sm:text-sm text-green-200">
                  <strong>Résultat :</strong> Tapis roulant avec une pente douce. Tu avances surtout dans le temps, et à peine dans l'échelle.
                </p>
              </div>
            </div>

            <div className="bg-yellow-900/20 p-4 sm:p-6 rounded-lg border border-yellow-400/30">
              <h3 className="text-lg font-semibold text-yellow-300 mb-3">Près d'une Étoile</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                Le poids devient lourd. La courbure du tissu d'espace-temps s'accentue.
              </p>
              <div className="bg-yellow-800/30 p-3 rounded-lg">
                <p className="text-xs sm:text-sm text-yellow-200">
                  <strong>Résultat :</strong> Quelqu'un appuie sur ton tapis roulant, augmentant son inclinaison. Ton budget glisse du temps vers l'échelle.
                </p>
              </div>
            </div>

            <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-400/30">
              <h3 className="text-lg font-semibold text-red-300 mb-3">Trou Noir</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                Le poids devient écrasant. La densité est telle que la courbure explose.
              </p>
              <div className="bg-red-800/30 p-3 rounded-lg">
                <p className="text-xs sm:text-sm text-red-200">
                  <strong>Résultat :</strong> Le tapis roulant se penche vers la verticale. Chute libre absolue vers l'échelle.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <Link
              to="/relativite-generale-echelles/escalator-universel"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
