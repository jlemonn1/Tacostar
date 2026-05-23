import React from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import HoursFlyer from './HoursFlyer';
import ContactFlyer from './ContactFlyer';
import MapSection from './MapSection';
import { menuData } from '../../data/menuData';
import './Horarios.css';

const Horarios = () => {
  const { hours, contact } = menuData;

  return (
    <section id="horarios" className="horarios section">
      <div className="container">
        <SectionTitle subtitle="Encuéntranos en la calle">
          HORARIOS & CONTACTO
        </SectionTitle>

        <div className="horarios__grid">
          <ScrollReveal direction="left" rotate={-2}>
            <HoursFlyer hours={hours} />
          </ScrollReveal>

          <ScrollReveal direction="right" rotate={2}>
            <ContactFlyer contact={contact} />
          </ScrollReveal>
        </div>

        <ScrollReveal scale={0.95} blur={4}>
          <MapSection embedUrl={contact.mapEmbed} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Horarios;
