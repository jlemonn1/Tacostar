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
      {/* Clip para el taco (incluye el mordisco) */}
      <clipPath id="tacoClip">
        <path d="
          M 145 140
          Q 145 110 165 110
          L 228 110
          A 34 34 0 0 1 266 148
          L 258 285
          Q 258 300 200 300
          Q 142 300 142 285
          Z
        " />
      </clipPath>

      {/* Sombra suave */}
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000" floodOpacity="0.35"/>
      </filter>

      {/* Glow rojo */}
      <filter id="redGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Glow azul estrella */}
      <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ===== 1. FONDO ===== */}
    <circle
      className="logo-bg"
      cx="200"
      cy="200"
      r="192"
      fill="#0B0C10"
    />

    {/* ===== 2. ANILLO EXTERIOR ROJO ===== */}
    <circle
      className="logo-ring"
      cx="200"
      cy="200"
      r="186"
      fill="none"
      stroke="#E63946"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* ===== 3. ANILLO EXTERIOR AZUL (delgado, doble) ===== */}
    <circle
      className="logo-ring-blue"
      cx="200"
      cy="200"
      r="178"
      fill="none"
      stroke="#1D3557"
      strokeWidth="2"
      opacity="0.5"
    />

    {/* ===== 4. TACO ===== */}
    <g clipPath="url(#tacoClip)" className="logo-taco">
      {/* Base amarilla */}
      <rect x="130" y="100" width="140" height="210" rx="22" fill="#FFB703" />
      {/* Degradado claro */}
      <rect x="130" y="100" width="140" height="210" rx="22" fill="url(#tacoGrad)" opacity="0.25" />

      {/* Patrón grill / rombos */}
      <g className="logo-grill" opacity="0.22" stroke="#E63946" strokeWidth="2.2" strokeLinecap="round">
        {/* Diagonales \ */}
        <path d="M130 155 L195 90" />
        <path d="M130 195 L235 90" />
        <path d="M130 235 L275 90" />
        <path d="M130 275 L275 145" />
        <path d="M165 310 L275 200" />
        <path d="M205 310 L275 240" />

        {/* Diagonales / */}
        <path d="M270 155 L205 90" />
        <path d="M270 195 L165 90" />
        <path d="M270 235 L125 90" />
        <path d="M270 275 L125 145" />
        <path d="M235 310 L125 200" />
        <path d="M195 310 L125 240" />
      </g>

      {/* Mordisco (se ve como fondo oscuro cortando) */}
      <circle
        className="logo-bite"
        cx="262"
        cy="136"
        r="32"
        fill="#0B0C10"
      />
      {/* Detalle mordisco (migajas) */}
      <g className="logo-crumbs" fill="#FFB703">
        <circle cx="250" cy="110" r="3.5" />
        <circle cx="260" cy="102" r="2.5" />
        <circle cx="272" cy="108" r="2" />
        <circle cx="278" cy="120" r="3" />
        <circle cx="282" cy="134" r="2" />
      </g>
    </g>

    {/* ===== 5. CINTA / BANDA ROJA ===== */}
    <g className="logo-ribbon" filter="url(#softShadow)">
      {/* Cuerpo cinta */}
      <path
        d="
          M 52 205
          L 92 192
          Q 200 186 308 192
          L 348 205
          L 308 218
          Q 200 224 92 218
          Z
        "
        fill="#E63946"
        stroke="#B92B36"
        strokeWidth="1"
      />
      {/* Doblez de cinta (sombra interior) */}
      <path
        d="
          M 52 205
          L 92 192
          L 92 218
          Z
        "
        fill="#C62828"
        opacity="0.6"
      />
      <path
        d="
          M 348 205
          L 308 192
          L 308 218
          Z
        "
        fill="#C62828"
        opacity="0.6"
      />
      {/* Texto TACOSTAR sobre la cinta */}
      <text
        className="logo-ribbon-text"
        x="200"
        y="210"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F1FAEE"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="5"
        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.35)' }}
      >
        TACOSTAR
      </text>
    </g>

    {/* ===== 6. TEXTOS INFERIORES ===== */}
    <text
      className="logo-sub"
      x="200"
      y="355"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#FFB703"
      fontFamily="'Inter', sans-serif"
      fontSize="13"
      fontWeight="600"
      letterSpacing="4.5"
      opacity="0.9"
    >
      ORIGINAL FRENCH TACOS
    </text>

    {/* ===== 7. DESTELLOS / ESTRELLAS ===== */}
    <g className="logo-sparkle sparkle-1" filter="url(#blueGlow)">
      <path
        d="M 78 95 L 83 108 L 96 108 L 86 116 L 90 129 L 78 121 L 66 129 L 70 116 L 60 108 L 73 108 Z"
        fill="#1D3557"
      />
      <circle cx="78" cy="114" r="5" fill="#4FC3F7" opacity="0.5" />
    </g>

    <g className="logo-sparkle sparkle-2">
      <path
        d="M 320 78 L 323 86 L 331 86 L 325 91 L 327 99 L 320 94 L 313 99 L 315 91 L 309 86 L 317 86 Z"
        fill="#FFB703"
        opacity="0.8"
      />
    </g>

    {/* ===== 8. ELEMENTOS DECORATIVOS EXTRAS ===== */}
    {/* Líneas de acción alrededor */}
    <g className="logo-action-lines" stroke="#F1FAEE" strokeLinecap="round" opacity="0.15">
      <line x1="120" y1="85" x2="105" y2="70" strokeWidth="2.5" />
      <line x1="125" y1="75" x2="118" y2="58" strokeWidth="1.5" />
      <line x1="280" y1="85" x2="295" y2="70" strokeWidth="2.5" />
      <line x1="275" y1="75" x2="282" y2="58" strokeWidth="1.5" />
      <line x1="200" y1="68" x2="200" y2="52" strokeWidth="2" />
    </g>

    {/* Pequeñas gotas de salsa/queso flotando */}
    <g className="logo-drips">
      <circle cx="110" cy="240" r="4.5" fill="#E63946" opacity="0.85" />
      <circle cx="118" cy="235" r="2.5" fill="#FFB703" opacity="0.7" />
      <circle cx="290" cy="245" r="3.5" fill="#E63946" opacity="0.75" />
      <circle cx="298" cy="252" r="2" fill="#1D3557" opacity="0.5" />
      <circle cx="200" cy="325" r="3" fill="#FFB703" opacity="0.6" />
    </g>

    {/* Gradiente taco */}
    <linearGradient id="tacoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#FFFFFF" />
      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
    </linearGradient>
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
