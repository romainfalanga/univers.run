import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CreationPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-black/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(107,114,128,0.8)] mb-3 sm:mb-4 px-2">
            Création
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Comment naissent les trous noirs
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-gray-900/40 to-black/30 p-4 sm:p-6 rounded-lg border-l-4 border-gray-400">
                <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                  Lorsqu'une étoile massive arrive en fin de vie, elle s'effondre sur elle-même. Sa matière n'est plus soutenue par aucune réaction interne, et la gravité triomphe.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Dans ce processus, <strong className="text-white">ce n'est pas seulement l'espace qui se courbe : c'est aussi l'échelle-temps qui s'étire</strong>. L'infiniment petit va de plus en plus vers l'infiniment petit très rapidement. Et à ce moment précis, une frontière nouvelle apparaît : l'horizon des événements.
              </p>

              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">L'Illusion de l'Arrêt</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  De l'extérieur, cet horizon donne l'illusion d'un arrêt. La lumière semble figée, les mouvements paraissent suspendus. Mais ce n'est qu'une limite de perception. <strong className="text-white">Ce que nous voyons est dû au fait que l'échelle de Planck a été repoussée si loin dans l'infiniment petit que même l'infiniment grand devient invisible</strong> car il est trop petit pour notre point de vue.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-32"></div>
            <Link
              to="/trous-noirs-echelles/passage"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
