import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import ParallaxLayer from '../../components/ui/ParallaxLayer/ParallaxLayer';
import SprayDrip from '../../components/ui/SprayDrip/SprayDrip';
import './HeroBackground.css';

const TacoSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 70 Q60 5 110 70 L95 100 Q60 85 25 100 Z" fill="var(--color-yellow)" stroke="var(--color-red)" strokeWidth="4"/>
    <path d="M18 68 Q60 18 102 68" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeDasharray="6 3" opacity="0.6"/>
    <circle cx="40" cy="62" r="5" fill="var(--color-red)"/>
    <circle cx="65" cy="55" r="5" fill="#4CAF50"/>
    <circle cx="85" cy="65" r="5" fill="var(--color-red)"/>
    <circle cx="55" cy="70" r="4" fill="#FF9800"/>
  </svg>
);

const ChiliSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 15 Q65 45 55 100 Q52 130 40 135 Q28 130 25 100 Q15 45 40 15" fill="var(--color-red)"/>
    <path d="M40 15 Q42 0 48 8" stroke="#4CAF50" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M35 50 Q45 60 38 80" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

const LimeSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#8BC34A" stroke="#4CAF50" strokeWidth="3"/>
    <path d="M50 50 L50 8" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L90 50" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L50 92" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L10 50" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L22 22" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L78 22" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L78 78" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 50 L22 78" stroke="#DCEDC8" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="46" fill="url(#limeGrad)"/>
    <defs>
      <radialGradient id="limeGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35 35) rotate(45) scale(60)">
        <stop stopColor="#DCEDC8" stopOpacity="0.4"/>
        <stop offset="1" stopColor="#8BC34A" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);

const StarSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0 L28 17 L48 24 L28 31 L24 48 L20 31 L0 24 L20 17 Z" fill="var(--color-yellow)"/>
  </svg>
);

const SplashSVG = ({ className = '', style = {}, color = 'var(--color-red)' }) => (
  <svg className={className} style={style} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 100 Q40 50 100 40 Q160 30 150 90 Q180 130 130 150 Q80 180 60 130 Q30 120 60 100Z" fill={color} opacity="0.2"/>
    <circle cx="80" cy="70" r="8" fill={color} opacity="0.3"/>
    <circle cx="130" cy="60" r="5" fill={color} opacity="0.3"/>
    <circle cx="150" cy="110" r="6" fill={color} opacity="0.3"/>
    <circle cx="100" cy="160" r="7" fill={color} opacity="0.3"/>
  </svg>
);

const WaveSVG = ({ className = '', style = {} }) => (
  <svg className={className} style={style} viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30" stroke="var(--color-yellow)" strokeWidth="2" fill="none" opacity="0.25"/>
    <path d="M0 40 Q50 10 100 40 T200 40 T300 40 T400 40" stroke="var(--color-red)" strokeWidth="2" fill="none" opacity="0.2"/>
  </svg>
);

