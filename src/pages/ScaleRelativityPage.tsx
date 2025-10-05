import React from 'react';
import { Link } from 'react-router-dom';

export const ScaleRelativityPage: React.FC = () => {
  // Force le re-rendu propre de la page
  React.useEffect(() => {
    window.scrollTo(0, 0);
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
          <p className="text-base sm:text-lg lg:text-xl text-emerald-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Découvrez mon modèle d'univers en 5 dimensions : espace, temps et échelle
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Introduction */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                Depuis Einstein, nous savons que l'espace et le temps ne sont pas deux entités séparées, mais les fils croisés d'une même toile : l'espace-temps. Cette vision a bouleversé notre manière de voir l'univers. Pourtant, elle atteint ses limites : au cœur des trous noirs, elle prédit des singularités où la physique cesse de parler.
              </p>
              
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
          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-2xl">
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
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/tissu-espace-temps-echelle"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 hover:shadow-emerald-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Le Tissu d'Espace-Temps-d'Échelle
                </Link>
              </div>
            </div>
          </div>

          {/* Section Relativité Restreinte des Échelles */}
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
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
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-restreinte-echelles"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Relativité Restreinte des Échelles
                </Link>
              </div>
            </div>
          </div>

          {/* Section Relativité Générale des Échelles */}
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
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
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-generale-echelles"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Relativité Générale des Échelles
                </Link>
              </div>
            </div>
          </div>

          {/* Section Les Tapis Roulants */}
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
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
          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-300 mb-4">
                Le Musée des Dimensions
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-orange-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-200 mb-3">Une Expérience de Pensée Visuelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Imagine que tu entres dans un musée où chaque pièce révèle une dimension cachée de la réalité. <strong className="text-white">Le Musée des Dimensions est une expérience de pensée puissante</strong> qui rend l'abstrait concret et te permet de voir la cinquième dimension de tes propres yeux.
                </p>
              </div>

              <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg sm:text-xl font-semibold text-red-200 mb-3">Le Voyage à Travers les Pièces</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Commence par franchir l'entrée du musée, puis explore la première pièce où un tapis roulant révèle la différence entre un univers en quatre dimensions et un univers en cinq dimensions.
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <Link
                  to="/experiences-pensee-echelles"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 hover:shadow-orange-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Le Musée des Dimensions
                </Link>
              </div>
            </div>
          </div>

          {/* Section L'Expansion */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-300 mb-4">
                L'Expansion
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-200 mb-3">L'Illusion de l'Expansion</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ce que nous appelons "expansion de l'univers" pourrait être une illusion de perspective. <strong className="text-white">Ce n'est pas l'espace qui grandit, mais l'échelle qui se contracte</strong>.
                </p>
              </div>
              
              <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-3">La Loi de Hubble Réinterprétée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  La constante de Hubble — 70 km/s par mégaparsec — n'est que <strong className="text-white">la traduction visible de cette réduction d'échelle par seconde</strong>. Plus une galaxie est loin, plus le rayonnement cumulé a incliné nos tapis roulants.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-200 mb-3">L'Énergie Sombre Réexaminée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  L'accélération apparente de l'expansion s'explique naturellement sans recourir à l'énergie sombre. <strong className="text-white">La descente d'échelle non-linéaire crée naturellement l'apparence d'une accélération</strong>.
                </p>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/expansion-interne"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  L'Expansion Interne
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900/60 to-black/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-gray-400/30 shadow-2xl">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
                Les Trous Noirs
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">Portes de Recalibrage</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Dans la Relativité des échelles, les trous noirs ne sont pas des abîmes de destruction, mais des <strong className="text-white">portes de recalibrage</strong> vers des univers plus harmonieux. Chaque passage nous mène vers des mondes plus simples et plus parfaits.
                </p>
              </div>
              
              <div className="bg-black/20 p-4 sm:p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">Le Saut d'Échelle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Franchir l'horizon des événements, c'est effectuer un <strong className="text-white">saut d'échelle instantané</strong>. Le référentiel se recalibre, l'échelle de Planck est repoussée plus loin dans l'infiniment petit, créant un nouvel univers interne.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-3">Les Univers Internes</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Chaque trou noir engendre un univers interne plus sobre : des milliards de galaxies deviennent une galaxie unique, puis un amas stellaire, puis un système solaire harmonieux. <strong className="text-white">La complexité se simplifie à chaque étage</strong>.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-900/40 to-green-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <h3 className="text-lg sm:text-xl font-semibold text-emerald-200 mb-3">L'Harmonie Progressive</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  L'histoire de l'univers n'est pas celle d'un chaos qui grandit, mais d'un <strong className="text-white">chaos qui s'épure vers l'harmonie</strong>. Chaque effondrement est une étape de purification cosmique.
                </p>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/trous-noirs-echelles"
                  className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-600 to-black hover:from-gray-500 hover:to-gray-800 hover:shadow-gray-500/25 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Les Trous Noirs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};