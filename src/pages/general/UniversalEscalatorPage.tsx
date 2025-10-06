import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const UniversalEscalatorPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-indigo-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles#relativite-generale"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] mb-3 sm:mb-4 px-2">
            Les tapis roulants
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Comment la masse incline les tapis roulants
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Les Tapis Roulants</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  Imagine que tu es sur ton tapis roulant. <strong className="text-white">Il descend toujours à la même cadence : la vitesse de la lumière</strong>. Rien n'accélère ni ne ralentit le moteur, il bat comme un métronome absolu.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Mais voilà : la masse et l'énergie qui t'entourent viennent poser leur poids sur ce tapis roulant. Une planète, une étoile, un nuage de gaz brûlant, un flot de rayonnement : tout cela pèse sur le tissu de l'espace-temps.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">L'Action de la Gravité</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  <strong className="text-white">Et ce poids agit comme une main qui appuie sur le tapis roulant, le faisant basculer vers l'avant.</strong> C'est la courbure de l'espace-temps qui agit sur l'inclinaison du tapis roulant.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Plus la masse est grande, plus la courbure est importante, plus la main appuie fort sur le tapis roulant. L'inclinaison augmente, et avec elle, la descente vers l'infiniment petit s'accélère.
              </p>

              <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">La Courbure comme Inclinaison</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Dans le modèle d'Einstein, la masse courbe l'espace-temps. Dans ce modèle étendu, <strong className="text-white">cette courbure se traduit directement par une inclinaison du tapis roulant d'échelle</strong>. Plus la courbure est forte, plus le tapis s'incline.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <Link
              to="/relativite-generale-echelles/environnements"
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
