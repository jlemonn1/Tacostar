import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Tag from '../../components/ui/Tag/Tag';
import Button from '../../components/ui/Button/Button';
import { menuData } from '../../data/menuData';
import './MenuBuilder.css';

const MenuBuilder = () => {
  const { baseTacos } = menuData;

  return (
    <section id="menu-builder" className="menu-builder section">
      <div className="container">
        <SectionTitle subtitle="Elige tu base, tu proteína y grátalo a tu gusto">
          MONTA TU TACO
        </SectionTitle>

        <ScrollReveal>
          <div className="menu-builder__sizes">
            {baseTacos.sizes.map((size) => (
              <div key={size.name} className="menu-builder__size-ticket">
                <span className="menu-builder__size-name">{size.name}</span>
                <span className="menu-builder__size-price">{size.price}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="menu-builder__proteins">
            <h3 className="menu-builder__subheading">PROTEÍNAS</h3>
            <div className="menu-builder__tags">
              {baseTacos.proteins.map((protein) => (
                <Tag key={protein} variant="default">{protein}</Tag>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="menu-builder__bases">
            <h3 className="menu-builder__subheading">BASES</h3>
            <div className="menu-builder__bases-grid">
              {baseTacos.bases.map((base) => (
                <div key={base.name} className="menu-builder__base-card">
                  <h4 className="menu-builder__base-name">{base.name}</h4>
                  <ul className="menu-builder__base-items">
                    {base.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="menu-builder__cta">
            <p className="menu-builder__phrase">Y grátalo como quieras...</p>
            <Link to="menu-completo" smooth={true} duration={600} offset={-70}>
              <Button variant="secondary">
                VER MENÚ COMPLETO
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MenuBuilder;
