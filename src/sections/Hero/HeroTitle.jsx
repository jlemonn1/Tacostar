import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SprayText from '../../components/ui/SprayText/SprayText';
import './HeroTitle.css';

const HOLD_MS = 2000;

const StarSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0 L19 12 L32 16 L19 20 L16 32 L13 20 L0 16 L13 12 Z" fill="var(--color-yellow)"/>
  </svg>
);

const HeroTitle = () => {
  const navigate = useNavigate();
  const holdTimer = useRef(null);
  const progressRef = useRef(null);

  const clearHold = useCallback(() => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.transform = 'scaleX(0)';
    }
  }, []);

  const startHold = useCallback(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = `transform ${HOLD_MS}ms linear`;
      progressRef.current.style.transform = 'scaleX(1)';
    }
    holdTimer.current = setTimeout(() => {
      navigate('/visor');
      clearHold();
    }, HOLD_MS);
  }, [navigate, clearHold]);

  const handleMouseDown = useCallback(() => {
    startHold();
  }, [startHold]);

  const handleTouchStart = useCallback(() => {
    startHold();
  }, [startHold]);

  return (
    <div className="hero-title">
      <div
        className="hero-title__badge animate-fade-in-up delay-1"
        onMouseDown={handleMouseDown}
        onMouseUp={clearHold}
        onMouseLeave={clearHold}
        onTouchStart={handleTouchStart}
        onTouchEnd={clearHold}
      >
        <span ref={progressRef} className="hero-title__badge-progress" aria-hidden="true" />
        <span className="hero-title__badge-text">Abierto Ahora</span>
        <span className="hero-title__badge-pulse" aria-hidden="true" />
      </div>
      <SprayText tag="h1" className="spray-text--xl hero-title__main" delay={0.3}>
        TACOSTAR
      </SprayText>
      <div className="hero-title__decor" aria-hidden="true">
        <StarSVG className="hero-title__star" />
        <svg className="hero-title__underline-svg" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <filter id="title-glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <path d="M2 6 Q75 0 150 6 T298 6" stroke="var(--color-yellow)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#title-glow)"/>
          <circle cx="150" cy="6" r="4" fill="var(--color-red)"/>
        </svg>
        <StarSVG className="hero-title__star hero-title__star--right" />
      </div>
      <p className="hero-title__slogan animate-fade-in-up delay-3">
        Tacos de la calle, sabor de Toledo
      </p>
      <p className="hero-title__sub-slogan animate-fade-in-up delay-4">
        Auténtica cocina mexicana con ingredientes frescos y mucho cariño
      </p>
    </div>
  );
};

export default HeroTitle;
