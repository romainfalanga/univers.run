import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const SpatialFreedomPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-indigo-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-restreinte-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Relativité Restreinte des Échelles
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] mb-3 sm:mb-4 px-2">
            La Liberté Spatiale
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-purple-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Notre seule liberté dans le budget universel
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Le Seul Contrôle que Nous Avons</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">Nous n'avons pas la main sur ce budget total.</strong> La seule liberté qui nous est laissée est spatiale : en changeant notre vitesse, nous déplaçons le curseur temps, et avec lui, nous modifions automatiquement le partage entre le temps et l'échelle.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est là toute la beauté et la contrainte de ce modèle : nous sommes libres de nous déplacer dans l'espace, mais cette liberté a un prix. Plus nous allons vite, plus nous plongeons dans l'infiniment petit. Plus nous restons immobiles, plus nous avançons dans le temps.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Le Compromis Universel</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Chaque choix de mouvement est un compromis. Veux-tu avancer rapidement dans l'espace ? Tu devras sacrifier ton temps propre et accepter une descente d'échelle accrue. Préfères-tu maximiser ton temps propre ? Tu devras rester relativement immobile.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/20 p-4 sm:p-6 rounded-lg border border-blue-400/30">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">Choisir le Mouvement</h3>
                  <div className="space-y-2 text-sm sm:text-base text-gray-300">
                    <p><strong className="text-white">Gain :</strong> Déplacement spatial rapide</p>
                    <p><strong className="text-white">Prix :</strong> Temps propre ralenti + Descente d'échelle accrue</p>
                    <p className="text-blue-200 mt-2">Utile pour voyager dans l'espace</p>
                  </div>
                </div>

                <div className="bg-green-900/20 p-4 sm:p-6 rounded-lg border border-green-400/30">
                  <h3 className="text-lg font-semibold text-green-300 mb-3">Choisir l'Immobilité</h3>
                  <div className="space-y-2 text-sm sm:text-base text-gray-300">
                    <p><strong className="text-white">Gain :</strong> Temps propre maximal</p>
                    <p><strong className="text-white">Prix :</strong> Pas de déplacement spatial + Descente d'échelle minimale</p>
                    <p className="text-green-200 mt-2">Utile pour maximiser son expérience temporelle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-teal-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">Le Moteur Immuable</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed">
                  <strong className="text-white">La vitesse ne change jamais le moteur, elle change uniquement l'angle de la pente.</strong> Que vous soyez immobile ou que vous frôliez la vitesse de la lumière, vous descendez toujours le tapis roulant universel à exactement 299 792 458 mètres par seconde. Seule l'inclinaison varie.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                C'est une contrainte absolue de l'univers. Le moteur cosmique bat au même rythme pour tous, sans exception. Notre liberté spatiale ne nous permet que de choisir l'angle de notre descente, pas sa vitesse.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-pink-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-4 sm:mb-6">Une Liberté Limitée mais Précieuse</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Cette liberté spatiale, bien que limitée, est fondamentale. Elle nous permet d'explorer l'univers, de voyager, de nous déplacer. Sans elle, nous serions figés dans une position spatiale unique, prisonniers d'un seul point de l'espace.
              </p>

              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Le Paradoxe de la Liberté</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Plus nous utilisons notre liberté spatiale (en accélérant), plus nous perdons de liberté temporelle (dilatation du temps) et plus nous nous enfonçons dans l'échelle. <strong className="text-white">La liberté dans une dimension se paie par une contrainte dans les autres</strong>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">L'Équilibre Cosmique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  L'univers nous offre un budget fixe et une seule liberté : comment le répartir. C'est un système parfaitement équilibré où rien ne se perd, tout se transforme. <strong className="text-white">Chaque mouvement spatial est une négociation entre le temps et l'échelle</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/relativite-restreinte-echelles/vitesse-extreme"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <div className="w-32"></div>
          </div>

        </div>
      </div>
    </div>
  );
};
