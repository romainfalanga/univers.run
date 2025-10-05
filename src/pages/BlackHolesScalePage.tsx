import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BlackHolesScalePage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-black/20"></div>
      
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(107,114,128,0.8)] mb-3 sm:mb-4 px-2">
            Les Trous Noirs
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Portes de recalibrage vers des univers plus harmonieux
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Création */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4 sm:mb-6">Création</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-gray-900/40 to-black/30 p-4 sm:p-6 rounded-lg border-l-4 border-gray-400">
                <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                  Lorsqu'une étoile massive arrive en fin de vie, elle s'effondre sur elle-même. Sa matière n'est plus soutenue par aucune réaction interne, et la gravité triomphe.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Dans ce processus, <strong className="text-white">ce n'est pas seulement l'espace qui se courbe : c'est aussi l'échelle-temps qui s'étire</strong>. L'infiniment petit va de plus en plus vers l'infiniment petit très rapidement. Et à ce moment précis, une frontière nouvelle apparaît : l'horizon des événements.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">L'Illusion de l'Arrêt</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  De l'extérieur, cet horizon donne l'illusion d'un arrêt. La lumière semble figée, les mouvements paraissent suspendus. Mais ce n'est qu'une limite de perception. <strong className="text-white">Ce que nous voyons est dû au fait que l'échelle de Planck a été repoussée si loin dans l'infiniment petit que même l'infiniment grand devient invisible</strong> car il est trop petit pour notre point de vue.
                </p>
              </div>
            </div>
          </div>

          {/* Le passage : un saut d'échelle */}
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Le Passage : Un Saut d'Échelle</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">Pour l'observateur qui tombe, rien ne se fige.</strong> Son cœur continue de battre, son horloge d'avancer. Mais au moment où il franchit l'horizon, son référentiel change brutalement : il est recalibré.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Il ne voyage pas dans un nouvel espace, il ne traverse pas une membrane. <strong className="text-indigo-300">Il reste dans le même tissu universel</strong>. Mais ce tissu est désormais tellement étiré qu'il agit à une nouvelle granularité.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Le Recalibrage</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  L'échelle de Planck, qui définissait auparavant l'infiniment petit, est repoussée bien plus bas qu'avant qu'il ne franchisse l'horizon. <strong className="text-white">Tout son monde se réorganise à une nouvelle échelle</strong>. Comme si la règle elle-même avec laquelle il mesurait la réalité avait changé d'un cran.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">Passage Instantané</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Ce passage est instantané.</strong> On ne s'attarde jamais "sur" l'horizon : d'un seul coup, on quitte l'horizon externe. On se retrouve en une fraction de seconde déjà projeté à l'horizon interne, la frontière du nouvel univers interne. Ce basculement est un saut d'échelle, une plongée vers une profondeur plus intime du même tissu.
                </p>
              </div>
            </div>
          </div>

          {/* Pourquoi le retour est impossible */}
          <div className="bg-gradient-to-br from-red-900/40 to-orange-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-red-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">Pourquoi le Retour est Impossible</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <p className="text-base sm:text-lg text-red-100 leading-relaxed">
                  <strong className="text-white">Une fois franchi, le chemin n'existe plus en sens inverse.</strong> Avancer dans le temps, c'est descendre dans l'échelle. Et cette descente est irréversible.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                De la même manière qu'on ne peut pas se rendre vers le passé, <strong className="text-orange-300">on ne peut pas remonter d'échelle</strong>. Notre direction est nécessairement d'aller vers le futur et vers l'infiniment petit.
              </p>
              
              <div className="bg-gradient-to-r from-orange-900/40 to-yellow-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-200 mb-3">Recalibrage des Lois</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  À cette nouvelle échelle étirée du tissu d'échelle-temps, <strong className="text-white">la relativité restreinte des échelles et la relativité générale des échelles agissent à nouveau, mais recalibrées sur une nouvelle échelle</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* La taille de l'univers quantique */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-green-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-300 mb-4 sm:mb-6">La Taille de l'Univers Quantique</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
                <p className="text-base sm:text-lg text-green-100 leading-relaxed">
                  <strong className="text-white">Chaque univers interne naît avec une taille bien précise.</strong> Ce n'est pas une dimension arbitraire : c'est la traduction directe de la taille de l'horizon des événements du trou noir qui l'a engendré.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ainsi, la taille d'un univers quantique est exactement celle de l'horizon parent, mais mesurée avec une nouvelle règle, celle du nouvel étalonnage d'échelle.
              </p>
              
              <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <h3 className="text-lg font-semibold text-emerald-200 mb-3">Paradoxe de Taille</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">L'univers interne est donc à la fois immense et minuscule :</strong> immense pour ceux qui y vivent, minuscule vu du parent. Et comme chaque effondrement entraîne un recalibrage encore plus profond, les univers successifs deviennent de plus en plus petits, mais toujours cohérents avec leur horizon d'origine.
                </p>
              </div>
            </div>
          </div>

          {/* Les univers internes */}
          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4 sm:mb-6">Les Univers Internes</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  Du côté de l'horizon interne, <strong className="text-white">un nouvel univers prend forme</strong>. Mais il n'a pas la complexité du monde parent.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Là où l'univers supérieur contenait des milliards de galaxies, le premier univers interne n'abrite probablement qu'une galaxie unique : un trou noir central et quelques étoiles autour.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/30 text-center">
                  <h4 className="font-semibold text-purple-300 mb-2">1er Niveau</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Milliards de galaxies → Une galaxie unique</p>
                </div>
                <div className="bg-indigo-900/20 p-4 rounded-lg border border-indigo-400/30 text-center">
                  <h4 className="font-semibold text-indigo-300 mb-2">2e Niveau</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Une galaxie → Un amas stellaire</p>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30 text-center">
                  <h4 className="font-semibold text-blue-300 mb-2">3e Niveau</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Amas stellaire → Système solaire harmonieux</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Raréfaction Progressive</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Chaque descente raréfie la matière.</strong> Le tumulte s'apaise. Le désordre des grandes structures s'efface. À chaque étage, l'univers devient plus sobre, plus stable, plus harmonieux.
                </p>
              </div>
            </div>
          </div>

          {/* L'harmonie au bout de la descente */}
          <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-yellow-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6">L'Harmonie au Bout de la Descente</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="text-base sm:text-lg text-yellow-100 leading-relaxed">
                  En suivant cette logique, <strong className="text-white">l'histoire de l'univers n'est pas celle d'un chaos qui grandit, mais celle d'un chaos qui s'épure et qui tend vers une harmonie</strong>.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Chaque effondrement est une étape de simplification. Chaque nouvel univers efface une part de désordre pour tendre vers l'équilibre.
              </p>
              
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-200 mb-3">Du Chaos à l'Harmonie</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  À la surface, notre cosmos bouillonne de galaxies en collision, d'étoiles qui meurent, de matière sombre et d'énergie foisonnante. <strong className="text-white">Mais au fond, plus bas, dans les univers internes, règnent des mondes de plus en plus sobres</strong>, jusqu'à ce qu'il n'y ait plus qu'une étoile avec un système harmonieux.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-red-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-red-200 mb-3">Vision Révolutionnaire</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Voilà le visage des trous noirs dans la relativité des échelles :</strong> non pas des abîmes de destruction, mais des portes de recalibrage, qui nous mènent de marche en marche vers des univers plus simples, plus petits, mais aussi plus parfaits.
                </p>
              </div>
            </div>
          </div>

          {/* La singularité */}
          <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-pink-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-4 sm:mb-6">La Singularité</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <p className="text-base sm:text-lg text-pink-100 leading-relaxed">
                  En relativité générale, le cœur d'un trou noir est une singularité : un point de densité infinie. <strong className="text-white">Mais cette image est une illusion née de nos limites de mesure</strong>.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Dans la Relativité des échelles, <strong className="text-purple-300">la singularité n'existe pas</strong>. Ce qui s'effondre n'est pas concentré en un point, mais projeté bien plus loin dans l'infiniment petit.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Erreur de Perspective</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le changement d'échelle transforme notre perception : <strong className="text-white">la matière continue d'exister, mais à une granularité que nos règles actuelles ne peuvent plus saisir</strong>. La "densité infinie" n'est qu'une erreur de perspective : ce n'est pas une masse comprimée en un seul point, mais une masse recalibrée dans un autre palier de l'échelle.
                </p>
              </div>
            </div>
          </div>

          {/* L'horizon des événements */}
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">L'Horizon des Événements</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  L'horizon est la frontière mystérieuse des trous noirs, au-delà de laquelle rien ne revient. Dans les équations d'Einstein, l'espace s'inverse en temps et tout se fige.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                <strong className="text-blue-300">La Relativité des échelles en donne une explication et une image claire :</strong> le tapis roulant propre de l'objet qui tombe penche de plus en plus, jusqu'à se dresser presque à la verticale.
              </p>
              
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">Changement de Règle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  La Relativité des échelles en donne une explication claire : <strong className="text-white">le tapis roulant propre de l'objet qui tombe penche de plus en plus, jusqu'à se dresser presque à la verticale</strong>. C'est le moment où la règle qui mesure la réalité change.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Continuité pour l'Observateur</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Pour l'observateur extérieur qui observe l'astre tomber dans le trou noir, tout paraît figé car ce qui se passe est projeté trop loin dans l'infiniment petit.
                  Mais pour l'objet qui franchit l'horizon, <strong className="text-white">rien ne s'arrête : il poursuit sa marche à la vitesse de la lumière</strong>, et, dès qu'il passe l'horizon des événements, tout redevient normal, mais à un cran plus profond de la réalité.
                </p>
              </div>
            </div>
          </div>

          {/* L'invisibilité du trou noir */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-gray-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4 sm:mb-6">L'Invisibilité du Trou Noir</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-gray-900/40 to-black/30 p-4 sm:p-6 rounded-lg border-l-4 border-gray-400">
                <p className="text-base sm:text-lg text-gray-100 leading-relaxed">
                  Si un trou noir paraît noir, <strong className="text-white">ce n'est pas parce qu'il cache quelque chose derrière un rideau opaque</strong>. C'est parce que son intérieur est devenu trop loin dans l'infiniment petit.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                L'échelle s'est tellement étirée qu'aucune lumière issue de l'intérieur ne peut nous atteindre : <strong className="text-gray-300">elle existe encore, mais à une échelle hors de notre portée</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-black/40 to-gray-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="text-lg font-semibold text-gray-200 mb-3">Analogie Cosmique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Autrement dit, ce que nous appelons "invisibilité" est la conséquence directe du recalibrage d'échelle : <strong className="text-white">l'infiniment grand, tel que perçu par ceux qui vivent à l'intérieur, est pour nous tellement bas dans l'infiniment petit que nos instruments ne peuvent plus le capter</strong>. Comme si nous essayons de regarder un atome sur terre depuis une galaxie voisine.
                </p>
              </div>
            </div>
          </div>

          {/* Derrière l'horizon */}
          <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 sm:mb-6">Derrière l'Horizon</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-emerald-900/40 to-green-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
                  <strong className="text-white">En franchissant un horizon, nous n'entrons pas dans le chaos, mais dans un univers plus harmonieux.</strong> La Relativité des échelles affirme que chaque trou noir engendre un univers interne, réglé sur une nouvelle échelle propre.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                À chaque passage, la matière devient plus rare, les structures plus sobres, et le désordre du monde parent s'apaise.
              </p>
              
              <div className="bg-gradient-to-r from-green-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-green-200 mb-3">Cascade de Simplification</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Un univers rempli de galaxies tumultueuses peut engendrer une infinité d'univers interne réduit à une seule galaxie. En s'effondrant, une étoile donnera un univers encore plus simple : peut-être un amas stellaire avec en son centre un autre trou noir dans lequel pourrait se trouver un système stellaire unique entourée de ses planètes dans un équilibre parfait.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-lg font-semibold text-teal-200 mb-3">Montée vers la Simplicité</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">À mesure qu'on descend les marches de l'échelle, l'harmonie augmente.</strong> Le chaos apparent du cosmos se purifie en couches successives, comme si la descente dans l'infiniment petit était aussi une montée vers la simplicité et l'harmonie.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};