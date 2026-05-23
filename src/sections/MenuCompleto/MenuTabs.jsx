import React from 'react';
import './MenuTabs.css';

const tabs = [
  { id: 'base', label: 'Base' },
  { id: 'top', label: 'Top Gratens' },
  { id: 'vegetarian', label: 'Veggie' },
  { id: 'starters', label: 'Entrantes' },
  { id: 'extras', label: 'Extras' },
  { id: 'desserts', label: 'Postres' },
];

const MenuTabs = ({ activeTab, onChange }) => {
  return (
    <div className="menu-tabs" role="tablist" aria-label="Categorías del menú">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`menu-tabs__tab ${activeTab === tab.id ? 'menu-tabs__tab--active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;
