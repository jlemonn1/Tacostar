import React from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import { menuData } from '../../data/menuData';
import './About.css';

const About = () => {
  const { story } = menuData;

  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle subtitle="2022 — Toledo — Salsa Secreta">
          {story.title}
        </SectionTitle>
        <div className="about__grid">
          {story.paragraphs.map((paragraph, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="about__block">
                <div className="about__marker" aria-hidden="true">
                  {index === 0 && <span className="about__icon">🌮</span>}
                  {index === 1 && <span className="about__icon">🧀</span>}
                  {index === 2 && <span className="about__icon">🔥</span>}
                </div>
                <p className="about__text">{paragraph}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
