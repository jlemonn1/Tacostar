import React from 'react';
import './HeroLogo.css';

const HaloSVG = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="10 8" opacity="0.45"/>
    <circle cx="100" cy="100" r="82" stroke="var(--color-yellow)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.35"/>
  </svg>
);

const TacoStarLogoSVG = () => (
  <svg
    className="hero-logo__svg"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="TacoStar Original French Tacos"
  >
    <defs>
      <linearGradient id="bandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E63946" />
        <stop offset="55%" stopColor="#E63946" />
        <stop offset="55%" stopColor="#1D3557" />
        <stop offset="100%" stopColor="#1D3557" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Fondo oscuro */}
    <circle
      className="logo-bg"
      cx="200"
      cy="200"
      r="190"
      fill="#0B0C10"
      stroke="#1D3557"
      strokeWidth="2"
      opacity="0.9"
    />

    {/* Anillo exterior dibujado */}
    <circle
      className="logo-ring"
      cx="200"
      cy="200"
      r="186"
      fill="none"
      stroke="#E63946"
      strokeWidth="4"
      strokeLinecap="round"
    />

    {/* Taco */}
    <g className="logo-taco">
      {/* Contorno taco */}
      <ellipse cx="200" cy="210" rx="95" ry="75" fill="#FFB703" />
      <ellipse cx="200" cy="205" rx="85" ry="65" fill="#FFC927" />
      
      {/* Textura grill / doblez */}
      <path d="M135 190 Q200 160 265 190" stroke="#E63946" strokeWidth="3" fill="none" opacity="0.25" strokeLinecap="round"/>
      <path d="M140 205 Q200 175 260 205" stroke="#E63946" strokeWidth="3" fill="none" opacity="0.25" strokeLinecap="round"/>
      <path d="M145 220 Q200 190 255 220" stroke="#E63946" strokeWidth="3" fill="none" opacity="0.25" strokeLinecap="round"/>
      
      {/* Sombra interior */}
      <ellipse cx="200" cy="245" rx="70" ry="20" fill="#0B0C10" opacity="0.15" />
    </g>

    {/* Tenedor */}
    <g className="logo-fork">
      {/* Mango */}
      <rect x="196" y="85" width="8" height="100" rx="4" fill="#B0BEC5" />
      {/* Base púas */}
      <rect x="188" y="175" width="24" height="12" rx="3" fill="#B0BEC5" />
      {/* Púas */}
      <rect x="188" y="175" width="4" height="70" rx="2" fill="#CFD8DC" />
      <rect x="198" y="175" width="4" height="70" rx="2" fill="#CFD8DC" />
      <rect x="208" y="175" width="4" height="70" rx="2" fill="#CFD8DC" />
      {/* Sombra tenedor */}
      <rect x="200" y="85" width="4" height="160" fill="#0B0C10" opacity="0.1" rx="2" />
    </g>

    {/* Banda diagonal */}
    <g className="logo-band">
      <path
        d="M45 255 L355 145 L355 195 L45 305 Z"
        fill="url(#bandGrad)"
        opacity="0.95"
      />
      {/* Borde banda */}
      <path
        d="M45 255 L355 145 L355 195 L45 305 Z"
        fill="none"
        stroke="#F1FAEE"
        strokeWidth="1.5"
        opacity="0.35"
      />
      {/* Texto TACOSTAR */}
      <text
        x="200"
        y="240"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F1FAEE"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="52"
        fontWeight="700"
        letterSpacing="6"
        transform="rotate(-14 200 235)"
        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
      >
        TACOSTAR
      </text>
    </g>

    {/* Texto inferior */}
    <text
      className="logo-sub"
      x="200"
      y="365"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#FFB703"
      fontFamily="'Inter', sans-serif"
      fontSize="17"
      fontWeight="700"
      letterSpacing="4"
    >
      ORIGINAL FRENCH TACOS
    </text>

    {/* Estrella / chispa azul */}
    <g className="logo-star" filter="url(#starGlow)">
      <path
        d="M72 88 L80 108 L100 108 L84 120 L90 140 L72 128 L54 140 L60 120 L44 108 L64 108 Z"
        fill="#1D3557"
      />
      <circle cx="72" cy="114" r="6" fill="#4FC3F7" opacity="0.6" />
    </g>
  </svg>
);

const HeroLogo = () => {
  return (
    <div className="hero-logo animate-fade-in-up">
      <div className="hero-logo__wrapper">
        <TacoStarLogoSVG />
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