const HeroBackground = ({ mouse = { x: 0, y: 0 } }) => {
  const reduced = useReducedMotion();

  const mStyle = (intensity) => ({
    transform: `translate(${mouse.x * intensity}px, ${mouse.y * intensity}px)`,
    transition: 'transform 0.15s linear',
  });

  if (reduced) {
    return (
      <div className="hero-background hero-background--reduced">
        <div className="hero-background__gradient" />
      </div>
    );
  }

  return (
    <div className="hero-background">
      {/* SVG Filters */}
      <svg className="hero-background__filters" aria-hidden="true">
        <defs>
          <filter id="hb-glow-red">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="hb-glow-yellow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
      </svg>

      {/* Capa 1: Fondo ladrillo — velocidad 0.1 */}
      <ParallaxLayer speed={0.1} zIndex={-3} className="hero-background__brick">
        <div className="hero-background__brick-pattern" />
      </ParallaxLayer>

      {/* Capa 2: Splashes decorativas */}
      <ParallaxLayer speed={0.15} zIndex={-2} className="hero-background__splash-layer">
        <SplashSVG className="hero-background__splash hero-background__splash--1" color="var(--color-red)" />
        <SplashSVG className="hero-background__splash hero-background__splash--2" color="var(--color-blue)" />
        <SplashSVG className="hero-background__splash hero-background__splash--3" color="var(--color-yellow)" />
      </ParallaxLayer>

      {/* Capa 3: Nubes de spray difuminadas — velocidad 0.2 */}
      <ParallaxLayer speed={0.2} zIndex={-1} className="hero-background__clouds">
        <div className="hero-background__cloud hero-background__cloud--red" />
        <div className="hero-background__cloud hero-background__cloud--yellow" />
        <div className="hero-background__cloud hero-background__cloud--blue" />
        <div className="hero-background__cloud hero-background__cloud--red2" />
      </ParallaxLayer>

      {/* Capa 4: Texto decorativo gigante — velocidad 0.4 */}
      <ParallaxLayer speed={0.4} zIndex={0} className="hero-background__watermark">
        <span className="hero-background__watermark-text">TACOSTAR</span>
      </ParallaxLayer>

      {/* Capa 5: Ondas decorativas */}
      <ParallaxLayer speed={0.45} zIndex={0} className="hero-background__waves">
        <WaveSVG className="hero-background__wave hero-background__wave--1" />
        <WaveSVG className="hero-background__wave hero-background__wave--2" />
      </ParallaxLayer>

      {/* Capa 6: Tacos flotantes */}
      <ParallaxLayer speed={0.3} zIndex={1} className="hero-background__float-layer">
        <div style={{ position: 'absolute', top: '18%', left: '12%', ...mStyle(-20) }}>
          <TacoSVG className="hero-background__taco" />
        </div>
        <div style={{ position: 'absolute', top: '55%', right: '10%', ...mStyle(15) }}>
          <TacoSVG className="hero-background__taco hero-background__taco--2" />
        </div>
      </ParallaxLayer>

      {/* Capa 7: Chilis flotantes */}
      <ParallaxLayer speed={0.5} zIndex={1} className="hero-background__float-layer">
        <div style={{ position: 'absolute', top: '25%', right: '18%', ...mStyle(-30) }}>
          <ChiliSVG className="hero-background__chili" />
        </div>
        <div style={{ position: 'absolute', top: '65%', left: '8%', ...mStyle(25) }}>
          <ChiliSVG className="hero-background__chili hero-background__chili--2" />
        </div>
      </ParallaxLayer>

      {/* Capa 8: Limes flotantes */}
      <ParallaxLayer speed={0.6} zIndex={1} className="hero-background__float-layer">
        <div style={{ position: 'absolute', top: '70%', right: '22%', ...mStyle(-15) }}>
          <LimeSVG className="hero-background__lime" />
        </div>
        <div style={{ position: 'absolute', top: '15%', left: '75%', ...mStyle(20) }}>
          <LimeSVG className="hero-background__lime hero-background__lime--2" />
        </div>
      </ParallaxLayer>

      {/* Capa 9: Estrellas flotantes */}
      <ParallaxLayer speed={0.8} zIndex={2} className="hero-background__float-layer">
        <div style={{ position: 'absolute', top: '20%', left: '45%', ...mStyle(-40) }}>
          <StarSVG className="hero-background__star" />
        </div>
        <div style={{ position: 'absolute', top: '45%', left: '25%', ...mStyle(35) }}>
          <StarSVG className="hero-background__star hero-background__star--2" />
        </div>
        <div style={{ position: 'absolute', top: '60%', right: '35%', ...mStyle(-25) }}>
          <StarSVG className="hero-background__star hero-background__star--3" />
        </div>
      </ParallaxLayer>

      {/* Capa 10: Gradientes y luces — velocidad 0.6 */}
      <ParallaxLayer speed={0.6} zIndex={1} className="hero-background__lights">
        <div className="hero-background__gradient" />
        <div className="hero-background__spotlight" />
        <div className="hero-background__spotlight hero-background__spotlight--secondary" />
      </ParallaxLayer>

      {/* Capa 11: Drips cercanos — velocidad 1.4 */}
      <ParallaxLayer speed={1.4} zIndex={5} className="hero-background__drips">
        <SprayDrip color="red" height={80} delay={0.5} style={{ left: '10%', top: 0 }} />
        <SprayDrip color="yellow" height={50} delay={1.2} style={{ left: '85%', top: 0 }} />
        <SprayDrip color="red" height={65} delay={2} style={{ left: '50%', top: 0 }} />
        <SprayDrip color="blue" height={70} delay={0.8} style={{ left: '30%', top: 0 }} />
        <SprayDrip color="yellow" height={55} delay={1.6} style={{ left: '65%', top: 0 }} />
      </ParallaxLayer>

      {/* Grain overlay */}
      <div className="hero-background__grain" aria-hidden="true" />
    </div>
  );
};

export default HeroBackground;
