import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const GeneralScaleRelativityPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-indigo-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        {/* Bouton Retour */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        {/* En-tête */}
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] mb-3 sm:mb-4 px-2">
            Relativité Générale des Échelles
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Comment la masse et l'énergie inclinent les tapis roulants
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* L'escalator universel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Les tapis roulants</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  Imagine que tu es sur ton tapis roulant. <strong className="text-white">Il descend toujours à la même cadence : la vitesse de la lumière</strong>. Rien n'accélère ni ne ralentit le moteur, il bat comme un métronome absolu.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Mais voilà : la masse et l'énergie qui t'entourent viennent poser leur poids sur ce tapis roulant. Une planète, une étoile, un nuage de gaz brûlant, un flot de rayonnement : tout cela pèse sur le tissu de l'espace-temps.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  <strong className="text-white">Et ce poids agit comme une main qui appuie sur le tapis roulant, le faisant basculer vers l'avant.</strong> C'est la courbure de l'espace-temps qui agit sur l'inclinaison du tapis roulant.
                </p>
              </div>
            </div>
          </div>

          {/* Les différents environnements */}
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4 sm:mb-6">Les Différents Environnements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-400/30">
                <h3 className="text-lg font-semibold text-green-300 mb-3">Région Calme et Vide</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                  Le poids est faible : le tissu de l'espace-temps est presque plat car il n'y a quasiment pas de masse ou d'énergie.
                </p>
                <div className="bg-green-800/30 p-3 rounded-lg">
                  <p className="text-xs sm:text-sm text-green-200">
                    <strong>Résultat :</strong> Tapis roulant avec une pente douce. Tu avances surtout dans le temps, et à peine dans l'échelle.
                  </p>
                </div>
              </div>
              
              <div className="bg-yellow-900/20 p-4 sm:p-6 rounded-lg border border-yellow-400/30">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3">Près d'une Étoile</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                  Le poids devient lourd. La courbure du tissu d'espace-temps s'accentue.
                </p>
                <div className="bg-yellow-800/30 p-3 rounded-lg">
                  <p className="text-xs sm:text-sm text-yellow-200">
                    <strong>Résultat :</strong> Quelqu'un appuie sur ton tapis roulant, augmentant son inclinaison. Ton budget glisse du temps vers l'échelle.
                  </p>
                </div>
              </div>
              
              <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-400/30">
                <h3 className="text-lg font-semibold text-red-300 mb-3">Trou Noir</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                  Le poids devient écrasant. La densité est telle que la courbure explose.
                </p>
                <div className="bg-red-800/30 p-3 rounded-lg">
                  <p className="text-xs sm:text-sm text-red-200">
                    <strong>Résultat :</strong> Le tapis roulant se penche vers la verticale. Chute libre absolue vers l'échelle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* L'effet du rayonnement */}
          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">L'Effet du Rayonnement</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <p className="text-base sm:text-lg text-orange-100 leading-relaxed">
                  Dans une région éloignée de tout, <strong className="text-white">le rayonnement agit comme une masse diffuse, une pression permanente</strong>. L'effet est plus subtil, mais il s'ajoute : le tapis roulant s'incline doucement partout dans l'univers.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Comme si la lumière des galaxies de l'ensemble de l'univers appuyait sur lui en continu. <strong className="text-orange-300">Plus un univers est lumineux, plus l'ensemble de l'échelle rétrécit en fonction de la lumière reçue à chaque endroit de l'univers</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-red-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-red-200 mb-3">L'Inclinaison Progressive</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette pression lumineuse constante explique pourquoi l'univers semble "s'étendre" uniformément. Ce n'est pas l'espace qui grandit, mais chaque région qui voit son tapis roulant légèrement incliné par le rayonnement cosmique ambiant.
                </p>
              </div>
            </div>
          </div>

          {/* Le coefficient multiplicateur */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Le Coefficient Multiplicateur</h2>
            
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
                <h3 className="text-lg font-semibold text-purple-200 mb-3">La Formule Unifiée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-3">
                  Dans ce modèle, la relativité générale d'Einstein s'étend naturellement :
                </p>
                <div className="bg-purple-800/30 p-3 rounded-lg text-center">
                  <p className="text-sm sm:text-base font-mono text-purple-200">
                    Inclinaison = Vitesse × Coefficient_Gravitationnel
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Où Coefficient_Gravitationnel dépend de la courbure locale de l'espace-temps
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">L'Harmonie Universelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ainsi, chaque objet dans l'univers danse sur son tapis roulant personnel, tous synchronisés sur le même tempo cosmique, mais chacun avec son inclinaison unique, sculptée par l'environnement gravitationnel qui l'entoure.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};