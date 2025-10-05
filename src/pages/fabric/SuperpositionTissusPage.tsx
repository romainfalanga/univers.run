import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const SuperpositionTissusPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-teal-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/tissu-espace-temps-echelle"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Le Tissu d'Espace-Temps-d'Échelle
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-3 sm:mb-4 px-2">
            La Superposition des Tissus
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Deux tissus superposés reliés par le pivot temporel
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
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

              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Le Pivot Temporel</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le temps est l'axe commun de ces deux tissus. <strong className="text-white">Il relie l'espace et l'échelle en une structure unique</strong>. Chaque modification du budget espace-temps se répercute instantanément sur le budget échelle-temps, et inversement.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Une Structure Unifiée</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Ces deux tissus ne flottent pas séparément dans le vide. Ils sont <strong className="text-white">superposés et interconnectés</strong>, formant une seule structure à cinq dimensions : trois d'espace, une de temps, et une d'échelle. Cette géométrie unique gouverne tous les phénomènes de l'univers.
                </p>
              </div>

              <div className="bg-gradient-to-r from-teal-900/40 to-emerald-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-lg font-semibold text-teal-200 mb-3">La Connexion Invisible</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette connexion explique pourquoi l'univers semble "s'étendre" : ce n'est pas l'espace qui grandit, mais l'échelle qui se contracte. <strong className="text-white">Chaque objet, selon sa masse et sa vitesse, descend son tapis roulant avec une inclinaison différente</strong>, créant l'illusion d'un éloignement mutuel.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation séquentielle */}
        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-8">
          <div className="flex justify-end">
            <Link
              to="/tissu-espace-temps-echelle/tapis-roulant"
              className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              Suivant : Le Tapis Roulant
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
