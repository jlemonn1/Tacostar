import React, { useState } from 'react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import { menuData } from '../../data/menuData';
import './MenuCompleto.css';

const tabs = [
  { id: 'base', label: 'Base' },
  { id: 'top', label: 'Top Gratens' },
  { id: 'vegetarian', label: 'Veggie' },
  { id: 'starters', label: 'Entrantes' },
  { id: 'extras', label: 'Extras' },
  { id: 'desserts', label: 'Postres' },
];

const MenuCompleto = () => {
  const [activeTab, setActiveTab] = useState('base');

  const renderContent = () => {
    switch (activeTab) {
      case 'base':
        return (
          <div className="menu-tab">
            <div className="menu-tab__intro">
              <p>{menuData.baseTacos.description}</p>
            </div>
            <div className="menu-tab__section">
              <h3 className="menu-tab__title">Tamaños</h3>
              <ul className="menu-list">
                {menuData.baseTacos.sizes.map((s) => (
                  <li key={s.name} className="menu-list__item">
                    <span className="menu-list__name">{s.name}</span>
                    <span className="menu-list__dots" />
                    <span className="menu-list__price">{s.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-tab__section">
              <h3 className="menu-tab__title">Proteínas</h3>
              <div className="menu-tab__tags">
                {menuData.baseTacos.proteins.map((p) => (
                  <span key={p} className="menu-tab__tag">{p}</span>
                ))}
              </div>
            </div>
            <div className="menu-tab__section">
              <h3 className="menu-tab__title">Bases</h3>
              <div className="menu-tab__bases">
                {menuData.baseTacos.bases.map((b) => (
                  <div key={b.name} className="menu-tab__base">
                    <h4>{b.name}</h4>
                    <ul>
                      {b.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'top':
        return (
          <div className="menu-tab">
            <div className="menu-tab__cards">
              {menuData.topGratens.items.map((item) => (
                <div key={item.name} className={`menu-card ${item.top ? 'menu-card--top' : ''}`}>
                  {item.top && <span className="menu-card__badge">TOP</span>}
                  <div className="menu-card__header">
                    <h3 className="menu-card__name">{item.name}</h3>
                    <span className="menu-card__price">{item.price}</span>
                  </div>
                  <ul className="menu-card__items">
                    {item.ingredients.map((ing) => (
                      <li key={ing}>{ing}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'vegetarian':
        return (
          <div className="menu-tab">
            <div className="menu-tab__cards">
              {menuData.vegetarian.items.map((item) => (
                <div key={item.name} className="menu-card">
                  <div className="menu-card__header">
                    <h3 className="menu-card__name">{item.name}</h3>
                    <span className="menu-card__price">{item.price}</span>
                  </div>
                  <ul className="menu-card__items">
                    {item.ingredients.map((ing) => (
                      <li key={ing}>{ing}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'starters':
        return (
          <div className="menu-tab">
            <ul className="menu-list">
              {menuData.starters.items.map((item) => (
                <li key={item.name} className="menu-list__item">
                  <span className="menu-list__name">{item.name}</span>
                  <span className="menu-list__dots" />
                  <span className="menu-list__price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'extras':
        return (
          <div className="menu-tab">
            <div className="menu-tab__section">
              <h3 className="menu-tab__title">Gratinados</h3>
              <ul className="menu-list">
                {menuData.extras.gratinated.map((item) => (
                  <li key={item.name} className="menu-list__item">
                    <span className="menu-list__name">{item.name}</span>
                    <span className="menu-list__dots" />
                    <span className="menu-list__price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-tab__section">
              <h3 className="menu-tab__title">Ingredientes extra</h3>
              <ul className="menu-list">
                {menuData.extras.ingredients.map((item) => (
                  <li key={item.name} className="menu-list__item">
                    <span className="menu-list__name">{item.name}</span>
                    <span className="menu-list__dots" />
                    <span className="menu-list__price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-tab__section">
              <h3 className="menu-tab__title">Patatas y bebidas</h3>
              <ul className="menu-list">
                {menuData.extras.sides.map((item) => (
                  <li key={item.name} className="menu-list__item">
                    <span className="menu-list__name">{item.name}</span>
                    <span className="menu-list__dots" />
                    <span className="menu-list__price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-tab__section menu-tab__section--highlight">
              <h3 className="menu-tab__title">Menú y Bebidas</h3>
              <p className="menu-tab__text">{menuData.menuCombo.description}</p>
              <p className="menu-tab__text menu-tab__text--accent">{menuData.menuCombo.upgrade}</p>
            </div>
          </div>
        );
      case 'desserts':
        return (
          <div className="menu-tab">
            <div className="menu-tab__section">
              <h3 className="menu-tab__title">Tartas</h3>
              <ul className="menu-list menu-list--centered">
                {menuData.desserts.items.map((item) => (
                  <li key={item} className="menu-list__item menu-list__item--center">
                    <span className="menu-list__name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="menu-completo" className="menu-completo section">
      <div className="container">
        <SectionTitle subtitle="Todo lo que tenemos para ti">
          MENÚ COMPLETO
        </SectionTitle>

        <ScrollReveal>
          <div className="menu-completo__tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`menu-completo__tab ${activeTab === tab.id ? 'menu-completo__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="menu-completo__content">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default MenuCompleto;
