import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ThoughtExperimentsScalePage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-red-900/20"></div>
      
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(251,146,60,0.8)] mb-3 sm:mb-4 px-2">
            Les Expériences de Pensée
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-orange-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Visualiser la cinquième dimension à travers des expériences mentales
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Le Musée des Dimensions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">Le Musée des Dimensions</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <p className="text-base sm:text-lg text-orange-100 leading-relaxed">
                  Nous allons faire une expérience de pensée pour mieux visualiser la cinquième dimension. <strong className="text-white">Imagine que tu es dans le musée des dimensions</strong>. Il est fait de plusieurs pièces qui ont des formes de couloir.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Tu entres dans la première pièce du musée des dimensions. Cette visite va te révéler ce qui se cache derrière l'apparente stabilité de notre réalité.
              </p>
            </div>
          </div>

          {/* Première Pièce */}
          <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-yellow-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6">Première Pièce : La Révélation</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-semibold text-yellow-200 mb-3">Le Tapis Roulant Révélateur</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Dans cette première pièce, tu vois un tapis roulant. Quand tu montes dessus, tu vois <strong className="text-white">2 cubes apparaître</strong>. À ta gauche, flotte un cube en 3D contenant une étoile. À ta droite, le même cube en 3D, avec la même étoile.
                </p>
              </div>
              
              <div className="bg-yellow-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-semibold text-yellow-200 mb-3">L'Écoulement du Temps</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Au fur et à mesure que tu avances avec le tapis roulant, <strong className="text-white">une nouvelle tranche de temps apparaît</strong> : 2 nouveaux cubes se créent à ton niveau. Un à ta gauche et un à ta droite. Plus tu avances, plus tu vois de nouveaux cubes se créer.
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mt-3">
                  Tu vois la même étoile en double, et chaque nouveau cube est le nouveau présent, ceux qui sont derrière toi sont leur passé. <strong className="text-yellow-300">C'est la dimension du temps qui devient visible</strong>.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-red-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-red-200 mb-3">La Différence Révélatrice</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-3">
                  Mais très vite, la différence se révèle :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-400/30">
                    <h4 className="font-semibold text-gray-300 mb-2">Cube de Gauche (4D)</h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Ne prend pas en compte la cinquième dimension. Tous les nouveaux cubes restent identiques. <strong className="text-white">L'étoile garde toujours la même taille</strong>.
                    </p>
                  </div>
                  
                  <div className="bg-red-800/30 p-4 rounded-lg border border-red-400/30">
                    <h4 className="font-semibold text-red-300 mb-2">Cube de Droite (5D)</h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Prend en compte la cinquième dimension, l'échelle. À chaque instant, chaque nouvelle étoile est <strong className="text-white">légèrement plus petite que la précédente</strong>. L'étoile semble rétrécir !
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">L'Action de la Masse, Énergie et Vitesse</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Masse, énergie et vitesse agissent de la même manière dans ce cube : <strong className="text-white">elles réduisent l'ensemble uniformément</strong>. Plus l'étoile est massive, plus elle rétrécit rapidement. Plus elle rayonne d'énergie, plus elle se contracte. Plus elle se déplace vite, plus sa descente d'échelle s'accélère.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">La Compréhension</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">C'est en comparant les deux que tu comprends la cinquième dimension.</strong> D'un côté, une rangée d'étoiles stables, droites et constantes. De l'autre, une rangée d'étoiles qui se resserre vers le minuscule.
                </p>
                <p className="text-sm sm:text-base text-cyan-100 leading-relaxed mt-3 font-semibold">
                  Voilà ce qu'est l'échelle : la dimension invisible qui fait que, même si tout est identique de l'intérieur, la réalité se contracte pas à pas lorsqu'on la regarde de l'extérieur.
                </p>
              </div>
            </div>
          </div>

          {/* Les Tapis Roulants Universels */}
          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-red-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">Les Tapis Roulants Universels</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-red-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <p className="text-base sm:text-lg text-red-100 leading-relaxed">
                  <strong className="text-white">Tout ce qui est dans l'univers, que ce soit une étoile, une planète, un homme, un grain de poussière, voyage sur son propre tapis roulant invisible.</strong>
                </p>
              </div>
              
              <div className="bg-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">La Vitesse Universelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">La vitesse de ces tapis roulants est la même pour tous : la vitesse de la lumière.</strong> Ce rythme ne varie jamais, c'est le battement de cœur du cosmos.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">L'Inclinaison Personnalisée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">La différence entre ces tapis roulants, c'est leur inclinaison.</strong> Plus tu es rapide, plus tu es massif, plus le tapis roulant sur lequel tu voyages s'incline. Alors ton temps ralentit, et ton monde entier se contracte vers l'infiniment petit.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-400/30">
                  <h4 className="font-semibold text-green-300 mb-3">Être Presque Immobile</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Un être presque immobile ou presque sans masse vit sur un tapis roulant qui ne descend presque pas, il est quasiment à l'horizontal : <strong className="text-white">il avance surtout dans le temps, et sa descente d'échelle est imperceptible</strong>.
                  </p>
                </div>
                
                <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-400/30">
                  <h4 className="font-semibold text-red-300 mb-3">Étoile Massive ou Particule Rapide</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Une étoile massive ou une particule qui frôle la vitesse de la lumière, au contraire, vit sur un tapis roulant penché : <strong className="text-white">son temps propre est plus lent, et sa plongée dans l'échelle est plus prononcée</strong>.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">L'Harmonie Cosmique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ainsi, <strong className="text-white">chaque galaxie, chaque astre, chaque corps possède son tapis roulant intime</strong>. Tous descendent à la même cadence absolue, mais chacun avec son inclinaison singulière, sculptée par sa vitesse et sa masse.
                </p>
              </div>
            </div>
          </div>

          {/* L'illusion de l'expansion */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">L'Illusion de l'Expansion</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  Nous croyons voir l'univers s'étendre, comme si les galaxies s'éloignaient les unes des autres dans un espace qui gonfle. <strong className="text-white">Mais ce que nous appelons expansion est une illusion de perspective</strong>.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Chaque galaxie descend son tapis roulant propre, à une cadence réglée par sa masse, sa lumière, son énergie et sa vitesse. Comparées entre elles, les galaxies semblent s'éloigner. <strong className="text-purple-300">Mais elles ne s'écartent pas : elles plongent chacune dans leur tapis roulant, à la vitesse de la lumière, mais avec des inclinaisons différentes</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">La Loi de Hubble Réinterprétée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">La loi de Hubble — 70 km/s par mégaparsec — n'est que la traduction visible de cette réduction d'échelle par seconde.</strong> Ce n'est pas l'espace qui gonfle, c'est chaque tapis roulant qui descend.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">Une Nouvelle Vision du Cosmos</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette expérience de pensée révèle que notre perception de l'univers en expansion n'est qu'un effet de perspective. En réalité, nous assistons à une <strong className="text-white">contraction universelle vers l'infiniment petit</strong>, chaque objet suivant sa propre trajectoire d'échelle selon ses propriétés physiques.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};