import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const HubbleLawPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-pink-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles#expansion"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] mb-3 sm:mb-4 px-2">
            La Loi de Hubble Réinterprétée
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            70 km/s par mégaparsec : une traduction de la descente d'échelle
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">La Constante de Hubble</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">La loi de Hubble — environ 70 km/s par mégaparsec — n'est que la traduction visible de cette réduction d'échelle par seconde.</strong> Ce n'est pas l'espace qui gonfle, c'est chaque tapis roulant qui descend.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Plus une galaxie est loin, plus le rayonnement cumulé entre elle et nous a incliné nos tapis roulants respectifs. Cette inclinaison progressive crée l'apparence d'une vitesse d'éloignement proportionnelle à la distance.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">Un Changement de Paradigme</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Au lieu d'un univers en expansion dans un espace qui grandit, nous avons <strong className="text-orange-300">un univers en contraction d'échelle, où chaque objet plonge vers l'infiniment petit à son propre rythme</strong>.
              </p>

              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-semibold text-yellow-200 mb-3">Résultat Observationnel Identique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le résultat observationnel est identique à celui de la cosmologie standard, mais l'interprétation physique est radicalement différente. <strong className="text-white">Ce modèle offre une nouvelle perspective sans contredire les observations</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/expansion-interne/illusion-expansion"
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
