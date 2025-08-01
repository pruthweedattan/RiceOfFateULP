import React, { useState, useCallback } from 'react';
import { RiceField } from './RiceField';
import { Modal } from './Modal';

export const ZoomContainer: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState('50% 50%');
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxZoom = 50; // Maximum zoom level before showing modal

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (isAnimating || showModal) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setTransformOrigin(`${x}% ${y}%`);
    setIsAnimating(true);

    const newZoomLevel = Math.min(zoomLevel * 2, maxZoom);
    setZoomLevel(newZoomLevel);

    // Show modal when reaching max zoom
    if (newZoomLevel >= maxZoom) {
      setTimeout(() => {
        setShowModal(true);
        setIsAnimating(false);
      }, 1000); // Wait for zoom animation to complete
    } else {
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }
  }, [zoomLevel, isAnimating, showModal]);

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setTransformOrigin('50% 50%');
    setShowModal(false);
    setIsAnimating(false);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-amber-50">
      <div
        className={`absolute inset-0 cursor-pointer transition-transform duration-1000 ease-out ${
          isAnimating ? 'pointer-events-none' : ''
        }`}
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: transformOrigin,
        }}
        onClick={handleClick}
      >
        <RiceField density={1500} />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, rgba(160, 82, 45, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 40% 90%, rgba(210, 180, 140, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 70px 70px, 90px 90px',
          }}
        />
      </div>

      {/* Click indicator when not at max zoom */}
      {/* Centered heading and tagline */}
      {!showModal && zoomLevel === 1 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-amber-900 mb-6 tracking-wide">
            <span 
              className="bg-gradient-to-br from-amber-800 via-amber-900 to-amber-950 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(245, 158, 11, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
              }}
            >
              Rice Of Fate
            </span>
          </h1>
         <p 
  className="text-xl md:text-2xl font-bold text-amber-700 tracking-wider opacity-90"
  style={{
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(245, 158, 11, 0.2)',
  }}
>
  ഓരോ അരിമണിയിലും അത് കഴിക്കുന്ന ആളുടെ പേര് എഴുതിയിട്ടുണ്ട്.
</p>

        </div>
      )}

      {/* Click indicator when not at max zoom */}
{!showModal && zoomLevel < maxZoom && (
  <div 
    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-amber-800 text-2xl font-light tracking-wide opacity-90 animate-pulse pointer-events-none whitespace-nowrap"
    style={{
      textShadow: '0 2px 6px rgba(0, 0, 0, 0.35)',
    }}
  >
    Tap anywhere to zoom in and discover the name hidden on a grain of rice.
  </div>
)}


      {/* Zoom level indicator */}
      <div className="absolute top-8 left-8 text-amber-700 text-sm font-mono bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm border border-amber-200/30 shadow-lg">
        Zoom: {zoomLevel.toFixed(1)}x
      </div>

      {/* Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={resetZoom}
        title="You've found the grain of truth."
      />
    </div>
  );
};