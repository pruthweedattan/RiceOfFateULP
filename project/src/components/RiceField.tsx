import React, { useMemo } from 'react';
import { RiceGrain } from './RiceGrain';

interface RiceFieldProps {
  density?: number;
}

export const RiceField: React.FC<RiceFieldProps> = ({ density = 1200 }) => {
  const riceGrains = useMemo(() => {
    const grains = [];
    
    for (let i = 0; i < density; i++) {
      grains.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        size: 2.5 + Math.random() * 2.5, // 2.5-5px for more natural variation
        opacity: 0.8 + Math.random() * 0.2, // 0.8-1.0 for better visibility
        variant: Math.floor(Math.random() * 3), // 0, 1, or 2 for grain variants
      });
    }
    
    return grains;
  }, [density]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {riceGrains.map((grain) => (
        <RiceGrain
          key={grain.id}
          x={grain.x}
          y={grain.y}
          rotation={grain.rotation}
          size={grain.size}
          opacity={grain.opacity}
          variant={grain.variant}
        />
      ))}
    </div>
  );
};