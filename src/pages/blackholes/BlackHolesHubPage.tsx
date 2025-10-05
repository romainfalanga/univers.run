import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NavigationHub } from '../../components/NavigationHub';

export const BlackHolesHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigationCards = [
    {
      title: "Création",
      description: "Formation des trous noirs et effondrement gravitationnel",
      path: "/trous-noirs-echelles/creation",
      colorFrom: "from-gray-900/40",
      colorTo: "to-black/30",
      borderColor: "border-gray-400"
    },
    {
      title: "Le Passage : Un Saut d'Échelle",
      description: "Franchissement de l'horizon et recalibrage instantané",
      path: "/trous-noirs-echelles/passage",
      colorFrom: "from-purple-900/40",
      colorTo: "to-indigo-900/30",
      borderColor: "border-purple-400"
    },
    {
      title: "Pourquoi le Retour est Impossible",
      description: "L'irréversibilité du passage et la flèche du temps",
      path: "/trous-noirs-echelles/retour-impossible",
      colorFrom: "from-red-900/40",
      colorTo: "to-orange-900/30",
      borderColor: "border-red-400"
    },
    {
      title: "La Taille de l'Univers Quantique",
      description: "Les dimensions des univers internes et l'horizon parent",
      path: "/trous-noirs-echelles/taille-univers",
      colorFrom: "from-green-900/40",
      colorTo: "to-emerald-900/30",
      borderColor: "border-green-400"
    },
    {
      title: "Les Univers Internes",
      description: "Raréfaction progressive et niveaux de complexité",
      path: "/trous-noirs-echelles/univers-internes",
      colorFrom: "from-blue-900/40",
      colorTo: "to-indigo-900/30",
      borderColor: "border-blue-400"
    },
    {
      title: "L'Harmonie au Bout de la Descente",
      description: "Purification cosmique et tendance vers la perfection",
      path: "/trous-noirs-echelles/harmonie",
      colorFrom: "from-yellow-900/40",
      colorTo: "to-orange-900/30",
      borderColor: "border-yellow-400"
    },
    {
      title: "La Singularité",
      description: "Réinterprétation du concept et erreur de perspective",
      path: "/trous-noirs-echelles/singularite",
      colorFrom: "from-pink-900/40",
      colorTo: "to-purple-900/30",
      borderColor: "border-pink-400"
    },
    {
      title: "L'Horizon des Événements",
      description: "Frontière mystérieuse et changement de règle",
      path: "/trous-noirs-echelles/horizon",
      colorFrom: "from-cyan-900/40",
      colorTo: "to-blue-900/30",
      borderColor: "border-cyan-400"
    },
    {
      title: "L'Invisibilité du Trou Noir",
      description: "Pourquoi les trous noirs paraissent noirs",
      path: "/trous-noirs-echelles/invisibilite",
      colorFrom: "from-gray-900/60",
      colorTo: "to-black/50",
      borderColor: "border-gray-400"
    },
    {
      title: "Derrière l'Horizon",
      description: "Ce qui se trouve de l'autre côté et cascade de simplification",
      path: "/trous-noirs-echelles/derriere-horizon",
      colorFrom: "from-emerald-900/40",
      colorTo: "to-green-900/30",
      borderColor: "border-emerald-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-black/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(107,114,128,0.8)] mb-3 sm:mb-4 px-2">
            Les Trous Noirs
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Portes de recalibrage vers des univers plus harmonieux
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl mb-8">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center">
              Dans la Relativité des échelles, les trous noirs ne sont pas des abîmes de destruction, mais des <strong className="text-white">portes de recalibrage</strong> vers des univers plus harmonieux. Explorez chaque aspect de ce phénomène fascinant.
            </p>
          </div>

          <NavigationHub cards={navigationCards} />
        </div>
      </div>
    </div>
  );
};
