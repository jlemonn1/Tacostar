import React from 'react';
import { useParallax } from '../../../hooks/useParallax';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './ParallaxLayer.css';

const ParallaxLayer = ({ speed = 0.5, children, className = '', zIndex, style = {} }) => {
  const reduced = useReducedMotion();
  const { ref, style: parallaxStyle } = useParallax(speed, reduced);

  return (
    <div
      ref={ref}
      className={`parallax-layer ${className}`}
      style={{
        zIndex: zIndex ?? 'auto',
        ...parallaxStyle,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
