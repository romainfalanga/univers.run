import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NavigationHub } from '../../components/NavigationHub';

export const ThoughtExperimentsHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigationCards = [
    {
      title: "Le Musée des Dimensions",
      description: "Visualiser la cinquième dimension à travers une expérience de pensée révélatrice",
      path: "/experiences-pensee-echelles/musee-dimensions",
      colorFrom: "from-yellow-900/40",
      colorTo: "to-orange-900/30",
      borderColor: "border-yellow-400"
    },
    {
      title: "Les Tapis Roulants Universels",
      description: "Comment chaque objet voyage sur son propre escalator cosmique",
      path: "/experiences-pensee-echelles/tapis-roulants",
      colorFrom: "from-red-900/40",
      colorTo: "to-pink-900/30",
      borderColor: "border-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-red-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(251,146,60,0.8)] mb-3 sm:mb-4 px-2">
            Les Expériences de Pensée
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-orange-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Visualiser la cinquième dimension à travers des expériences mentales
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl mb-8">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center">
              La cinquième dimension est difficile à visualiser. <strong className="text-white">Les expériences de pensée sont des outils puissants pour rendre l'abstrait concret</strong>. Préparez-vous à un voyage conceptuel qui révélera la nature cachée de la réalité.
            </p>
          </div>

          <NavigationHub cards={navigationCards} />
        </div>
      </div>
    </div>
  );
};
