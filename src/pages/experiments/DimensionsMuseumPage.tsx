import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const DimensionsMuseumPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(234,179,8,0.1)_1px,transparent_1px),linear-gradient(rgba(234,179,8,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-orange-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/experiences-pensee-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Expériences de Pensée
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(234,179,8,0.8)] mb-3 sm:mb-4 px-2">
            Le Musée des Dimensions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-yellow-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Une expérience de pensée pour visualiser la cinquième dimension
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6">L'Entrée du Musée</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="text-base sm:text-lg text-yellow-100 leading-relaxed">
                  Nous allons faire une expérience de pensée pour mieux visualiser la cinquième dimension. <strong className="text-white">Imagine que tu es dans le musée des dimensions</strong>. Il est fait de plusieurs pièces qui ont des formes de couloir.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Tu entres dans la première pièce du musée des dimensions. Cette visite va te révéler ce qui se cache derrière l'apparente stabilité de notre réalité.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">Le Tapis Roulant Révélateur</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <p className="text-base sm:text-lg text-orange-100 leading-relaxed">
                  Dans cette première pièce, tu vois un tapis roulant. Quand tu montes dessus, tu vois <strong className="text-white">2 cubes apparaître</strong>. À ta gauche, flotte un cube en 3D contenant une étoile. À ta droite, le même cube en 3D, avec la même étoile.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Au fur et à mesure que tu avances avec le tapis roulant, <strong className="text-orange-300">une nouvelle tranche de temps apparaît</strong> : 2 nouveaux cubes se créent à ton niveau. Un à ta gauche et un à ta droite. Plus tu avances, plus tu vois de nouveaux cubes se créer.
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Tu vois la même étoile en double, et chaque nouveau cube est le nouveau présent, ceux qui sont derrière toi sont leur passé. <strong className="text-yellow-300">C'est la dimension du temps qui devient visible</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-red-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">La Différence Révélatrice</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-3">
                Mais très vite, la différence se révèle :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 p-4 sm:p-6 rounded-lg border border-gray-400/30">
                  <h3 className="font-semibold text-gray-300 mb-3 text-lg">Cube de Gauche (4D)</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Ne prend pas en compte la cinquième dimension. Tous les nouveaux cubes restent identiques. <strong className="text-white">L'étoile garde toujours la même taille</strong>.
                  </p>
                </div>

                <div className="bg-red-800/30 p-4 sm:p-6 rounded-lg border border-red-400/30">
                  <h3 className="font-semibold text-red-300 mb-3 text-lg">Cube de Droite (5D)</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Prend en compte la cinquième dimension, l'échelle. À chaque instant, chaque nouvelle étoile est <strong className="text-white">légèrement plus petite que la précédente</strong>. L'étoile semble rétrécir !
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">La Compréhension</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">C'est en comparant les deux que tu comprends la cinquième dimension.</strong> D'un côté, une rangée d'étoiles stables, droites et constantes. De l'autre, une rangée d'étoiles qui se resserre vers le minuscule.
                </p>
              </div>

              <p className="text-base sm:text-lg text-cyan-100 leading-relaxed font-semibold">
                Voilà ce qu'est l'échelle : la dimension invisible qui fait que, même si tout est identique de l'intérieur, la réalité se contracte pas à pas lorsqu'on la regarde de l'extérieur.
              </p>

              <div className="bg-gradient-to-r from-indigo-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">L'Action de la Masse, Énergie et Vitesse</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Masse, énergie et vitesse agissent de la même manière dans ce cube : <strong className="text-white">elles réduisent l'ensemble uniformément</strong>. Plus l'étoile est massive, plus elle rétrécit rapidement. Plus elle rayonne d'énergie, plus elle se contracte. Plus elle se déplace vite, plus sa descente d'échelle s'accélère.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-32"></div>
            <Link
              to="/experiences-pensee-echelles/tapis-roulants"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
