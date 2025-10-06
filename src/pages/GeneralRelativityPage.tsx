import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe } from 'lucide-react';
import { GravitationalTimeDilationExperiment } from '../components/GravitationalTimeDilationExperiment';

export const GeneralRelativityPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-indigo-900/20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Link
              to="/relativite-classique"
              className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Relativité Classique
            </Link>
          </div>

          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mr-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-indigo-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)]">
              Relativité Générale
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200 max-w-4xl mx-auto px-4 leading-relaxed">
            Explorez la dilatation du temps gravitationnelle avec seulement deux paramètres: γ et Rs/R
          </p>
        </header>

        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4">
              Introduction : La Gravité comme Géométrie
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-200 leading-relaxed">
              <p>
                En 1915, Einstein publie la <strong className="text-white">Relativité Générale</strong>,
                une théorie révolutionnaire qui explique la gravité non pas comme une force mystérieuse,
                mais comme une conséquence de la <strong className="text-purple-300">courbure de l'espace-temps</strong>.
              </p>

              <p>
                Selon cette théorie, la présence de masse et d'énergie déforme la géométrie de l'espace-temps
                autour d'elle. Les objets suivent alors des trajectoires naturelles (géodésiques) dans cet
                espace-temps courbé, ce qui nous apparaît comme l'effet de la gravité.
              </p>

              <div className="bg-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-purple-100">
                  <strong>Les équations d'Einstein</strong> relient directement la géométrie de l'espace-temps
                  (décrite par le tenseur métrique) au contenu en énergie-matière (décrit par le tenseur
                  énergie-impulsion) : <span className="font-mono">G<sub>μν</sub> = 8πT<sub>μν</sub></span>
                </p>
              </div>

              <p>
                Une des conséquences les plus fascinantes est la <strong className="text-white">dilatation
                temporelle gravitationnelle</strong> : les horloges battent différemment selon leur position
                dans un champ gravitationnel. Plus on est proche d'une masse importante, plus le temps
                s'écoule lentement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4">
              Symétrie avec la Relativité Restreinte
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-200 leading-relaxed">
              <p>
                La Relativité Générale et la Relativité Restreinte partagent une <strong className="text-white">structure mathématique identique</strong> pour la dilatation du temps!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-cyan-200 mb-2">Relativité Restreinte</h3>
                  <div className="text-center font-mono text-cyan-200 my-3 text-lg">
                    γ = 1/√(1 - v²/c²)
                  </div>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong className="text-cyan-300">v/c</strong> est la vitesse normalisée
                  </p>
                  <p className="text-xs text-gray-400">
                    La vitesse dans l'espace détermine la dilatation du temps
                  </p>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Relativité Générale</h3>
                  <div className="text-center font-mono text-purple-200 my-3 text-lg">
                    γ = 1/√(1 - Rs/R)
                  </div>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong className="text-purple-300">Rs/R</strong> est la compacité gravitationnelle
                  </p>
                  <p className="text-xs text-gray-400">
                    La compacité (courbure) détermine la dilatation du temps
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-4 rounded-lg border-l-4 border-gradient-to-r from-cyan-400 to-purple-400">
                <p className="text-white text-center font-semibold">
                  Deux curseurs suffisent pour explorer chaque théorie: <span className="text-cyan-300">γ</span> (accélération du temps) et soit <span className="text-cyan-300">v/c</span> soit <span className="text-purple-300">Rs/R</span> selon la théorie!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4">
              Expérience Interactive : Dilatation Temporelle Gravitationnelle
            </h2>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
              Ajustez l'accélération du temps (γ) et la compacité gravitationnelle (Rs/R) pour observer
              comment le temps s'écoule différemment selon la position dans le champ gravitationnel.
              La masse et le rayon de l'astre correspondant sont calculés automatiquement.
            </p>

            <GravitationalTimeDilationExperiment />
          </div>
        </div>
      </div>
    </div>
  );
};