import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Phone, ShoppingCart, Utensils } from 'lucide-react';
import MagneticButton from '../../components/ui/MagneticButton/MagneticButton';
import './HeroCTA.css';

const ScrollArrowSVG = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" stroke="var(--color-yellow)" strokeWidth="2" fill="none" opacity="0.3"/>
    <path d="M16 20 L24 28 L32 20" stroke="var(--color-yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 28 L24 36 L32 28" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

const HeroCTA = () => {
  return (
    <div className="hero-cta">
      <div className="hero-cta__bar animate-fade-in-up delay-4">
        <RouterLink to="/pedido" className="hero-cta__item hero-cta__item--main">
          <MagneticButton variant="primary" className="hero-cta__btn-main">
            <ShoppingCart size={16} />
            Pedir Ahora
          </MagneticButton>
        </RouterLink>

        <span className="hero-cta__sep" aria-hidden="true" />

        <ScrollLink
          to="menu-completo"
          smooth={true}
          duration={600}
          offset={-70}
          className="hero-cta__item hero-cta__item--sub"
        >
          <Utensils size={16} strokeWidth={1.5} />
          <span>Menú</span>
        </ScrollLink>

        <span className="hero-cta__sep" aria-hidden="true" />

        <a href="tel:+34639140346" className="hero-cta__item hero-cta__item--sub">
          <Phone size={16} strokeWidth={1.5} />
          <span>Llamar</span>
        </a>
      </div>

      <div className="hero-cta__info animate-fade-in-up delay-5">
        <span className="hero-cta__info-dot" aria-hidden="true" />
        <span>Envío a domicilio &nbsp;•&nbsp; Recogida en local</span>
      </div>

      <ScrollLink to="about" smooth={true} duration={500} className="hero-cta__scroll" aria-label="Scroll down">
        <ScrollArrowSVG className="hero-cta__scroll-icon" />
      </ScrollLink>
    </div>
  );
};

export default HeroCTA;
