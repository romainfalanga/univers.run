import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CosmicRadiationPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-red-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/expansion-interne"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            L'Expansion Interne
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(251,146,60,0.8)] mb-3 sm:mb-4 px-2">
            Le Rayonnement Cosmique
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-orange-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            La pression lumineuse comme moteur de contraction universelle
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">La Pression Lumineuse Universelle</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <p className="text-base sm:text-lg text-orange-100 leading-relaxed">
                  Dans une région éloignée de tout, <strong className="text-white">le rayonnement agit comme une masse diffuse, une pression permanente</strong>. L'effet est plus subtil, mais il s'ajoute : le tapis roulant s'incline doucement partout dans l'univers.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Comme si la lumière des galaxies de l'ensemble de l'univers appuyait sur lui en continu. <strong className="text-orange-300">Plus un univers est lumineux, plus l'ensemble de l'échelle rétrécit en fonction de la lumière reçue à chaque endroit de l'univers</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-red-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">Le Fond Diffus Cosmologique</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le fond diffus cosmologique, ce rayonnement primordial qui baigne tout l'univers, contribue à cette inclinaison uniforme. <strong className="text-red-300">C'est une pression constante qui agit sur tous les tapis roulants simultanément</strong>.
              </p>

              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">L'Inclinaison Progressive</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette pression lumineuse constante explique pourquoi l'univers semble "s'étendre" uniformément. <strong className="text-white">Ce n'est pas l'espace qui grandit, mais chaque région qui voit son tapis roulant légèrement incliné par le rayonnement cosmique ambiant</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-yellow-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6">L'Effet Cumulatif</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Plus une région reçoit de rayonnement, plus son tapis roulant s'incline. <strong className="text-yellow-300">C'est un effet subtil mais universel, qui s'accumule sur de vastes distances cosmiques</strong>.
              </p>

              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-200 mb-3">La Distance et le Rayonnement</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Plus une galaxie est loin, plus il y a de rayonnement cumulé entre elle et nous, créant l'illusion d'une vitesse d'éloignement croissante. <strong className="text-white">Le rayonnement cosmique agit comme un multiplicateur universel de l'inclinaison des tapis roulants</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/expansion-interne/loi-hubble"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <Link
              to="/expansion-interne/energie-sombre"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
