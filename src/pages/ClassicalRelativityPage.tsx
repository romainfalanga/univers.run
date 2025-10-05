import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Globe, Target, ArrowRight } from 'lucide-react';

export const ClassicalRelativityPage: React.FC = () => {
  // Force le re-rendu propre de la page
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden pt-24 sm:pt-28">
      {/* Effet de grille futuriste en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        {/* En-tête */}
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 via-purple-300 to-violet-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] mb-3 sm:mb-4 px-2">
            Relativité Classique
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Découvrez comment Einstein a révolutionné notre compréhension de l'espace, du temps et de la gravité
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* Introduction générale */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                Albert Einstein a transformé notre vision de l'univers avec deux théories révolutionnaires qui ont redéfini les concepts d'espace, de temps et de gravité.
              </p>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ces découvertes ne sont pas nées du hasard, mais d'une réflexion profonde sur les contradictions entre la mécanique classique et l'électromagnétisme, 
                puis sur la nature même de la gravité. Explorons ensemble ce voyage intellectuel extraordinaire.
              </p>
            </div>
          </div>

          {/* Section Relativité Restreinte */}
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <div className="flex items-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-300">
                Relativité Restreinte (1905)
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-200 mb-3">La naissance de la Relativité Restreinte</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                  Au début du XXe siècle, la physique semblait déjà presque complète : Newton décrivait les mouvements, Maxwell expliquait la lumière et l'électricité. Pourtant, une expérience marqua un tournant : celle de <strong className="text-white">Michelson et Morley</strong>. Elle montra que la lumière se déplace toujours à la même vitesse, peu importe le mouvement de l'observateur. Cela contredisait l'idée dominante de l'époque : l'existence d'un "éther" immobile dans lequel voyagerait la lumière.
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Einstein, jeune physicien, ne s'est pas contenté de ce paradoxe. Il aimait se lancer dans des <strong className="text-cyan-300">expériences de pensée</strong>. L'une d'elles fut décisive : <em className="text-cyan-200">« Que se passerait-il si je courais à côté d'un rayon lumineux ? »</em>
                </p>
              </div>
              
              <div className="bg-blue-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-200 mb-3">L'intuition révolutionnaire</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Selon les équations de Maxwell, courir à côté d'un rayon lumineux donnerait un champ figé, ce qui est impossible. Ce simple raisonnement lui fit comprendre que ce n'était pas la lumière qu'il fallait corriger, mais <strong className="text-white">notre conception du temps et de l'espace</strong>.
                </p>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                <p>
                  <strong className="text-white">En 1905, il formula la Relativité Restreinte à partir de deux principes :</strong>
                </p>
                <div className="bg-indigo-900/30 p-4 rounded-lg space-y-3">
                  <div className="flex items-start">
                    <span className="text-cyan-400 font-bold mr-3">1.</span>
                    <p>Les lois de la physique sont les mêmes dans tous les référentiels en mouvement rectiligne uniforme.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 font-bold mr-3">2.</span>
                    <p>La vitesse de la lumière est la même pour tous les observateurs, quel que soit leur mouvement.</p>
                  </div>
                </div>
                
                <p>
                  <strong className="text-cyan-300">De ces deux postulats, découlent des conséquences révolutionnaires :</strong>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-400/30">
                    <h4 className="font-semibold text-cyan-300 mb-2">Dilatation du temps</h4>
                    <p className="text-xs sm:text-sm text-gray-300">Une horloge en mouvement par rapport à vous battra plus lentement.</p>
                  </div>
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-400/30">
                    <h4 className="font-semibold text-blue-300 mb-2">Contraction des longueurs</h4>
                    <p className="text-xs sm:text-sm text-gray-300">Les objets en mouvement apparaissent raccourcis dans la direction de leur déplacement.</p>
                  </div>
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-400/30">
                    <h4 className="font-semibold text-purple-300 mb-2">Équivalence masse-énergie</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mb-2">La célèbre équation qui montre que masse et énergie sont deux facettes d'une même réalité :</p>
                    <div className="text-center font-mono text-lg text-purple-200">
                      E = mc²
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Section sur la formule E=mc² */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-3">La formule de la Relativité Restreinte</h3>
                <div className="space-y-4 text-sm sm:text-base text-gray-200 leading-relaxed">
                  <p>
                    La Relativité Restreinte, publiée par Einstein en 1905, a donné naissance à une formule devenue l'une des plus célèbres de toute la science :
                  </p>
                  
                  <div className="text-center bg-purple-900/40 p-4 rounded-lg border border-purple-400/30">
                    <div className="text-3xl font-mono text-purple-200 mb-2">E = mc²</div>
                    <p className="text-sm text-gray-300">
                      Elle énonce que la masse (m) et l'énergie (E) sont deux aspects d'une même réalité, reliés par la vitesse de la lumière (c), dont le carré agit comme un facteur gigantesque.
                    </p>
                  </div>
                  
                  <div className="bg-pink-900/20 p-4 rounded-lg border-l-4 border-pink-400">
                    <h4 className="text-base sm:text-lg font-semibold text-pink-200 mb-3">Que signifie cette formule ?</h4>
                    <p className="mb-3">
                      Avant Einstein, on pensait que la masse était une propriété fixe et que l'énergie se limitait au mouvement ou à la chaleur. La formule bouleverse cette vision :
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-pink-400 font-bold mr-3">•</span>
                        <p>Même un objet immobile contient une quantité d'énergie colossale simplement du fait qu'il possède une masse.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-pink-400 font-bold mr-3">•</span>
                        <p>Inversement, l'énergie peut donner naissance à de la matière.</p>
                      </div>
                    </div>
                    <p className="mt-3 text-pink-100">
                      C'est ce principe qui explique l'énergie libérée par le Soleil (qui transforme de la masse en lumière et chaleur), ou encore le fonctionnement des réacteurs et des bombes nucléaires.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-400">
                    <h4 className="text-base sm:text-lg font-semibold text-indigo-200 mb-3">Le budget d'espace-temps</h4>
                    <p className="mb-3">
                      Une autre conséquence de la Relativité Restreinte est que chacun d'entre nous dispose d'un <strong className="text-white">budget d'espace-temps</strong>. On avance toujours à la vitesse de la lumière dans l'espace-temps, mais ce mouvement peut se répartir différemment :
                    </p>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start">
                        <span className="text-indigo-400 font-bold mr-3">•</span>
                        <p>Si l'on est au repos dans l'espace, on "dépense" tout son budget à avancer dans le temps : c'est le vieillissement normal.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-indigo-400 font-bold mr-3">•</span>
                        <p>Si l'on se déplace vite dans l'espace, il reste moins de budget pour avancer dans le temps : le temps s'écoule plus lentement.</p>
                      </div>
                    </div>
                    <p className="text-indigo-100">
                      Ainsi, un voyageur qui s'approche de la vitesse de la lumière vieillit moins vite que ceux qui restent immobiles. C'est la <strong className="text-white">dilatation du temps</strong>, un effet confirmé par de nombreuses expériences.
                    </p>
                  </div>
                  
                  <div className="bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-400">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-200 mb-3">Les conséquences majeures</h4>
                    <p className="mb-3">La Relativité Restreinte a transformé notre perception de l'univers :</p>
                    <div className="space-y-2 mb-3">
                      <div className="flex items-start">
                        <span className="text-cyan-400 font-bold mr-3">•</span>
                        <p>Elle explique pourquoi la vitesse de la lumière est une limite absolue.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-cyan-400 font-bold mr-3">•</span>
                        <p>Elle révèle que masse et énergie sont interchangeables.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-cyan-400 font-bold mr-3">•</span>
                        <p>Elle montre que l'espace et le temps ne sont plus séparés mais forment une seule structure : l'espace-temps.</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 p-3 rounded-lg border border-cyan-400/30">
                      <p className="text-cyan-100 font-medium">
                        👉 <strong>En résumé :</strong> la formule <span className="font-mono text-purple-200">E = mc²</span> n'est pas seulement un symbole scientifique. Elle nous dit que la matière est de l\'énergie concentrée, et que notre expérience du temps et de l\'espace dépend de la manière dont nous dépensons notre budget d\'espace-temps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-200 mb-3">Ce que cela a changé</h3>
                <div className="space-y-3 text-sm sm:text-base text-gray-200 leading-relaxed">
                  <p>
                    La Relativité Restreinte a bouleversé notre vision du monde. Elle a détruit l'idée d'un temps universel, identique pour tous. Elle a révélé que <strong className="text-white">l'espace et le temps sont liés dans une même structure : l'espace-temps</strong>.
                  </p>
                  <p>
                    À son époque, cette découverte a ouvert la voie à des domaines entiers : la physique nucléaire, la physique des particules, la cosmologie moderne. Mais surtout, elle a transformé notre manière de penser : <em className="text-yellow-200">l'univers n'est pas fait pour s'adapter à notre intuition, c'est notre intuition qui doit évoluer pour comprendre l'univers</em>.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/relativity"
                  className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Relativité Restreinte
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Section Relativité Générale */}
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <div className="flex items-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300">
                Relativité Générale (1915)
              </h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-3">La naissance de la Relativité Générale</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                  Après avoir montré avec la Relativité Restreinte que l'espace et le temps formaient une seule entité — l'espace-temps — Einstein s'est attaqué à une question plus fondamentale encore : <strong className="text-white">la gravité</strong>.
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Newton avait proposé une loi très efficace : les corps s'attirent selon une force proportionnelle à leur masse et inversement proportionnelle au carré de leur distance. Mais Newton ne disait pas <em className="text-purple-200">pourquoi</em> cette attraction existait, et son modèle impliquait une action instantanée à distance, ce qui contredisait l'idée qu'aucune influence ne peut voyager plus vite que la lumière.
                </p>
              </div>
              
              <div className="bg-indigo-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-200 mb-3">L'intuition géniale : "La pensée la plus heureuse de ma vie"</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                  En 1907, Einstein a une intuition qu'il appellera plus tard <strong className="text-indigo-300">« la pensée la plus heureuse de ma vie »</strong>. Il imagine un homme qui tombe d'un toit. Pendant la chute, cet homme ne ressent plus son poids : il est en état d'apesanteur.
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cela révèle que <strong className="text-white">la gravité et l'accélération sont indissociables</strong>. C'est le <strong className="text-indigo-300">principe d'équivalence</strong> : un champ gravitationnel est équivalent à une accélération.
                </p>
              </div>
              
              <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-200 mb-3">La révélation : la gravité comme géométrie</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  De là, Einstein comprend que <strong className="text-white">la gravité n'est pas une force mystérieuse, mais une conséquence de la courbure de l'espace-temps</strong>. Les objets massifs comme la Terre déforment l'espace-temps autour d'eux, et les autres objets suivent les trajectoires dictées par cette courbure.
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mt-3">
                  Quand une pomme tombe, elle ne "subit" pas une force invisible : <em className="text-purple-200">elle suit simplement le chemin le plus naturel dans un espace-temps déformé</em>.
                </p>
              </div>
              
              <div className="bg-blue-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-200 mb-3">La formulation et les preuves</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                  Après huit années de recherches mathématiques, Einstein présente en 1915 les équations de la Relativité Générale. Celles-ci décrivent comment la matière et l'énergie façonnent l'espace-temps, et comment cette géométrie influence le mouvement des corps.
                </p>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-3">
                  <strong className="text-blue-300">La théorie trouve vite des confirmations spectaculaires :</strong>
                </p>
                <div className="space-y-2 text-sm sm:text-base text-gray-200">
                  <div className="flex items-start">
                    <span className="text-blue-400 font-bold mr-3">•</span>
                    <p>Elle explique l'anomalie de l'orbite de Mercure, que Newton ne parvenait pas à justifier.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 font-bold mr-3">•</span>
                    <p>Elle prédit et vérifie la déviation de la lumière par la gravité, observée en 1919 lors d'une éclipse.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed">
                <div className="bg-indigo-900/30 p-4 rounded-lg">
                  <p className="text-center font-mono text-lg sm:text-xl text-indigo-200">
                    G<sub>μν</sub> = 8πT<sub>μν</sub>
                  </p>
                  <p className="text-center text-sm text-gray-300 mt-2">
                    "La géométrie de l'espace-temps = Contenu en énergie-matière"
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-200 mb-3">Ce que cela a changé</h3>
                <div className="space-y-3 text-sm sm:text-base text-gray-200 leading-relaxed">
                  <p>
                    <strong className="text-white">La Relativité Générale a transformé notre vision de l'univers :</strong>
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-yellow-400 font-bold mr-3">•</span>
                      <p>Elle a ouvert la porte à la cosmologie moderne : l'expansion de l'univers, les trous noirs, les ondes gravitationnelles.</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-yellow-400 font-bold mr-3">•</span>
                      <p>Elle a montré que l'espace et le temps ne sont pas un simple décor, mais des acteurs dynamiques de la réalité.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <Link
                  to="/relativite-generale"
                  className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Relativité Générale
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};