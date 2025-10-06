import React from 'react';

interface CelestialBodyVisualizationProps {
  radius: number;
  schwarzschildRadius: number;
  isBlackHole: boolean;
}

export const CelestialBodyVisualization: React.FC<CelestialBodyVisualizationProps> = ({
  radius,
  schwarzschildRadius,
  isBlackHole,
}) => {
  const svgSize = 400;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const maxDisplayRadius = 150;

  const scale = maxDisplayRadius / Math.max(radius, schwarzschildRadius * 2);
  const displayRadius = radius * scale;
  const displaySchwarzschildRadius = schwarzschildRadius * scale;

  const ratio = radius / schwarzschildRadius;
  let bodyColor = '#3b82f6';
  if (isBlackHole) {
    bodyColor = '#1f2937';
  } else if (ratio < 2) {
    bodyColor = '#dc2626';
  } else if (ratio < 5) {
    bodyColor = '#f59e0b';
  } else if (ratio < 10) {
    bodyColor = '#eab308';
  } else {
    bodyColor = '#3b82f6';
  }

  return (
    <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-2xl border border-white/20">
      <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
        Visualisation de l'Astre
      </h3>

      <svg
        width="100%"
        height="400"
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="mx-auto"
      >
        <defs>
          <radialGradient id="spaceGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
          </radialGradient>

          <radialGradient id="bodyGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={bodyColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={bodyColor} stopOpacity="0.6" />
          </radialGradient>

          <radialGradient id="eventHorizonGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="100%" stopColor="#1f2937" stopOpacity="0.9" />
          </radialGradient>
        </defs>

        <rect width={svgSize} height={svgSize} fill="url(#spaceGradient)" />

        {Array.from({ length: 8 }).map((_, i) => {
          const gridRadius = 30 + i * 20;
          return (
            <circle
              key={`grid-${i}`}
              cx={centerX}
              cy={centerY}
              r={gridRadius}
              fill="none"
              stroke="#6366f1"
              strokeWidth="0.5"
              strokeOpacity="0.2"
              strokeDasharray="2,2"
            />
          );
        })}

        {!isBlackHole && displaySchwarzschildRadius > 2 && (
          <>
            <circle
              cx={centerX}
              cy={centerY}
              r={displaySchwarzschildRadius}
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeDasharray="4,4"
              opacity="0.6"
            />
            <text
              x={centerX + displaySchwarzschildRadius + 10}
              y={centerY}
              fill="#dc2626"
              fontSize="10"
              fontWeight="bold"
            >
              Rs
            </text>
          </>
        )}

        <circle
          cx={centerX}
          cy={centerY}
          r={displayRadius}
          fill={isBlackHole ? "url(#eventHorizonGradient)" : "url(#bodyGradient)"}
          stroke={isBlackHole ? "#dc2626" : "#1e40af"}
          strokeWidth="2"
        />

        <circle
          cx={centerX}
          cy={centerY}
          r={5}
          fill="#8b5cf6"
          opacity="0.8"
        />
        <text
          x={centerX}
          y={centerY + 20}
          fill="#8b5cf6"
          fontSize="10"
          fontWeight="bold"
          textAnchor="middle"
        >
          Centre
        </text>

        <circle
          cx={centerX + displayRadius * Math.cos(Math.PI / 4)}
          cy={centerY - displayRadius * Math.sin(Math.PI / 4)}
          r={5}
          fill="#3b82f6"
          opacity="0.8"
        />
        <text
          x={centerX + displayRadius * Math.cos(Math.PI / 4)}
          y={centerY - displayRadius * Math.sin(Math.PI / 4) - 10}
          fill="#3b82f6"
          fontSize="10"
          fontWeight="bold"
          textAnchor="middle"
        >
          Surface
        </text>

        <circle
          cx={centerX + maxDisplayRadius + 30}
          cy={centerY - maxDisplayRadius - 30}
          r={5}
          fill="#10b981"
          opacity="0.8"
        />
        <text
          x={centerX + maxDisplayRadius + 30}
          y={centerY - maxDisplayRadius - 40}
          fill="#10b981"
          fontSize="10"
          fontWeight="bold"
          textAnchor="middle"
        >
          ∞
        </text>

        {isBlackHole && (
          <>
            <circle
              cx={centerX}
              cy={centerY}
              r={displayRadius + 10}
              fill="none"
              stroke="#dc2626"
              strokeWidth="3"
              opacity="0.8"
            />
            <text
              x={centerX}
              y={svgSize - 20}
              fill="#dc2626"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              HORIZON DES ÉVÉNEMENTS
            </text>
          </>
        )}
      </svg>

      <div className="mt-4 space-y-2 text-xs text-gray-600">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
          <span>Observateur au centre</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
          <span>Observateur à la surface</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
          <span>Observateur lointain (référence)</span>
        </div>
        {!isBlackHole && displaySchwarzschildRadius > 2 && (
          <div className="flex items-center">
            <div className="w-8 h-0.5 border-t-2 border-dashed border-red-600 mr-2"></div>
            <span>Rayon de Schwarzschild (Rs)</span>
          </div>
        )}
      </div>
    </div>
  );
};
