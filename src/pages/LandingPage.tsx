import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Play, Zap } from 'lucide-react';

// Composant pour les particules flottantes
const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.6 + 0.2
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y <= -5 ? 105 : particle.y - particle.speed,
        opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.5
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 3}px rgba(6, 182, 212, 0.8)`
          }}
        />
      ))}
    </div>
  );
};

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [command, setCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Effet de curseur clignotant
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Focus automatique sur l'input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedCommand = command.trim().toLowerCase();
    
    // Commandes acceptées
    const validCommands = [
      'univers.run',
      'run univers',
      'univers.run()',
      'run',
      'start',
      'launch',
      'execute univers',
      'npm run univers',
      './univers.run'
    ];

    if (validCommands.includes(trimmedCommand)) {
      setError('');
      setIsLoading(true);
      
      // Animation de chargement
      setTimeout(() => {
        navigate('/code-univers');
      }, 1500);
    } else {
      setError(`Commande "${command}" inconnue"`);
      setCommand('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
    setError('');
    setIsTyping(true);
    
    // Arrêter l'animation de frappe après un délai
    setTimeout(() => setIsTyping(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden flex items-center justify-center">
      {/* Particules flottantes */}
      <FloatingParticles />
      
      {/* Effet de grille futuriste */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      
      {/* Effet de lueur cosmique */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        
        {/* Titre principal */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_50px_rgba(6,182,212,1)] mb-6 leading-tight tracking-wider">
            Univers.run
          </h1>
          
          {/* Phrase explicative poétique */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-light mb-4">
              Dans le langage des machines, la commande <span className="text-cyan-300 font-semibold">run</span> sert à exécuter un programme.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-200 leading-relaxed font-light"> Tappez la commande
              <span className="text-yellow-300 font-semibold"> npm run univers</span> 
            </p>
          </div>
        </div>

        {/* Console interactive */}
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-cyan-400/50 shadow-2xl max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <Terminal className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-cyan-300 font-mono text-lg">Console Universelle</span>
          </div>
          
          <form onSubmit={handleCommandSubmit} className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4 font-mono">
              <div className="flex items-center text-green-400">
                <span className="text-cyan-400 mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={command}
                  onChange={handleInputChange}
                  className="bg-transparent outline-none flex-1 text-green-400 placeholder-gray-500"
                  placeholder="Tapez votre commande"
                  disabled={isLoading}
                />
                {showCursor && !isLoading && (
                  <span className="text-green-400 animate-pulse">|</span>
                )}
                {isLoading && (
                  <div className="flex items-center ml-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-1"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-1 animation-delay-300"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-500"></div>
                  </div>
                )}
              </div>
            </div>
            
            {error && (
              <div className="bg-red-900/50 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-300 font-mono text-sm">{error}</p>
              </div>
            )}
            
            {isLoading && (
              <div className="bg-green-900/50 border border-green-500/50 rounded-lg p-3">
                <p className="text-green-300 font-mono text-sm flex items-center">
                  <Zap className="w-4 h-4 mr-2 animate-pulse" />
                  Initialisation de l'univers...
                </p>
              </div>
            )}
          </form>
          
          {/* Suggestions de commandes */}
          
        </div>

        {/* Instructions subtiles */}
        <div className="mt-8 text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            <Play className="w-4 h-4 mr-2" />
            Appuyez sur Entrée pour exécuter votre commande
          </p>
        </div>
      </div>

      {/* Effet de scan global */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 animate-scan pointer-events-none"></div>
    </div>
  );
};