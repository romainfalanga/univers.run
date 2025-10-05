import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const HarmonyDescentPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(234,179,8,0.1)_1px,transparent_1px),linear-gradient(rgba(234,179,8,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-orange-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/trous-noirs-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Les Trous Noirs
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(234,179,8,0.8)] mb-3 sm:mb-4 px-2">
            L'Harmonie au Bout de la Descente
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-yellow-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Purification cosmique et tendance vers la perfection
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-yellow-400/30 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="text-base sm:text-lg text-yellow-100 leading-relaxed">
                  En suivant cette logique, <strong className="text-white">l'histoire de l'univers n'est pas celle d'un chaos qui grandit, mais celle d'un chaos qui s'épure et qui tend vers une harmonie</strong>.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Chaque effondrement est une étape de simplification. Chaque nouvel univers efface une part de désordre pour tendre vers l'équilibre.
              </p>

              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-200 mb-3">Du Chaos à l'Harmonie</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  À la surface, notre cosmos bouillonne de galaxies en collision, d'étoiles qui meurent, de matière sombre et d'énergie foisonnante. <strong className="text-white">Mais au fond, plus bas, dans les univers internes, règnent des mondes de plus en plus sobres</strong>, jusqu'à ce qu'il n'y ait plus qu'une étoile avec un système harmonieux.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-red-200 mb-3">Vision Révolutionnaire</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Voilà le visage des trous noirs dans la relativité des échelles :</strong> non pas des abîmes de destruction, mais des portes de recalibrage, qui nous mènent de marche en marche vers des univers plus simples, plus petits, mais aussi plus parfaits.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/trous-noirs-echelles/univers-internes"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/trous-noirs-echelles/singularite"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
