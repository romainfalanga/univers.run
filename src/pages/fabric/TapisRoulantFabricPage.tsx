import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const TapisRoulantFabricPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-teal-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        {/* Bouton Retour */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles#tissu"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        {/* En-tête */}
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-3 sm:mb-4 px-2">
            Les Tapis Roulants
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Le mécanisme fondamental du mouvement dans l'univers
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                <strong className="text-cyan-300">Tout ce qui existe dans l'univers voyage sur son propre tapis roulant invisible.</strong> Que ce soit une étoile, une planète, un homme, un grain de poussière : chacun descend son propre tapis roulant à travers les cinq dimensions.
              </p>

              <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">La Vitesse Universelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ce moteur ne varie jamais. Il bat comme un métronome cosmique, entraînant tout l'univers dans sa cadence. Chaque particule, chaque atome, chaque être vivant descend son tapis roulant exactement à la même vitesse : <strong className="text-white">299 792 458 mètres par seconde</strong>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">L'Inclinaison Variable</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Tout descend toujours à ce rythme, sans exception.</strong> La seule différence, c'est l'inclinaison de son tapis roulant : plus ou moins raide selon la vitesse spatiale. Plus vous allez vite dans l'espace, plus votre tapis roulant s'incline vers l'échelle.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Le Rôle de la Masse</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  La masse, elle aussi, influence l'inclinaison de son tapis roulant. <strong className="text-white">Plus un objet est massif ou proche d'une grande masse, plus son tapis roulant penche vers l'échelle</strong>. C'est la courbure de l'espace-temps qui se traduit par une inclinaison du tapis roulant dans le tissu complet.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30 text-center">
                  <h4 className="font-semibold text-green-300 mb-2">Tapis Roulant Plat</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Objet au repos, faible masse</p>
                  <p className="text-xs text-green-200 mt-2">Avancement surtout dans le temps</p>
                </div>
                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-400/30 text-center">
                  <h4 className="font-semibold text-yellow-300 mb-2">Tapis Roulant Incliné</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Vitesse modérée, masse importante</p>
                  <p className="text-xs text-yellow-200 mt-2">Partage temps-échelle équilibré</p>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30 text-center">
                  <h4 className="font-semibold text-red-300 mb-2">Tapis Roulant Vertical</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Vitesse extrême, masse énorme</p>
                  <p className="text-xs text-red-200 mt-2">Plongée vertigineuse dans l'échelle</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation séquentielle */}
        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-8">
          <div className="flex justify-between items-center">
            <Link
              to="/tissu-espace-temps-echelle/superposition"
              className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent : Superposition des Tissus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
