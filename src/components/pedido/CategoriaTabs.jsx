import React, { useRef, useCallback } from 'react';
import { CATEGORIES } from '../../data/orderConfig';
import './CategoriaTabs.css';

const CategoriaTabs = ({ active, onChange }) => {
  const scrollRef = useRef(null);

  const scroll = useCallback((direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 140, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="categoria-tabs">
      <button
        className="categoria-tabs__arrow"
        onClick={() => scroll(-1)}
        aria-label="Desplazar izquierda"
      >
        &lt;
      </button>

      <div ref={scrollRef} className="categoria-tabs__scroll" role="tablist" aria-label="Categorías del pedido">
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

      <button
        className="categoria-tabs__arrow"
        onClick={() => scroll(1)}
        aria-label="Desplazar derecha"
      >
        &gt;
      </button>
    </div>
  );
};

export default CategoriaTabs;
