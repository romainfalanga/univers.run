import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const TapisRoulantRestrictedPage: React.FC = () => {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-3 sm:mb-4 px-2">
            Les Tapis Roulants
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Le mécanisme fondamental du mouvement dans l'univers
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed font-semibold">
                  <strong className="text-white">Tout ce qui existe dans l'univers voyage sur son propre tapis roulant invisible.</strong> Que ce soit une étoile, une planète, un homme, un grain de poussière : chacun descend son propre tapis roulant à travers le tissu d'espace-temps-d'échelle.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce tapis roulant n'est pas une métaphore : c'est le mouvement réel à travers les cinq dimensions de l'univers. Trois dimensions d'espace, une de temps, et une d'échelle. Et ce mouvement a une cadence absolue : <strong className="text-cyan-300">299 792 458 mètres par seconde</strong> — la vitesse de la lumière.
              </p>

              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">La Vitesse Universelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">La vitesse de ces tapis roulants est la même pour tous : la vitesse de la lumière.</strong> Ce rythme ne varie jamais, c'est le battement de cœur du cosmos. Rien n'accélère ni ne ralentit le moteur, il bat comme un métronome absolu.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">L'Inclinaison Variable</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">La différence entre ces tapis roulants, c'est leur inclinaison.</strong> Selon votre vitesse spatiale, votre tapis roulant s'incline différemment. Plus vous allez vite dans l'espace, plus votre tapis roulant penche vers l'échelle, et moins vous avancez dans le temps.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30 text-center">
                  <h4 className="font-semibold text-green-300 mb-2">Tapis Roulant Plat</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Objet au repos ou vitesse faible</p>
                  <p className="text-xs text-green-200 mt-2">
                    <strong>Budget ET :</strong> Temps maximum, espace minimal<br/>
                    <strong>Budget TE :</strong> Temps maximum, échelle minimale
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Avancement surtout dans le temps, descente d'échelle imperceptible</p>
                </div>

                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-400/30 text-center">
                  <h4 className="font-semibold text-yellow-300 mb-2">Tapis Roulant Incliné</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Vitesse modérée (50% de c)</p>
                  <p className="text-xs text-yellow-200 mt-2">
                    <strong>Budget ET :</strong> Partage équilibré<br/>
                    <strong>Budget TE :</strong> Partage équilibré
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Répartition équilibrée entre temps, espace et échelle</p>
                </div>

                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30 text-center">
                  <h4 className="font-semibold text-red-300 mb-2">Tapis Roulant Vertical</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Vitesse extrême (proche de c)</p>
                  <p className="text-xs text-red-200 mt-2">
                    <strong>Budget ET :</strong> Espace maximum, temps minimal<br/>
                    <strong>Budget TE :</strong> Échelle maximum, temps minimal
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Plongée vertigineuse dans l'échelle, temps presque figé</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-lg font-semibold text-teal-200 mb-3">Le Partage du Budget</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Votre vitesse dans l'espace détermine l'inclinaison de votre tapis roulant. <strong className="text-white">Plus vous allez vite spatialement, moins vous avancez temporellement, et plus vous plongez dans l'échelle.</strong> C'est la relativité restreinte étendue : votre budget universel se répartit entre trois dimensions (espace, temps, échelle), mais la somme reste toujours égale à la vitesse de la lumière.
                </p>
              </div>

            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/relativite-restreinte-echelles/pivot-temporel"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/relativite-restreinte-echelles/immobile"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
