import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const FirstRoomPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-red-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles#musee-dimensions"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(251,146,60,0.8)] mb-3 sm:mb-4 px-2">
            La Première Pièce
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-orange-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            La révélation de la cinquième dimension
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">Le Tapis Roulant Révélateur</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Tu franchis le seuil de la première pièce. C'est un couloir étroit et mystérieux, baigné d'une lumière douce et changeante. Au centre du couloir, tu vois un tapis roulant qui s'étend devant toi, disparaissant dans la pénombre au loin.
              </p>

              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <p className="text-base sm:text-lg text-orange-100 leading-relaxed">
                  Tu montes sur le tapis roulant. Aussitôt, quelque chose d'extraordinaire se produit : <strong className="text-white">2 cubes apparaissent, flottant dans l'air de chaque côté de toi</strong>. À ta gauche, un cube en 3D contenant une étoile brillante. À ta droite, le même cube en 3D, avec exactement la même étoile.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le tapis roulant commence à avancer doucement, t'emportant vers l'avant. Et c'est là que la magie opère : au fur et à mesure que tu avances, <strong className="text-orange-300">une nouvelle tranche de temps apparaît</strong>. Deux nouveaux cubes se créent à ton niveau. Un à ta gauche, un à ta droite.
              </p>

              <div className="bg-gradient-to-r from-red-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-red-200 mb-3">Le Flux du Temps Visible</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Plus tu avances sur le tapis roulant, plus de nouveaux cubes se créent. <strong className="text-white">Tu vois la même étoile en double, répétée à l'infini</strong>. Chaque nouveau cube est le nouveau présent. Tous les cubes derrière toi sont leur passé. C'est la dimension du temps qui devient visible sous tes yeux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-red-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">La Différence Révélatrice</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-3">
                Tu continues d'avancer, fasciné par cette visualisation du temps. Mais très vite, tu remarques quelque chose d'étrange. <strong className="text-red-300">Les deux rangées de cubes ne sont pas identiques</strong>. Une différence subtile mais cruciale se révèle entre la gauche et la droite :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/30 p-4 sm:p-6 rounded-lg border border-gray-400/30">
                  <h3 className="font-semibold text-gray-300 mb-3 text-lg">Cube de Gauche : L'Univers en 4D</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Ces cubes ne prennent pas en compte la cinquième dimension. Tous les nouveaux cubes qui apparaissent restent parfaitement identiques au fil du temps. <strong className="text-white">L'étoile garde toujours exactement la même taille</strong>, instant après instant.
                  </p>
                  <p className="text-xs text-gray-400 italic mt-2">
                    C'est l'univers classique en quatre dimensions : trois d'espace, une de temps. Stable, constant, immuable.
                  </p>
                </div>

                <div className="bg-red-800/30 p-4 sm:p-6 rounded-lg border border-red-400/30">
                  <h3 className="font-semibold text-red-300 mb-3 text-lg">Cube de Droite : L'Univers en 5D</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Ces cubes prennent en compte la cinquième dimension : l'échelle. À chaque instant, chaque nouvelle étoile qui apparaît est <strong className="text-white">légèrement plus petite que la précédente</strong>. L'étoile semble rétrécir progressivement !
                  </p>
                  <p className="text-xs text-red-200 italic mt-2">
                    C'est l'univers réel en cinq dimensions : trois d'espace, une de temps, une d'échelle. Dynamique, en mouvement constant vers l'infiniment petit.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <p className="text-base sm:text-lg text-pink-100 leading-relaxed">
                  Tu fixes ces deux rangées de cubes, alternant ton regard de gauche à droite. D'un côté, une étoile éternellement stable. De l'autre, <strong className="text-white">une étoile qui se contracte imperceptiblement à chaque instant qui passe</strong>. Voilà la cinquième dimension révélée sous tes yeux.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">La Compréhension</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">C'est en comparant les deux que tu comprends la cinquième dimension.</strong> D'un côté, une rangée d'étoiles stables, droites et constantes — l'illusion d'un univers figé. De l'autre, une rangée d'étoiles qui se resserre vers le minuscule — la réalité d'un univers en mouvement perpétuel.
                </p>
              </div>

              <p className="text-base sm:text-lg text-cyan-100 leading-relaxed font-semibold">
                Voilà ce qu'est l'échelle : <strong className="text-white">la dimension invisible qui fait que, même si tout est identique de l'intérieur, la réalité se contracte pas à pas lorsqu'on la regarde de l'extérieur</strong>. Un observateur externe verrait l'étoile rétrécir. Mais un observateur à l'intérieur de l'étoile ne remarquerait rien, car tout rétrécit avec lui : ses instruments de mesure, son corps, ses atomes.
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est pour cela que nous ne percevons pas la cinquième dimension dans notre quotidien. Nous sommes comme des habitants de l'étoile de droite, emportés par le flux de la contraction sans pouvoir la mesurer directement. Seule la comparaison avec un univers théorique en 4D nous permet de révéler cette dimension cachée.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-cyan-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">L'Action de la Masse, Énergie et Vitesse</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Tu continues d'observer la rangée de droite, celle qui montre l'univers réel en cinq dimensions. Et tu remarques quelque chose de fascinant : la vitesse de contraction de l'étoile n'est pas constante. Elle varie selon plusieurs facteurs.
              </p>

              <div className="bg-gradient-to-r from-indigo-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Le Triple Moteur de la Contraction</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Masse, énergie et vitesse agissent de la même manière dans ce cube : <strong className="text-white">elles réduisent l'ensemble uniformément</strong>, accélérant la descente dans l'échelle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                  <h4 className="font-semibold text-blue-300 mb-2 text-center">La Masse</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-center">
                    Plus l'étoile est massive, <strong className="text-white">plus elle rétrécit rapidement</strong>. Une étoile géante plonge plus vite dans l'échelle qu'une étoile légère.
                  </p>
                </div>

                <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/30">
                  <h4 className="font-semibold text-cyan-300 mb-2 text-center">L'Énergie</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-center">
                    Plus elle rayonne d'énergie, <strong className="text-white">plus elle se contracte</strong>. Un astre qui brille intensément descend plus rapidement dans l'échelle.
                  </p>
                </div>

                <div className="bg-teal-900/20 p-4 rounded-lg border border-teal-400/30">
                  <h4 className="font-semibold text-teal-300 mb-2 text-center">La Vitesse</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed text-center">
                    Plus elle se déplace vite dans l'espace, <strong className="text-white">plus sa descente d'échelle s'accélère</strong>. Le mouvement spatial intensifie la plongée vers l'infiniment petit.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  Ces trois facteurs ne sont pas indépendants. Ils se combinent, s'additionnent, créent ensemble l'inclinaison totale du tapis roulant cosmique. <strong className="text-white">Plus un objet est massif, énergétique et rapide, plus son univers entier se contracte rapidement</strong>. C'est la loi fondamentale de la descente d'échelle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-900/40 to-emerald-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-teal-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-teal-300 mb-4 sm:mb-6">La Révélation Complète</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
                  Tu descends du tapis roulant, transformé par ce que tu viens de voir. <strong className="text-white">La cinquième dimension n'est plus une abstraction mathématique</strong>. C'est une réalité tangible que tu as vue de tes propres yeux se déployer dans cette pièce extraordinaire.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Tu comprends maintenant que notre univers est comme la rangée de cubes de droite : en apparence stable, mais en réalité en mouvement constant vers l'infiniment petit. Chaque seconde qui passe est une nouvelle tranche de réalité légèrement contractée par rapport à la précédente.
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Et cette contraction n'est pas uniforme : elle dépend de la masse, de l'énergie et de la vitesse. Un photon rapide plonge plus vite qu'un atome au repos. Une étoile massive s'enfonce plus profondément qu'un grain de poussière. <strong className="text-teal-300">Chaque objet dans l'univers a son propre rythme de descente</strong>, sa propre inclinaison sur le tapis roulant cosmique.
              </p>

              <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <p className="text-base sm:text-lg text-teal-100 leading-relaxed text-center font-semibold">
                  Tu sors de la première pièce avec une nouvelle vision de la réalité. L'univers n'est plus ce qu'il était. La cinquième dimension t'a été révélée.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-8">
          <div className="flex justify-start items-center">
            <Link
              to="/experiences-pensee-echelles/entree-musee"
              className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour à l'Entrée
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
