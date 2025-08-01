import React from 'react';

interface RiceGrainProps {
  x: number;
  y: number;
  rotation: number;
  size: number;
  opacity: number;
  variant?: number;
}

export const RiceGrain: React.FC<RiceGrainProps> = ({ x, y, rotation, size, opacity, variant = 0 }) => {
  // Create natural variations in rice grain appearance
  const grainVariants = [
    {
      gradient: 'linear-gradient(135deg, #faf8f3 0%, #f0ebe0 20%, #e8e0d1 40%, #ddd4c2 60%, #d0c5b0 80%, #c4b79e 100%)',
      curve: '42% 58% 48% 52%',
      lengthRatio: 2.8,
    },
    {
      gradient: 'linear-gradient(140deg, #f9f7f2 0%, #ede6d8 25%, #e5dcc9 45%, #d8cdb8 65%, #ccc0a7 85%, #bfb396 100%)',
      curve: '45% 55% 50% 50%',
      lengthRatio: 3.2,
    },
    {
      gradient: 'linear-gradient(130deg, #fbf9f4 0%, #f2ece2 22%, #eae2d4 44%, #ddd2c0 66%, #d1c4ac 88%, #c5b898 100%)',
      curve: '40% 60% 46% 54%',
      lengthRatio: 2.6,
    },
  ];
  
  const currentVariant = grainVariants[variant % grainVariants.length];
  
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg)`,
        opacity: opacity,
      }}
    >
      <div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size * currentVariant.lengthRatio}px`,
        }}
      >
        {/* Main rice grain body */}
        <div
          className="absolute inset-0"
          style={{
            background: currentVariant.gradient,
            boxShadow: `
              inset 1px 1px 3px rgba(255, 255, 255, 0.9),
              inset -1px -1px 3px rgba(0, 0, 0, 0.15),
              0 1px 3px rgba(0, 0, 0, 0.2),
              0 2px 6px rgba(0, 0, 0, 0.1)
            `,
            borderRadius: currentVariant.curve,
          }}
        />
        
        {/* Primary highlight */}
        <div
          className="absolute top-2 left-1/2 transform -translate-x-1/2"
          style={{
            width: '25%',
            height: '35%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 80%)',
            borderRadius: '60% 40% 70% 30%',
            filter: 'blur(0.5px)',
          }}
        />
        
        {/* Secondary highlight */}
        <div
          className="absolute top-1/4 right-1"
          style={{
            width: '15%',
            height: '20%',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            filter: 'blur(0.3px)',
          }}
        />
        
        {/* Natural groove/indentation */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '70%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.15) 20%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.15) 80%, transparent 100%)',
            borderRadius: '1px',
          }}
        />
        
        {/* Subtle texture lines */}
        <div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2"
          style={{
            width: '50%',
            height: '0.5px',
            background: 'rgba(0, 0, 0, 0.08)',
            borderRadius: '1px',
          }}
        />
        <div
          className="absolute top-2/3 left-1/2 transform -translate-x-1/2"
          style={{
            width: '45%',
            height: '0.5px',
            background: 'rgba(0, 0, 0, 0.06)',
            borderRadius: '1px',
          }}
        />
      </div>
    </div>
  );
};