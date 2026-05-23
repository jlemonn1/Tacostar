import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FloatingOrderButton.css';

const HaloSVG = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="10 8" opacity="0.45" />
    <circle cx="100" cy="100" r="82" stroke="var(--color-yellow)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.35" />
  </svg>
);

const OrderLogoSVG = () => (
  <svg
    className="fob__svg"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Pedir Ahora"
  >
    <defs>
      <clipPath id="fobTacoClip">
        <path d="M 72 75 Q 72 60 88 60 L 112 60 Q 128 60 128 75 L 124 125 Q 124 138 100 138 Q 76 138 76 125 Z" />
      </clipPath>
      <filter id="fobSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
      </filter>
      <filter id="fobRedGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="fobBlueGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="fobTacoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Fondo */}
    <circle className="fob-bg" cx="100" cy="100" r="92" fill="#0B0C10" />

    {/* Anillo rojo */}
    <circle
      className="fob-ring"
      cx="100"
      cy="100"
      r="88"
      fill="none"
      stroke="#E63946"
      strokeWidth="4.5"
      strokeLinecap="round"
    />

    {/* Anillo azul fino */}
    <circle
      className="fob-ring-blue"
      cx="100"
      cy="100"
      r="82"
      fill="none"
      stroke="#1D3557"
      strokeWidth="1.5"
      opacity="0.5"
    />

    {/* Taco */}
    <g clipPath="url(#fobTacoClip)" className="fob-taco">
      <rect x="65" y="50" width="70" height="100" rx="14" fill="#FFB703" />
      <rect x="65" y="50" width="70" height="100" rx="14" fill="url(#fobTacoGrad)" opacity="0.25" />

      {/* Grill */}
      <g className="fob-grill" opacity="0.22" stroke="#E63946" strokeWidth="1.8" strokeLinecap="round">
        <path d="M65 95 L115 45" />
        <path d="M65 115 L135 45" />
        <path d="M65 135 L135 65" />
        <path d="M85 145 L135 95" />
        <path d="M65 75 L95 45" />
        <path d="M105 145 L135 115" />
      </g>

      {/* Mordisco */}
      <circle className="fob-bite" cx="122" cy="68" r="22" fill="#0B0C10" />
      {/* Migajas */}
      <g className="fob-crumbs" fill="#FFB703">
        <circle cx="112" cy="55" r="2.5" />
        <circle cx="120" cy="48" r="1.8" />
        <circle cx="130" cy="52" r="1.5" />
        <circle cx="136" cy="62" r="2" />
        <circle cx="138" cy="74" r="1.5" />
      </g>
    </g>

    {/* Cinta */}
    <g className="fob-ribbon" filter="url(#fobSoftShadow)">
      <path
        d="M 30 108 L 58 100 Q 100 96 142 100 L 170 108 L 142 116 Q 100 120 58 116 Z"
        fill="#E63946"
        stroke="#B92B36"
        strokeWidth="0.8"
      />
      <path d="M 30 108 L 58 100 L 58 116 Z" fill="#C62828" opacity="0.6" />
      <path d="M 170 108 L 142 100 L 142 116 Z" fill="#C62828" opacity="0.6" />
      <text
        className="fob-ribbon-text"
        x="100"
        y="110"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F1FAEE"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="3"
        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.35)' }}
      >
        PEDIR
      </text>
    </g>

    {/* Destellos */}
    <g className="fob-sparkle fob-sparkle--1" filter="url(#fobBlueGlow)">
      <path
        d="M 48 52 L 51 60 L 59 60 L 53 65 L 55 73 L 48 68 L 41 73 L 43 65 L 37 60 L 45 60 Z"
        fill="#1D3557"
      />
      <circle cx="48" cy="64" r="3" fill="#4FC3F7" opacity="0.5" />
    </g>
    <g className="fob-sparkle fob-sparkle--2">
      <path
        d="M 148 42 L 150 48 L 156 48 L 152 51 L 153 57 L 148 54 L 143 57 L 144 51 L 140 48 L 146 48 Z"
        fill="#FFB703"
        opacity="0.8"
      />
    </g>

    {/* Líneas de acción */}
    <g className="fob-action-lines" stroke="#F1FAEE" strokeLinecap="round" opacity="0.15">
      <line x1="85" y1="48" x2="75" y2="38" strokeWidth="2" />
      <line x1="88" y1="40" x2="83" y2="28" strokeWidth="1.2" />
      <line x1="115" y1="48" x2="125" y2="38" strokeWidth="2" />
      <line x1="112" y1="40" x2="117" y2="28" strokeWidth="1.2" />
      <line x1="100" y1="38" x2="100" y2="26" strokeWidth="1.5" />
    </g>

    {/* Gotas */}
    <g className="fob-drips">
      <circle cx="70" cy="130" r="3" fill="#E63946" opacity="0.85" />
      <circle cx="76" cy="126" r="1.8" fill="#FFB703" opacity="0.7" />
      <circle cx="130" cy="132" r="2.5" fill="#E63946" opacity="0.75" />
      <circle cx="136" cy="138" r="1.5" fill="#1D3557" opacity="0.5" />
      <circle cx="100" cy="148" r="2" fill="#FFB703" opacity="0.6" />
    </g>
  </svg>
);

const FloatingOrderButton = () => {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observerRef.current.observe(hero);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <Link
      to="/pedido"
      className={`fob ${visible ? 'fob--visible' : ''}`}
      aria-label="Pedir Ahora"
    >
      <div className="fob__wrapper">
        <OrderLogoSVG />
        <HaloSVG className="fob__halo" aria-hidden="true" />
        <HaloSVG className="fob__halo fob__halo--delayed" aria-hidden="true" />
        <div className="fob__particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </Link>
  );
};

export default FloatingOrderButton;
