import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const InternalUniversesPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-indigo-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] mb-3 sm:mb-4 px-2">
            Les Univers Internes
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Raréfaction progressive et niveaux de complexité
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  Du côté de l'horizon interne, <strong className="text-white">un nouvel univers prend forme</strong>. Mais il n'a pas la complexité du monde parent.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Là où l'univers supérieur contenait des milliards de galaxies, le premier univers interne n'abrite probablement qu'une galaxie unique : un trou noir central et quelques étoiles autour.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/30 text-center">
                  <h4 className="font-semibold text-purple-300 mb-2">1er Niveau</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Milliards de galaxies → Une galaxie unique</p>
                </div>
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-400/30 text-center">
                  <h4 className="font-semibold text-indigo-300 mb-2">2e Niveau</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Une galaxie → Un amas stellaire</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30 text-center">
                  <h4 className="font-semibold text-blue-300 mb-2">3e Niveau</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Amas stellaire → Système solaire harmonieux</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Raréfaction Progressive</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Chaque descente raréfie la matière.</strong> Le tumulte s'apaise. Le désordre des grandes structures s'efface. À chaque étage, l'univers devient plus sobre, plus stable, plus harmonieux.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/trous-noirs-echelles/taille-univers"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/trous-noirs-echelles/harmonie"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
