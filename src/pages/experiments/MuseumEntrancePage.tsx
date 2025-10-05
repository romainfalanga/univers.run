import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const MuseumEntrancePage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-orange-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(234,179,8,0.1)_1px,transparent_1px),linear-gradient(rgba(234,179,8,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-orange-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/experiences-pensee-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Le Musée des Dimensions
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(234,179,8,0.8)] mb-3 sm:mb-4 px-2">
            L'Entrée du Musée
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-yellow-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Franchir le seuil d'une nouvelle perception de la réalité
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6">Bienvenue au Musée des Dimensions</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="text-base sm:text-lg text-yellow-100 leading-relaxed">
                  Nous allons faire une expérience de pensée pour mieux visualiser la cinquième dimension. <strong className="text-white">Imagine que tu es dans le musée des dimensions</strong>. C'est un lieu extraordinaire où chaque pièce révèle une facette cachée de la réalité.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                La cinquième dimension est difficile à percevoir dans notre quotidien. Nous vivons dans un monde où trois dimensions d'espace et une dimension de temps semblent suffire à tout décrire. Mais ce musée va te révéler qu'il existe une dimension supplémentaire, invisible et pourtant omniprésente.
              </p>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce n'est pas un musée ordinaire. Ses pièces ne contiennent pas d'objets figés derrière des vitrines, mais des <strong className="text-yellow-300">expériences vivantes qui transforment ta perception</strong>. Chaque salle est un couloir qui te mène plus profondément dans la compréhension de l'univers.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-amber-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-orange-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">L'Architecture du Musée</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <p className="text-base sm:text-lg text-orange-100 leading-relaxed">
                  <strong className="text-white">Le musée est fait de plusieurs pièces qui ont des formes de couloir.</strong> Ces couloirs ne sont pas de simples passages : ils sont des instruments de révélation. En les parcourant, tu vas littéralement traverser les dimensions.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Chaque couloir est équipé d'un tapis roulant qui t'emporte doucement vers l'avant. Ce mouvement n'est pas anodin : il représente ton déplacement à travers le temps lui-même. Pendant que tu avances, le musée te montre ce qui se passe réellement dans l'univers, instant après instant.
              </p>

              <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-lg font-semibold text-amber-200 mb-3">Une Progression Pédagogique</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Le musée est conçu pour une progression pédagogique. <strong className="text-white">La première pièce te révélera la différence entre un univers en quatre dimensions et un univers en cinq dimensions.</strong> Tu verras de tes propres yeux ce que signifie vraiment cette cinquième dimension dont nous parlons depuis le début.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-red-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4 sm:mb-6">Prépare-toi à l'Expérience</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Avant d'entrer dans la première pièce, prends un moment pour te préparer mentalement. Ce que tu vas voir va transformer ta compréhension de la réalité. Tu ne regarderas plus jamais l'univers de la même manière.
              </p>

              <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <p className="text-base sm:text-lg text-pink-100 leading-relaxed font-semibold">
                  Tu es sur le point de <strong className="text-white">voir l'invisible</strong>, de percevoir ce qui échappe habituellement à nos sens. Tu vas comprendre pourquoi l'univers semble stable alors qu'en réalité, il est en mouvement constant vers l'infiniment petit. Tu vas découvrir la dimension cachée qui orchestre cette descente cosmique.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                La porte de la première pièce est devant toi. Au-delà de ce seuil, une révélation t'attend. Es-tu prêt à franchir cette porte et à découvrir la vérité sur la cinquième dimension ?
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Le Seuil de la Découverte</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  <strong className="text-white">Chaque visite de musée transforme celui qui la fait.</strong> Mais cette visite-là est particulière : elle ne se contente pas d'enrichir tes connaissances. Elle change ta perception même de ce qu'est la réalité.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Tu entres maintenant dans la première pièce du musée des dimensions. Cette visite va te révéler ce qui se cache derrière l'apparente stabilité de notre réalité. Prépare-toi à voir l'univers tel qu'il est vraiment : un flux perpétuel à travers cinq dimensions, où chaque instant est une nouvelle tranche de réalité qui se contracte imperceptiblement vers l'infiniment petit.
              </p>

              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed text-center font-semibold">
                  La porte s'ouvre. Entre maintenant dans la première pièce.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 mb-8">
          <div className="flex justify-end items-center">
            <Link
              to="/experiences-pensee-echelles/premiere-piece"
              className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              Entrer dans la Première Pièce
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
