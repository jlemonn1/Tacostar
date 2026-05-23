import React from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import ParallaxLayer from '../../components/ui/ParallaxLayer/ParallaxLayer';
import StoryBlock from './StoryBlock';
import { menuData } from '../../data/menuData';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './About.css';

const About = () => {
  const { story } = menuData;
  const reduced = useReducedMotion();

  return (
    <section id="about" className="about section">
      <div className="about__parallax">
        {!reduced && (
          <>
            <ParallaxLayer speed={0.15} zIndex={0} className="about__bg-pattern" />
            <ParallaxLayer speed={0.3} zIndex={1} className="about__bg-deco">
              <span className="about__bg-text">TOLEDO</span>
            </ParallaxLayer>
          </>
        )}
      </div>
      <div className="container about__content">
        <SectionTitle subtitle="2022 — Toledo — Salsa Secreta">
          {story.title}
        </SectionTitle>
        <div className="about__grid">
          {story.paragraphs.map((paragraph, index) => (
            <StoryBlock key={index} paragraph={paragraph} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
