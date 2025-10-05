import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const UniversalTreadmillsPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-pink-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-pink-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/experiences-pensee-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Expériences de Pensée
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-300 via-pink-300 to-purple-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] mb-3 sm:mb-4 px-2">
            Les Tapis Roulants Universels
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-red-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Comment chaque objet voyage sur son propre escalator cosmique
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">Chacun Son Tapis Roulant</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-red-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <p className="text-base sm:text-lg text-red-100 leading-relaxed">
                  <strong className="text-white">Tout ce qui est dans l'univers, que ce soit une étoile, une planète, un homme, un grain de poussière, voyage sur son propre tapis roulant invisible.</strong>
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce n'est pas une métaphore, c'est la réalité fondamentale de l'univers. Chaque particule, chaque atome, chaque structure cosmique descend son propre escalator vers l'infiniment petit, entraîné par le moteur universel.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-pink-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-4 sm:mb-6">La Vitesse Universelle</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <p className="text-base sm:text-lg text-pink-100 leading-relaxed">
                  <strong className="text-white">La vitesse de ces tapis roulants est la même pour tous : la vitesse de la lumière.</strong> Ce rythme ne varie jamais, c'est le battement de cœur du cosmos.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                299 792 458 mètres par seconde. C'est le tempo cosmique, le métronome universel. Que tu sois un électron ou une galaxie, ton tapis roulant avance à cette vitesse exacte, sans exception.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">L'Inclinaison Personnalisée</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">La différence entre ces tapis roulants, c'est leur inclinaison.</strong> Plus tu es rapide, plus tu es massif, plus le tapis roulant sur lequel tu voyages s'incline. Alors ton temps ralentit, et ton monde entier se contracte vers l'infiniment petit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-400/30">
                  <h3 className="font-semibold text-green-300 mb-3 text-lg">Être Presque Immobile</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Un être presque immobile ou presque sans masse vit sur un tapis roulant qui ne descend presque pas, il est quasiment à l'horizontal : <strong className="text-white">il avance surtout dans le temps, et sa descente d'échelle est imperceptible</strong>.
                  </p>
                </div>

                <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-400/30">
                  <h3 className="font-semibold text-red-300 mb-3 text-lg">Étoile Massive ou Particule Rapide</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Une étoile massive ou une particule qui frôle la vitesse de la lumière, au contraire, vit sur un tapis roulant penché : <strong className="text-white">son temps propre est plus lent, et sa plongée dans l'échelle est plus prononcée</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-teal-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">L'Harmonie Cosmique</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  Ainsi, <strong className="text-white">chaque galaxie, chaque astre, chaque corps possède son tapis roulant intime</strong>. Tous descendent à la même cadence absolue, mais chacun avec son inclinaison singulière, sculptée par sa vitesse et sa masse.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est une symphonie cosmique où tous les instruments jouent la même note, mais avec des harmoniques différentes. L'univers entier est une chorégraphie d'escalators invisibles, tous synchronisés mais tous uniques.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/experiences-pensee-echelles/musee-dimensions"
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
