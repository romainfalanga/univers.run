import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const SpaceTimeScaleFabricPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-teal-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        {/* Bouton Retour */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour
          </Link>
        </div>

        {/* En-tête */}
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-3 sm:mb-4 px-2">
            Le Tissu d'Espace-Temps-d'Échelle
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            La superposition de deux tissus en une structure unifiée
          </p>
        </header>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
          
          {/* La superposition des tissus */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 sm:mb-6">La Superposition des Tissus</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
                  L'espace-temps et l'échelle-temps ne sont pas deux mondes séparés : <strong className="text-white">ils sont superposés, liés par le même pivot : le temps</strong>.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Einstein nous a révélé l'espace-temps, cette toile où l'espace et le temps s'entremêlent. Mais il manquait une dimension : l'échelle. Dans mon modèle, l'échelle et le temps forment un second tissu, l'échelle-temps, qui se superpose au premier.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">Tissu Espace-Temps</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Le tissu d'Einstein : l'espace et le temps entrelacés, déformés par la masse et l'énergie. C'est ce qui crée la gravité telle que nous la connaissons.
                  </p>
                </div>
                
                <div className="bg-teal-900/20 p-4 sm:p-6 rounded-lg border border-teal-400/30">
                  <h3 className="text-lg font-semibold text-teal-300 mb-3">Tissu Échelle-Temps</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Le nouveau tissu : l'échelle et le temps entrelacés. C'est ce qui régit notre descente constante vers l'infiniment petit à la vitesse de la lumière.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Le moteur universel */}
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">Le Moteur Universel</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-semibold">
                  Ensemble, ils forment un seul tissu : <strong className="text-white">le tissu d'espace-temps-d'échelle</strong>. Ce tissu est entraîné par un moteur universel : la vitesse de la lumière.
                </p>
              </div>
              
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce moteur ne varie jamais. Il bat comme un métronome cosmique, entraînant tout l'univers dans sa cadence. Chaque particule, chaque atome, chaque être vivant descend ce tapis roulant universel à exactement la même vitesse : <strong className="text-cyan-300">299 792 458 mètres par seconde</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">L'Inclinaison Variable</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  <strong className="text-white">Tout descend toujours à ce rythme, sans exception.</strong> La seule différence, c'est l'inclinaison du tapis roulant : plus ou moins raide selon la vitesse, la masse et l'énergie.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30 text-center">
                  <h4 className="font-semibold text-green-300 mb-2">Tapis Roulant Plat</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Objet au repos, faible masse</p>
                  <p className="text-xs text-green-200 mt-2">Avancement surtout dans le temps</p>
                </div>
                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-400/30 text-center">
                  <h4 className="font-semibold text-yellow-300 mb-2">Tapis Roulant Incliné</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Vitesse modérée, masse importante</p>
                  <p className="text-xs text-yellow-200 mt-2">Partage temps-échelle équilibré</p>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30 text-center">
                  <h4 className="font-semibold text-red-300 mb-2">Tapis Roulant Vertical</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Vitesse extrême, masse énorme</p>
                  <p className="text-xs text-red-200 mt-2">Plongée vertigineuse dans l'échelle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Le pivot temporel */}
          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Le Pivot Temporel</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le temps joue un rôle unique dans ce modèle : <strong className="text-indigo-300">il est le pivot qui relie les deux tissus</strong>. Quand votre vitesse change, votre budget temps-espace se réorganise, et automatiquement, votre budget temps-échelle s'ajuste en miroir.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">La Connexion Invisible</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette connexion explique pourquoi l'univers semble "s'étendre" : ce n'est pas l'espace qui grandit, mais l'échelle qui se contracte. Chaque objet, selon sa masse et sa vitesse, descend son tapis roulant avec une inclinaison différente, créant l'illusion d'un éloignement mutuel.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Une Structure Unifiée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le tissu d'espace-temps-d'échelle n'est pas trois tissus séparés, mais <strong className="text-white">une seule structure à cinq dimensions</strong> : trois d'espace, une de temps, et une d'échelle. Cette structure unique gouverne tous les phénomènes de l'univers, de la gravité à l'expansion cosmique.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};