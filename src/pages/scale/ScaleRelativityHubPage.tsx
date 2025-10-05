import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ScaleRelativityHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-purple-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(99,102,241,0.8)] mb-3 sm:mb-4 px-2">
            Relativité des Échelles
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-indigo-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            La synthèse unifiée du modèle complet
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
              Cette section présente la synthèse complète de la Relativité des Échelles, où tous les concepts se rejoignent dans une vision unifiée de l'univers en cinq dimensions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Un Seul Moteur, Multiples Inclinaisons</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  La masse et l'énergie n'inventent pas un nouveau moteur, elles ne modifient pas la vitesse universelle. <strong className="text-white">Elles ajoutent seulement un coefficient multiplicateur à l'inclinaison du tapis roulant</strong> par la déformation du tissu de l'espace-temps.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est là toute l'élégance de ce modèle : il n'y a qu'un seul moteur universel, la vitesse de la lumière, mais une infinité d'inclinaisons possibles selon l'environnement gravitationnel.
              </p>

              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-echelles-final/moteur-universel"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Un Seul Moteur, Multiples Inclinaisons
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Le Tapis Roulant Unifié</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">Tout ce qui existe dans l'univers voyage sur son propre tapis roulant invisible.</strong> La vitesse est toujours la même : la vitesse de la lumière. Seule l'inclinaison diffère selon la vitesse spatiale et la courbure gravitationnelle.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Cette vision unifiée combine les effets de la relativité restreinte (vitesse) et de la relativité générale (masse et énergie) dans un seul cadre cohérent à cinq dimensions.
              </p>

              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-echelles-final/tapis-roulant"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Le Tapis Roulant Unifié
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">La Formule de la Relativité des Échelles</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  La relativité générale d'Einstein s'étend naturellement. <strong className="text-white">L'inclinaison du tapis roulant dépend à la fois de votre vitesse et de l'environnement gravitationnel</strong>, créant une formule unifiée reliant tous les phénomènes.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Cette formule mathématique exprime comment vitesse et courbure se combinent pour déterminer l'inclinaison du tapis roulant cosmique de chaque particule dans l'univers.
              </p>

              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-echelles-final/formule"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  La Formule de la Relativité des Échelles
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
