import React from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import GraffitiCard from '../../components/ui/GraffitiCard/GraffitiCard';
import { menuData } from '../../data/menuData';
import './TopGratens.css';

const TopGratens = () => {
  const { topGratens } = menuData;

  return (
    <section id="top-gratens" className="top-gratens section">
      <div className="container">
        <SectionTitle subtitle="Los tacos más deseados de la calle">
          {topGratens.title}
        </SectionTitle>
        <div className="top-gratens__grid">
          {topGratens.items.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.08}>
              <GraffitiCard
                title={item.name}
                price={item.price}
                items={item.ingredients}
                top={item.top}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGratens;
