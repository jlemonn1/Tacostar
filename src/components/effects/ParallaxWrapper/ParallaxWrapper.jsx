import React from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import ParallaxLayer from '../../components/ui/ParallaxLayer/ParallaxLayer';
import './ParallaxWrapper.css';

/**
 * ParallaxWrapper
 * Envuelve una sección con múltiples capas parallax preconfiguradas.
 * Uso: <ParallaxWrapper><section>...</section></ParallaxWrapper>
 */
const ParallaxWrapper = ({ children, layers = [], className = '' }) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={`parallax-wrapper ${className}`}>{children}</div>;
  }

  return (
    <div className={`parallax-wrapper ${className}`}>
      {layers.map((layer, index) => (
        <ParallaxLayer
          key={index}
          speed={layer.speed}
          zIndex={layer.zIndex}
          className={layer.className || ''}
          style={layer.style || {}}
        >
          {layer.content}
        </ParallaxLayer>
      ))}
      <div className="parallax-wrapper__content" style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxWrapper;
