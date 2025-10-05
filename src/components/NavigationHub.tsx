import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface NavigationCard {
  title: string;
  description: string;
  path: string;
  colorFrom: string;
  colorTo: string;
  borderColor: string;
}

interface NavigationHubProps {
  cards: NavigationCard[];
}

export const NavigationHub: React.FC<NavigationHubProps> = ({ cards }) => {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {cards.map((card, index) => {
        return (
          <Link
            key={index}
            to={card.path}
            className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:bg-white/15"
          >
            <div className={`bg-gradient-to-r ${card.colorFrom} ${card.colorTo} p-4 rounded-lg border-l-4 ${card.borderColor} mb-4`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end text-white font-semibold">
              <span className="mr-2">Explorer</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};
