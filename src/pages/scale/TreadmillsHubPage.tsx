import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const TreadmillsHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-pink-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] mb-3 sm:mb-4 px-2">
            Les Tapis Roulants
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Le mécanisme universel du mouvement à travers les cinq dimensions
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Chacun Son Tapis Roulant Invisible</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-semibold">
                  <strong className="text-white">Tout ce qui existe dans l'univers voyage sur son propre tapis roulant invisible.</strong> Que ce soit une étoile, une planète, un homme, un grain de poussière : chacun descend son propre tapis roulant à travers les cinq dimensions.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce tapis roulant n'est pas une métaphore : c'est le mouvement réel à travers les dimensions de l'univers. Trois dimensions d'espace, une de temps, et une d'échelle. Chaque particule, chaque atome, chaque structure cosmique descend son propre escalator vers l'infiniment petit, entraîné par le moteur universel.
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce mouvement a une cadence absolue : <strong className="text-purple-300">299 792 458 mètres par seconde</strong> — la vitesse de la lumière. C'est le tempo cosmique, le métronome universel qui bat sans jamais ralentir ni accélérer.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">La Vitesse Universelle</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  <strong className="text-white">La vitesse de ces tapis roulants est la même pour tous : la vitesse de la lumière.</strong> Ce rythme ne varie jamais, c'est le battement de cœur du cosmos. Rien n'accélère ni ne ralentit le moteur, il bat comme un métronome absolu.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce moteur universel ne varie jamais. Que tu sois un électron ou une galaxie, ton tapis roulant avance à cette vitesse exacte, sans exception. Chaque particule, chaque atome, chaque être vivant descend ce tapis roulant universel à exactement la même vitesse.
              </p>

              <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">Un Tempo Absolu</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Tout descend toujours à ce rythme, sans exception.</strong> La seule différence, c'est l'inclinaison du tapis roulant : plus ou moins raide selon la vitesse spatiale et la masse environnante. C'est le battement de cœur du cosmos, entraînant tout l'univers dans sa cadence éternelle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">L'Inclinaison Personnalisée</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">La différence entre ces tapis roulants, c'est leur inclinaison.</strong> Plus tu es rapide, plus tu es massif, plus le tapis roulant sur lequel tu voyages s'incline. Alors ton temps ralentit, et ton monde entier se contracte vers l'infiniment petit.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le tapis roulant de chaque objet s'incline selon deux facteurs principaux qui se combinent pour créer l'inclinaison totale :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">Effet de la Vitesse Spatiale</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Plus vous allez vite dans l'espace, plus votre tapis roulant s'incline vers l'échelle. C'est la contribution de la <strong className="text-white">relativité restreinte</strong>. Votre vitesse personnelle détermine votre part d'inclinaison.
                  </p>
                </div>

                <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border border-purple-400/30">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">Effet de la Courbure Gravitationnelle</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Plus la masse et l'énergie environnantes sont importantes, plus la courbure est forte, plus le tapis roulant penche vers l'échelle. C'est la contribution de la <strong className="text-white">relativité générale</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">La Combinaison des Effets</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ces deux contributions s'additionnent pour créer l'inclinaison totale. <strong className="text-white">Votre vitesse personnelle et la courbure locale se combinent</strong> pour déterminer l'angle exact de votre descente cosmique. C'est l'harmonie entre relativité restreinte et relativité générale, unifiée dans le cadre des cinq dimensions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-emerald-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 sm:mb-6">Les Configurations du Tapis Roulant</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Selon la vitesse et l'environnement gravitationnel, le tapis roulant peut prendre différentes inclinaisons. Voici les trois configurations principales :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30 text-center">
                  <h4 className="font-semibold text-green-300 mb-2">Tapis Roulant Plat</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Objet au repos, faible masse environnante</p>
                  <p className="text-xs text-green-200 mt-2">
                    <strong>Budget ET :</strong> Temps maximum, espace minimal<br/>
                    <strong>Budget TE :</strong> Temps maximum, échelle minimale
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Avancement surtout dans le temps, descente d'échelle imperceptible</p>
                </div>

                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-400/30 text-center">
                  <h4 className="font-semibold text-yellow-300 mb-2">Tapis Roulant Incliné</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Vitesse modérée, masse importante</p>
                  <p className="text-xs text-yellow-200 mt-2">
                    <strong>Budget ET :</strong> Partage équilibré<br/>
                    <strong>Budget TE :</strong> Partage équilibré
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Répartition équilibrée entre temps, espace et échelle</p>
                </div>

                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30 text-center">
                  <h4 className="font-semibold text-red-300 mb-2">Tapis Roulant Vertical</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Vitesse extrême, masse énorme</p>
                  <p className="text-xs text-red-200 mt-2">
                    <strong>Budget ET :</strong> Espace maximum, temps minimal<br/>
                    <strong>Budget TE :</strong> Échelle maximum, temps minimal
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Plongée vertigineuse dans l'échelle, temps presque figé</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-lg font-semibold text-teal-200 mb-3">Le Partage Universel</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Votre vitesse spatiale et l'environnement gravitationnel déterminent ensemble l'inclinaison de votre tapis roulant. <strong className="text-white">Plus vous allez vite spatialement et plus la courbure est forte, moins vous avancez temporellement, et plus vous plongez dans l'échelle.</strong> C'est la relativité étendue : votre budget universel se répartit entre trois dimensions (espace, temps, échelle), mais la somme reste toujours égale à la vitesse de la lumière.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">Exemples Concrets</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-400/30">
                  <h3 className="font-semibold text-green-300 mb-3 text-lg">Être Presque Immobile</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Un être presque immobile ou presque sans masse vit sur un tapis roulant qui ne descend presque pas, il est quasiment à l'horizontal : <strong className="text-white">il avance surtout dans le temps, et sa descente d'échelle est imperceptible</strong>. C'est notre expérience quotidienne.
                  </p>
                </div>

                <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-400/30">
                  <h3 className="font-semibold text-red-300 mb-3 text-lg">Étoile Massive ou Particule Rapide</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Une étoile massive ou une particule qui frôle la vitesse de la lumière, au contraire, vit sur un tapis roulant penché : <strong className="text-white">son temps propre est plus lent, et sa plongée dans l'échelle est plus prononcée</strong>. Le temps ralentit, l'univers rétrécit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4 sm:mb-6">L'Harmonie Cosmique</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  Ainsi, chaque objet dans l'univers danse sur son tapis roulant personnel, <strong className="text-white">tous synchronisés sur le même tempo cosmique, mais chacun avec son inclinaison unique</strong>, sculptée par sa vitesse et par l'environnement gravitationnel qui l'entoure.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Un électron près d'une étoile, un photon traversant le vide intergalactique, une galaxie entière : tous descendent leur escalator cosmique à la vitesse de la lumière, mais chacun avec son propre angle, déterminé par sa vitesse et son environnement.
              </p>

              <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  <strong className="text-white">Chaque galaxie, chaque astre, chaque corps possède son tapis roulant intime.</strong> Tous descendent à la même cadence absolue, mais chacun avec son inclinaison singulière. C'est une symphonie cosmique où tous les instruments jouent la même note, mais avec des harmoniques différentes.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-200 mb-3">La Symphonie Cosmique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  C'est une symphonie où tous les instruments jouent la même note (la vitesse de la lumière), mais avec des harmoniques différentes (les inclinaisons). <strong className="text-white">L'unité dans la diversité, la constance dans la variation</strong> : voilà l'élégance du tissu d'espace-temps-d'échelle unifié. L'univers entier est une chorégraphie d'escalators invisibles, tous synchronisés mais tous uniques.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-900/40 to-fuchsia-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-violet-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-violet-300 mb-4 sm:mb-6">Un Seul Moteur, Multiples Inclinaisons</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-violet-900/40 to-fuchsia-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-violet-400">
                <p className="text-base sm:text-lg text-violet-100 leading-relaxed">
                  La masse et l'énergie n'inventent pas un nouveau moteur, elles ne modifient pas la vitesse universelle. <strong className="text-white">Elles ajoutent seulement un coefficient multiplicateur à l'inclinaison du tapis roulant</strong> par la déformation du tissu de l'espace-temps.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est là toute l'élégance de ce modèle : il n'y a qu'un seul moteur universel, la vitesse de la lumière, mais une infinité d'inclinaisons possibles selon l'environnement gravitationnel et la vitesse de chaque objet. Cette vision unifiée combine les effets de la relativité restreinte (vitesse) et de la relativité générale (masse et énergie) dans un seul cadre cohérent à cinq dimensions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
