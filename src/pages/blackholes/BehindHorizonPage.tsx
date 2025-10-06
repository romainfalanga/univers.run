import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BehindHorizonPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-green-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-3 sm:mb-4 px-2">
            Derrière l'Horizon
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Ce qui se trouve de l'autre côté et cascade de simplification
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-emerald-900/40 to-green-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
                  <strong className="text-white">En franchissant un horizon, nous n'entrons pas dans le chaos, mais dans un univers plus harmonieux.</strong> La Relativité des échelles affirme que chaque trou noir engendre un univers interne, réglé sur une nouvelle échelle propre.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                À chaque passage, la matière devient plus rare, les structures plus sobres, et le désordre du monde parent s'apaise.
              </p>

              <div className="bg-gradient-to-r from-green-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-green-200 mb-3">Cascade de Simplification</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Un univers rempli de galaxies tumultueuses peut engendrer une infinité d'univers interne réduit à une seule galaxie. En s'effondrant, une étoile donnera un univers encore plus simple : peut-être un amas stellaire avec en son centre un autre trou noir dans lequel pourrait se trouver un système stellaire unique entourée de ses planètes dans un équilibre parfait.
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-lg font-semibold text-teal-200 mb-3">Montée vers la Simplicité</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">À mesure qu'on descend les marches de l'échelle, l'harmonie augmente.</strong> Le chaos apparent du cosmos se purifie en couches successives, comme si la descente dans l'infiniment petit était aussi une montée vers la simplicité et l'harmonie.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/trous-noirs-echelles/invisibilite"
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
