import React from 'react';
import { CATEGORIES } from '../../data/orderConfig';
import './CategoriaTabs.css';

const CategoriaTabs = ({ active, onChange }) => {
  return (
    <div className="categoria-tabs" role="tablist" aria-label="Categorías del pedido">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          role="tab"
          aria-selected={active === cat.key}
          className={`categoria-tabs__tab ${active === cat.key ? 'categoria-tabs__tab--active' : ''}`}
          onClick={() => onChange(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoriaTabs;
