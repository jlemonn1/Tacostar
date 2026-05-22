import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Phone } from 'lucide-react';
import SprayText from '../../components/ui/SprayText/SprayText';
import Button from '../../components/ui/Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-layer hero__bg-layer--1" />
        <div className="hero__bg-layer hero__bg-layer--2" />
        <div className="hero__bg-layer hero__bg-layer--3" />
      </div>
      <div className="hero__content">
        <div className="hero__logo-wrapper animate-fade-in-up">
          <img
            src="/images/tacostar-logo.png"
            alt="TacoStar"
            className="hero__logo"
          />
        </div>
        <SprayText tag="h1" className="spray-text--xl hero__title" delay={0.3}>
          TACOSTAR
        </SprayText>
        <p className="hero__slogan animate-fade-in-up delay-3">
          Tacos de la calle, sabor de Toledo
        </p>
        <div className="hero__cta">
          <Link to="menu-completo" smooth={true} duration={600} offset={-70}>
            <Button variant="primary">VER MENÚ</Button>
          </Link>
          <a href="tel:+34639140346">
            <Button variant="secondary">
              <Phone size={18} />
              LLAMAR
            </Button>
          </a>
        </div>
      </div>
      <Link to="about" smooth={true} duration={500} className="hero__scroll" aria-label="Scroll down">
        <ChevronDown size={32} className="hero__scroll-icon" />
      </Link>
    </section>
  );
};

export default Hero;
