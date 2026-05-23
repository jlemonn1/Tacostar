import React, { useState, useCallback } from 'react';
import HeroBackground from './HeroBackground';
import HeroLogo from './HeroLogo';
import HeroTitle from './HeroTitle';
import HeroCTA from './HeroCTA';
import './Hero.css';

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  }, []);

  return (
    <section id="hero" className="hero" onMouseMove={handleMouseMove}>
      <HeroBackground mouse={mouse} />
      <div className="hero__content">
        <HeroLogo />
        <HeroTitle />
        <HeroCTA />
      </div>
    </section>
  );
};

export default Hero;
