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
  const [command, setCommand] = useState('univers run start');
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
      './univers.run',
      'univers run start'
    ];

    if (validCommands.includes(trimmedCommand)) {
      setError('');
      setIsLoading(true);
      
      // Animation de chargement
      setTimeout(() => {
        navigate('/code-univers');
      }, 1500);
    } else {
      setError(`Commande "${command}" inconnue`);
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
              Dans le langage des machines, la commande <span className="text-cyan-300 font-semibold">run start</span> sert à lancer un programme.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-200 leading-relaxed font-light"> Lancez la commande
              <span className="text-yellow-300 font-semibold"> univers run start</span> 
            </p>
          </div>
        </div>

        {/* Console interactive */}
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-cyan-400/50 shadow-2xl max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <Terminal className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-cyan-300 font-mono text-lg">Console Quantique</span>
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
                {isLoading && (
                  <div className="flex items-center ml-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-1"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping mr-1 animation-delay-300"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping animation-delay-500"></div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Bouton Entrée */}
            {!isLoading && (
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-800 text-white rounded-xl px-8 py-3 shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 border-2 border-cyan-400/50 hover:border-cyan-300/70 disabled:border-gray-500/30 overflow-hidden"
                >
                  {/* Effet de lueur */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-xl blur-xl animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Particules flottantes */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-60 group-hover:opacity-90"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${1 + Math.random() * 1}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Effet de scan */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-xl"></div>
                  
                  {/* Contenu du bouton */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-lg font-bold group-hover:text-cyan-100 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      Entrée
                    </span>
                  </div>
                  
                  {/* Bordure lumineuse animée */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-xl opacity-30 blur-lg animate-pulse group-hover:opacity-60 group-hover:blur-xl transition-all duration-500"></div>
                </button>
              </div>
            )}
            
            {error && (
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-800 text-white rounded-xl px-8 py-3 shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 border-2 border-cyan-400/50 hover:border-cyan-300/70 disabled:border-gray-500/30 overflow-hidden"
                >
                  {/* Effet de lueur */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-xl blur-xl animate-pulse group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Particules flottantes */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-60 group-hover:opacity-90"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${1 + Math.random() * 1}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Effet de scan */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-scan rounded-xl"></div>
                  
                  {/* Contenu du bouton */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-lg font-bold group-hover:text-cyan-100 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      Entrée
                    </span>
                  </div>
                  
                  {/* Bordure lumineuse animée */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 rounded-xl opacity-30 blur-lg animate-pulse group-hover:opacity-60 group-hover:blur-xl transition-all duration-500"></div>
                </button>
              </div>
            )}
            
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
      </div>

      {/* Effet de scan global */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 animate-scan pointer-events-none"></div>
    </div>
  );
};