import React from 'react';
import { Link } from 'react-router-dom';

export const ScaleRelativityPage: React.FC = () => {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden pt-24 sm:pt-28">
      {/* Effet de grille futuriste en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-teal-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        {/* En-tête */}
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 via-cyan-300 to-green-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-3 sm:mb-4 px-2">
            Relativité des Échelles
          </h1>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                Depuis Einstein, nous savons que l'espace et le temps ne sont pas deux entités séparées, mais les fils croisés d'une même toile : l'espace-temps. Cette vision a bouleversé notre manière de voir l'univers. Pourtant, elle atteint ses limites : au cœur des trous noirs, elle prédit des singularités où la physique cesse de parler.
              </p>

              <div className="flex justify-center mt-4 sm:mt-6">
                <Link
                  to="/relativite-classique"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Relativité Classique
                </Link>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                <strong className="text-emerald-300">Et si ce vertige venait non pas d'une erreur, mais d'un oubli ?</strong> Et si à côté de l'espace et du temps, il existait une autre dimension, tout aussi fondamentale, que nous n'avons jamais nommée ?
              </p>
              
              <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-base sm:text-lg text-emerald-100 leading-relaxed font-semibold">
                  Imagine un instant que l'univers n'ait pas seulement trois directions d'espace et une de temps, mais qu'il en ait aussi une cinquième : <strong className="text-white">l'échelle</strong>.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Nous ne voyageons pas seulement dans des lieux et dans des instants : <strong className="text-teal-300">nous avançons aussi dans la profondeur du petit</strong>. À chaque seconde, sans le sentir, nous descendons un tapis roulant infini qui nous entraîne vers l'infiniment petit.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  Ce tapis roulant n'a qu'une seule cadence : <strong className="text-white">la vitesse de la lumière</strong>. C'est le battement de cœur de l'univers, l'horloge universelle. Rien ni personne ne peut s'en détacher. Tout ce que nous faisons, c'est descendre sa pente, avec une inclinaison plus ou moins forte.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Alors l'"expansion" de l'univers prend un tout autre sens. Ce que nous croyons voir : des galaxies qui s'éloignent, un espace qui gonfle, n'est peut-être qu'une illusion de perspective. Car <strong className="text-emerald-300">ce n'est pas l'espace qui grandit, mais l'échelle qui s'étire vers l'infiniment petit</strong>.
              </p>
            </div>
          </div>

          {/* Section Tissu d'espace-temps-d'échelle */}
          <div id="tissu" className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-300 mb-4">
                Le Tissu d'Espace-Temps-d'Échelle
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-emerald-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  L'espace-temps et l'échelle-temps ne sont pas deux mondes séparés : ils sont superposés, liés par le même pivot : <strong className="text-white">le temps</strong>.
                </p>
              </div>

              <div className="bg-teal-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ensemble, ils forment un seul tissu : <strong className="text-teal-300">le tissu d'espace-temps-d'échelle</strong>. Ce tissu est entraîné par un moteur universel : la vitesse de la lumière. Tout descend toujours à ce rythme, sans exception.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/40 to-emerald-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-cyan-300">La seule différence, c'est l'inclinaison du tapis roulant :</strong> plus ou moins raide selon la vitesse, la masse et l'énergie.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Einstein nous a révélé l'espace-temps, cette toile où l'espace et le temps s'entremêlent. Mais il manquait une dimension : l'échelle. Dans mon modèle, l'échelle et le temps forment un second tissu, l'échelle-temps, qui se superpose au premier.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-emerald-300 mb-3">Superposition des Tissus</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Découvrez comment les deux tissus (espace-temps et échelle-temps) sont reliés par le pivot temporel pour former une structure unifiée à cinq dimensions.
                  </p>
                  <Link
                    to="/tissu-espace-temps-echelle/superposition"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Superposition des Tissus
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3">Les Tapis Roulants</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Explorez le mécanisme universel où tout descend à la vitesse de la lumière avec des inclinaisons variables selon la vitesse et la masse.
                  </p>
                  <Link
                    to="/tissu-espace-temps-echelle/tapis-roulant"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Les Tapis Roulants
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section Relativité Restreinte des Échelles */}
          <div id="relativite-restreinte" className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-300 mb-4">
                Relativité Restreinte des Échelles
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-200 mb-3">Le Budget Universel</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Einstein avait montré que notre mouvement se partage entre l'espace et le temps. Dans mon modèle, ce partage s'étend : il existe un <strong className="text-white">budget universel</strong>, découpé en deux comptes reliés par le même pivot : le curseur temps.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                  <h4 className="font-semibold text-blue-300 mb-2">Budget Espace-Temps (ET)</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Partage entre mouvement spatial et écoulement temporel</p>
                </div>
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-400/30">
                  <h4 className="font-semibold text-indigo-300 mb-2">Budget Temps-Échelle (TE)</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Partage entre écoulement temporel et descente d'échelle</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-purple-300">Ces deux budgets sont connectés par le curseur temps :</strong> tout ce qui est soustrait au temps dans ET réapparaît automatiquement dans TE. Modifier l'un, c'est forcer l'autre à s'ajuster.
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Nous n'avons pas la main sur ce budget total. La seule liberté qui nous est laissée est spatiale : en changeant notre vitesse, nous déplaçons le curseur temps, et avec lui, nous modifions automatiquement le partage entre le temps et l'échelle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2">Le Budget Universel</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Comprenez comment les budgets ET et TE partagent le mouvement universel à travers les dimensions.
                  </p>
                  <Link
                    to="/relativite-restreinte-echelles/budget-universel"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Le Budget Universel
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-indigo-300 mb-2">Le Pivot Temporel</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Découvrez le rôle central du temps comme lien connectant les deux budgets de manière indissociable.
                  </p>
                  <Link
                    to="/relativite-restreinte-echelles/pivot-temporel"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Le Pivot Temporel
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Les Tapis Roulants</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Explorez le mécanisme fondamental du mouvement à travers les cinq dimensions de l'univers.
                  </p>
                  <Link
                    to="/relativite-restreinte-echelles/tapis-roulant"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Les Tapis Roulants
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-green-300 mb-2">Situation Immobile</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Analysez l'allocation maximale du budget au temps quand la vitesse spatiale est quasi nulle.
                  </p>
                  <Link
                    to="/relativite-restreinte-echelles/immobile"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Situation Immobile
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-red-400/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-red-300 mb-2">Vitesse Extrême</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Observez la descente maximale vers l'infiniment petit quand la vitesse frôle celle de la lumière.
                  </p>
                  <Link
                    to="/relativite-restreinte-echelles/vitesse-extreme"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Vitesse Extrême
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section Relativité Générale des Échelles */}
          <div id="relativite-generale" className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-4">
                Relativité Générale des Échelles
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Imagine que tu es sur ton tapis roulant. Il descend toujours à la même cadence : <strong className="text-white">la vitesse de la lumière</strong>. Rien n'accélère ni ne ralentit le moteur, il bat comme un métronome absolu.
                </p>
              </div>

              <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Mais voilà : <strong className="text-indigo-300">la masse et l'énergie qui t'entourent viennent poser leur poids sur ce tapis roulant</strong>. Une planète, une étoile, un nuage de gaz brûlant : tout cela pèse sur le tissu de l'espace-temps et fait basculer le tapis roulant vers l'avant.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30">
                  <h4 className="font-semibold text-green-300 mb-2">Région calme</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Tapis roulant avec pente douce, avancement surtout dans le temps</p>
                </div>
                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-400/30">
                  <h4 className="font-semibold text-yellow-300 mb-2">Près d'une étoile</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Tapis roulant avec pente plus raide, budget glisse vers l'échelle</p>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30">
                  <h4 className="font-semibold text-red-300 mb-2">Trou noir</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Tapis roulant avec pente verticale, chute libre vers l'échelle</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                La masse et l'énergie n'inventent pas un nouveau moteur, elles ne modifient pas la vitesse universelle. Elles ajoutent seulement un coefficient multiplicateur à l'inclinaison du tapis roulant par la déformation du tissu de l'espace-temps.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-300 mb-3">Les Tapis Roulants</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Comprenez comment la masse et l'énergie agissent comme une main qui appuie sur le tapis roulant pour modifier son inclinaison.
                  </p>
                  <Link
                    to="/relativite-generale-echelles/escalator-universel"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Les Tapis Roulants
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-3">Les Environnements</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Découvrez les variations d'inclinaison selon l'environnement : du vide spatial aux régions denses près des trous noirs.
                  </p>
                  <Link
                    to="/relativite-generale-echelles/environnements"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Les Environnements
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section Les Tapis Roulants */}
          <div id="tapis-roulants" className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 mb-4">
                Les Tapis Roulants
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-3">Le Mécanisme Universel</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Tout ce qui existe dans l'univers voyage sur son propre tapis roulant invisible à travers les cinq dimensions. <strong className="text-white">La vitesse est la même pour tous : la vitesse de la lumière</strong>. Seule l'inclinaison diffère selon la vitesse spatiale et l'environnement gravitationnel.
                </p>
              </div>

              <div className="bg-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-200 mb-3">La Visualisation Unifiée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette page offre une visualisation complète et unifiée du mécanisme des tapis roulants : comment la relativité restreinte et la relativité générale se combinent pour créer l'inclinaison personnalisée de chaque objet dans l'univers.
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-echelles-final"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-purple-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Les Tapis Roulants
                </Link>
              </div>
            </div>
          </div>

          {/* Section Le Musée des Dimensions */}
          <div id="musee-dimensions" className="bg-gradient-to-br from-orange-900/40 to-red-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300 mb-4">
                Le Musée des Dimensions
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-orange-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-200 mb-3">Une Expérience de Pensée Visuelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  La cinquième dimension est difficile à visualiser dans notre quotidien. Nous vivons dans un monde où trois dimensions d'espace et une dimension de temps semblent suffire à tout décrire. <strong className="text-white">Le Musée des Dimensions est une expérience de pensée puissante qui rend l'abstrait concret</strong>. Prépare-toi à un voyage conceptuel qui révélera la nature cachée de la réalité et te permettra de voir de tes propres yeux la différence entre un univers en quatre dimensions et un univers en cinq dimensions.
                </p>
              </div>

              <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg sm:text-xl font-semibold text-red-200 mb-3">Le Voyage à Travers les Pièces</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Imagine que tu entres dans un musée où chaque pièce révèle une dimension cachée de la réalité. Commence par franchir l'entrée du musée, puis explore la première pièce où un tapis roulant révèle la différence fondamentale entre un univers en quatre dimensions et un univers en cinq dimensions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-3">L'Entrée du Musée</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Franchir le seuil d'une nouvelle perception de la réalité et découvrir le portail vers la cinquième dimension.
                  </p>
                  <Link
                    to="/experiences-pensee-echelles/entree-musee"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    L'Entrée du Musée
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-orange-300 mb-3">La Première Pièce</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    La révélation de la cinquième dimension à travers le tapis roulant et la visualisation directe de l'échelle.
                  </p>
                  <Link
                    to="/experiences-pensee-echelles/premiere-piece"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    La Première Pièce
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section L'Expansion */}
          <div id="expansion" className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-300 mb-4">
                L'Expansion
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-200 mb-3">Une Nouvelle Vision de l'Expansion Cosmique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ce que nous appelons "expansion de l'univers" pourrait être une illusion de perspective. <strong className="text-white">Ce n'est pas l'espace qui grandit, mais l'échelle qui se contracte</strong>. Cette nouvelle vision transforme notre compréhension du cosmos et offre une alternative élégante aux concepts d'énergie sombre et d'expansion accélérée.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-indigo-400/30 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-indigo-300 mb-2">L'Illusion de l'Expansion</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Pourquoi l'univers semble s'étendre alors qu'il se contracte vers l'infiniment petit.
                  </p>
                  <Link
                    to="/expansion-interne/illusion-expansion"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    L'Illusion de l'Expansion
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">La Loi de Hubble</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    70 km/s par mégaparsec : une traduction de la descente d'échelle universelle.
                  </p>
                  <Link
                    to="/expansion-interne/loi-hubble"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    La Loi de Hubble
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">L'Énergie Sombre</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Une explication alternative à l'accélération apparente de l'expansion cosmique.
                  </p>
                  <Link
                    to="/expansion-interne/energie-sombre"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    L'Énergie Sombre
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div id="trous-noirs" className="bg-gradient-to-br from-gray-900/60 to-black/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-gray-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
                Les Trous Noirs
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">Portes de Recalibrage vers des Univers Plus Harmonieux</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Dans la Relativité des échelles, les trous noirs ne sont pas des abîmes de destruction, mais des <strong className="text-white">portes de recalibrage</strong> vers des univers plus harmonieux. Franchir l'horizon des événements, c'est effectuer un <strong className="text-white">saut d'échelle instantané</strong>. Le référentiel se recalibre, l'échelle de Planck est repoussée plus loin dans l\'infiniment petit, créant un nouvel univers interne. Chaque passage nous mène vers des mondes plus simples et plus parfaits. L\'histoire de l\'univers n\'est pas celle d\'un chaos qui grandit, mais d\'un <strong className="text-white">chaos qui s\'épure vers l'harmonie</strong>. Explorez chaque aspect de ce phénomène fascinant.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gray-400/30 hover:border-gray-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-2">Création</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Formation des trous noirs et effondrement gravitationnel massif.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/creation"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-gray-600 to-black hover:from-gray-500 hover:to-gray-800 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Création
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-purple-300 mb-2">Le Passage</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Franchissement de l'horizon et recalibrage instantané d'échelle.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/passage"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Le Passage
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-red-400/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-red-300 mb-2">Retour Impossible</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    L'irréversibilité du passage et la flèche du temps.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/retour-impossible"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Retour Impossible
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-green-300 mb-2">Taille de l'Univers</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Les dimensions des univers internes et l'horizon parent.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/taille-univers"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Taille de l'Univers
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Univers Internes</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Raréfaction progressive et niveaux de complexité décroissante.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/univers-internes"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Univers Internes
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-yellow-300 mb-2">L'Harmonie</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Purification cosmique et tendance vers la perfection absolue.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/harmonie"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    L'Harmonie
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-pink-300 mb-2">La Singularité</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Réinterprétation du concept et erreur de perspective spatiale.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/singularite"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    La Singularité
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-300 mb-2">L'Horizon</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Frontière mystérieuse et changement de règle fondamental.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/horizon"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    L'Horizon
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-gray-500/30 hover:border-gray-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-2">L'Invisibilité</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Pourquoi les trous noirs paraissent noirs dans l'espace.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/invisibilite"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    L'Invisibilité
                  </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                  <h3 className="text-base sm:text-lg font-semibold text-emerald-300 mb-2">Derrière l'Horizon</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                    Ce qui se trouve de l'autre côté et cascade de simplification.
                  </p>
                  <Link
                    to="/trous-noirs-echelles/derriere-horizon"
                    className="inline-flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Derrière l'Horizon
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};