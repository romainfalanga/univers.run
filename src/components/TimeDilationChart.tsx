import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { calculateTimeDilationAtDistance, calculateSchwarzschildRadius } from '../utils/physics';

interface TimeDilationChartProps {
  mass: number;
  radius: number;
}

export const TimeDilationChart: React.FC<TimeDilationChartProps> = ({ mass, radius }) => {
  const schwarzschildRadius = calculateSchwarzschildRadius(mass);
  const isBlackHole = radius <= schwarzschildRadius;

  const data = React.useMemo(() => {
    const points = [];
    const maxDistance = radius * 5;
    const numPoints = 200;

    for (let i = 0; i <= numPoints; i++) {
      const distance = (i / numPoints) * maxDistance;

      if (distance === 0) {
        continue;
      }

      let dilationFactor = 0;

      if (distance <= radius && !isBlackHole) {
        dilationFactor = calculateTimeDilationAtDistance(mass, radius, distance);
      } else if (distance > radius) {
        dilationFactor = calculateTimeDilationAtDistance(mass, distance, distance);
      }

      if (dilationFactor > 0 && isFinite(dilationFactor)) {
        points.push({
          distance: distance / radius,
          dilation: dilationFactor,
        });
      }
    }

    return points;
  }, [mass, radius, isBlackHole]);

  if (isBlackHole) {
    return (
      <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-2xl border border-white/20">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Facteur de Dilatation vs Distance
        </h3>
        <div className="h-80 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p className="text-sm">Graphique non disponible</p>
            <p className="text-xs mt-2">
              L'astre est un trou noir. Les calculs de dilatation temporelle à l'intérieur de
              l'horizon ne sont pas valides avec cette métrique.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-2xl border border-white/20">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Facteur de Dilatation vs Distance
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="distance"
              label={{ value: 'Distance (en rayons de l\'astre)', position: 'insideBottom', offset: -5, style: { fontSize: '12px' } }}
              stroke="#6b7280"
              tick={{ fontSize: 11 }}
            />
            <YAxis
              label={{ value: 'Facteur de dilatation (dτ/dt)', angle: -90, position: 'insideLeft', style: { fontSize: '12px' } }}
              stroke="#6b7280"
              tick={{ fontSize: 11 }}
              domain={[0, 'auto']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value: number) => value.toFixed(6)}
              labelFormatter={(label: number) => `Distance: ${label.toFixed(2)}R`}
            />
            <Legend
              wrapperStyle={{ fontSize: '12px' }}
              iconType="line"
            />
            <ReferenceLine
              x={1}
              stroke="#3b82f6"
              strokeDasharray="5 5"
              label={{ value: 'Surface', position: 'top', fontSize: 10, fill: '#3b82f6' }}
            />
            <Line
              type="monotone"
              dataKey="dilation"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={false}
              name="dτ/dt"
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-xs text-gray-600 space-y-1">
        <p>
          <strong>Zone intérieure (r ≤ R):</strong> Solution intérieure de Schwarzschild pour
          une sphère de densité uniforme
        </p>
        <p>
          <strong>Zone extérieure (r &gt; R):</strong> Métrique de Schwarzschild extérieure
        </p>
        <p className="text-purple-600">
          Le facteur tend vers 1 quand la distance augmente (temps s'écoule normalement loin de l'astre)
        </p>
      </div>
    </div>
  );
};
