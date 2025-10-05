import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const UniversalMotorPage: React.FC = () => {
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
            to="/relativite-echelles-final"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(99,102,241,0.8)] mb-3 sm:mb-4 px-2">
            Un Seul Moteur, Multiples Inclinaisons
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-indigo-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            La masse et l'énergie comme modificateurs d'inclinaison
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Le Moteur Universel</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  <strong className="text-white">La masse et l'énergie n'inventent pas un nouveau moteur, elles ne modifient pas la vitesse universelle.</strong> Elles ajoutent seulement un coefficient multiplicateur à l'inclinaison du tapis roulant par la déformation du tissu de l'espace-temps.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est là toute l'élégance de ce modèle : il n'y a qu'un seul moteur universel, la vitesse de la lumière, mais une infinité d'inclinaisons possibles selon l'environnement gravitationnel.
              </p>

              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Le Rythme Constant</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le moteur universel bat comme un métronome cosmique : 299 792 458 mètres par seconde. <strong className="text-white">Ce rythme ne varie jamais</strong>, c'est le battement de cœur du cosmos. Rien n'accélère ni ne ralentit ce tempo absolu.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Le Coefficient Multiplicateur</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Dans ce modèle, la relativité générale d'Einstein s'étend naturellement. L'inclinaison du tapis roulant ne dépend pas seulement de votre vitesse, mais aussi de l'environnement gravitationnel qui vous entoure.
              </p>

              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">L'Action de la Masse</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  La masse et l'énergie qui vous entourent viennent poser leur poids sur le tissu de l'espace-temps. <strong className="text-white">Ce poids agit comme une main qui appuie sur le tapis roulant, le faisant basculer vers l'avant.</strong> C'est la courbure de l'espace-temps qui agit sur l'inclinaison du tapis roulant.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border border-indigo-400/30">
                  <h3 className="text-lg font-semibold text-indigo-300 mb-3">Contribution de la Vitesse</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Plus vous allez vite, plus votre composante personnelle d'inclinaison augmente. C'est l'effet de la relativité restreinte.
                  </p>
                </div>

                <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border border-purple-400/30">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">Contribution de la Gravité</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Plus la courbure locale est forte, plus le coefficient multiplicateur est grand. C'est l'effet de la relativité générale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">L'Harmonie Universelle</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  Ainsi, chaque objet dans l'univers danse sur son tapis roulant personnel, <strong className="text-white">tous synchronisés sur le même tempo cosmique, mais chacun avec son inclinaison unique</strong>, sculptée par l'environnement gravitationnel qui l'entoure.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Un électron près d'une étoile, un photon traversant le vide intergalactique, une galaxie entière : tous descendent leur escalator cosmique à la vitesse de la lumière, mais chacun avec son propre angle, déterminé par sa vitesse et son environnement.
              </p>

              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">La Symphonie Cosmique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  C'est une symphonie où tous les instruments jouent la même note (la vitesse de la lumière), mais avec des harmoniques différentes (les inclinaisons). <strong className="text-white">L'unité dans la diversité, la constance dans la variation</strong> : voilà l'élégance du tissu d'espace-temps-d'échelle.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-8">
          <div className="flex justify-end">
            <Link
              to="/relativite-echelles-final/tapis-roulant"
              className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              Suivant : Le Tapis Roulant Unifié
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
