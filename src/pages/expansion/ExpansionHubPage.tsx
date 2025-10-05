import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NavigationHub } from '../../components/NavigationHub';

export const ExpansionHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigationCards = [
    {
      title: "L'Illusion de l'Expansion",
      description: "Pourquoi l'univers semble s'étendre alors qu'il se contracte",
      path: "/expansion-interne/illusion-expansion",
      colorFrom: "from-indigo-900/40",
      colorTo: "to-purple-900/30",
      borderColor: "border-indigo-400"
    },
    {
      title: "La Loi de Hubble Réinterprétée",
      description: "70 km/s par mégaparsec : une traduction de la descente d'échelle",
      path: "/expansion-interne/loi-hubble",
      colorFrom: "from-purple-900/40",
      colorTo: "to-pink-900/30",
      borderColor: "border-purple-400"
    },
    {
      title: "L'Énergie Sombre Réexaminée",
      description: "Une explication alternative à l'accélération de l'expansion",
      path: "/expansion-interne/energie-sombre",
      colorFrom: "from-blue-900/40",
      colorTo: "to-cyan-900/30",
      borderColor: "border-blue-400"
    }
  ];

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
            L'Expansion Interne
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-indigo-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Une nouvelle vision de l'expansion cosmique
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl mb-8">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center">
              Ce que nous appelons "expansion de l'univers" pourrait être une illusion de perspective. <strong className="text-white">Ce n'est pas l'espace qui grandit, mais l'échelle qui se contracte</strong>. Découvrez comment cette nouvelle vision transforme notre compréhension du cosmos.
            </p>
          </div>

          <NavigationHub cards={navigationCards} />
        </div>
      </div>
    </div>
  );
};
