import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const SingularityPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-purple-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-purple-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(236,72,153,0.8)] mb-3 sm:mb-4 px-2">
            La Singularité
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-pink-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Réinterprétation du concept et erreur de perspective
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-pink-400/30 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <p className="text-base sm:text-lg text-pink-100 leading-relaxed">
                  En relativité générale, le cœur d'un trou noir est une singularité : un point de densité infinie. <strong className="text-white">Mais cette image est une illusion née de nos limites de mesure</strong>.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Dans la Relativité des échelles, <strong className="text-purple-300">la singularité n'existe pas</strong>. Ce qui s'effondre n'est pas concentré en un point, mais projeté bien plus loin dans l'infiniment petit.
              </p>

              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Erreur de Perspective</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le changement d'échelle transforme notre perception : <strong className="text-white">la matière continue d'exister, mais à une granularité que nos règles actuelles ne peuvent plus saisir</strong>. La "densité infinie" n'est qu'une erreur de perspective : ce n'est pas une masse comprimée en un seul point, mais une masse recalibrée dans un autre palier de l'échelle.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/trous-noirs-echelles/harmonie"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/trous-noirs-echelles/horizon"
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
