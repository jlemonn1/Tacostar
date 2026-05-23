import React from 'react';
import './HeroLogo.css';

const HaloSVG = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="10 8" opacity="0.45"/>
    <circle cx="100" cy="100" r="82" stroke="var(--color-yellow)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.35"/>
  </svg>
);

const HeroLogo = () => {
  return (
    <div className="hero-logo animate-fade-in-up">
      <div className="hero-logo__wrapper">
        <img
          src="/images/tacostar-logo.png"
          alt="TacoStar"
          className="hero-logo__img"
        />
        <HaloSVG className="hero-logo__halo" aria-hidden="true" />
        <HaloSVG className="hero-logo__halo hero-logo__halo--delayed" aria-hidden="true" />
        <div className="hero-logo__particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default HeroLogo;
