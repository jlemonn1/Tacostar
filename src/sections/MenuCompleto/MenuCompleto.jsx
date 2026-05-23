import React, { useState } from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import MenuTabs from './MenuTabs';
import MenuTabContent from './MenuTabContent';
import './MenuCompleto.css';

const MenuCompleto = () => {
  const [activeTab, setActiveTab] = useState('base');

  return (
    <section id="menu-completo" className="menu-completo section">
      <div className="container">
        <SectionTitle subtitle="Todo lo que tenemos para ti">
          MENÚ COMPLETO
        </SectionTitle>

        <ScrollReveal>
          <MenuTabs activeTab={activeTab} onChange={setActiveTab} />
        </ScrollReveal>

        <MenuTabContent activeTab={activeTab} />
      </div>
    </section>
  );
};

export default MenuCompleto;
