import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NavigationHub } from '../../components/NavigationHub';

export const GeneralScaleRelativityHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigationCards = [
    {
      title: "Le Tapis roulant",
      description: "Comment la masse et l'énergie inclinent le tapis roulant cosmique",
      path: "/relativite-generale-echelles/escalator-universel",
      colorFrom: "from-purple-900/40",
      colorTo: "to-indigo-900/30",
      borderColor: "border-purple-400"
    },
    {
      title: "Les Différents Environnements",
      description: "Du vide spatial aux trous noirs : comment la gravité modifie l'inclinaison",
      path: "/relativite-generale-echelles/environnements",
      colorFrom: "from-blue-900/40",
      colorTo: "to-cyan-900/30",
      borderColor: "border-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-indigo-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] mb-3 sm:mb-4 px-2">
            Relativité Générale des Échelles
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Comment la masse et l'énergie inclinent l'escalator universel
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl mb-8">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center">
              La masse et l'énergie environnantes viennent courber l'espace-temps. Dans ce modèle étendu, <strong className="text-white">cette courbure agit comme une main qui appuie sur le tapis roulant, modifiant son inclinaison</strong>. La masse et l'énergie n'inventent pas un nouveau moteur, elles ajoutent seulement un coefficient multiplicateur.
            </p>
          </div>

          <NavigationHub cards={navigationCards} />
        </div>
      </div>
    </div>
  );
};
