import React from 'react';
import ProductoCard from './ProductoCard';
import { CATEGORY } from '../../data/orderConfig';
import './ProductoGrid.css';

const SIZE_ORDER = { simple: 0, doble: 1, maxi: 2 };
const SIZE_LABELS = { simple: 'Tacos Simples', doble: 'Tacos Dobles', maxi: 'Tacos Maxi' };

const ProductoGrid = ({ products, onAdd, category }) => {
  if (!products || products.length === 0) {
    return (
      <div className="producto-grid__empty">
        <p>Selecciona una categoría para ver los productos.</p>
      </div>
    );
  }

  if (category === CATEGORY.TOP_TACO) {
    const grouped = products.reduce((acc, p) => {
      const size = p.tacoSize || 'simple';
      if (!acc[size]) acc[size] = [];
      acc[size].push(p);
      return acc;
    }, {});

    const sortedSizes = Object.keys(grouped).sort((a, b) => (SIZE_ORDER[a] ?? 99) - (SIZE_ORDER[b] ?? 99));

    return (
      <div className="producto-grid__sections">
        {sortedSizes.map((size) => (
          <div key={size} className="producto-grid__section">
            <h3 className="producto-grid__section-title">{SIZE_LABELS[size] || size}</h3>
            <div className="producto-grid">
              {grouped[size].map((product) => (
                <ProductoCard
                  key={product.key}
                  product={product}
                  onAdd={onAdd}
                  category={category}
                  hideSizeBadge
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="producto-grid">
      {products.map((product) => (
        <ProductoCard
          key={product.key}
          product={product}
          onAdd={onAdd}
          category={category}
        />
      ))}
    </div>
  );
};

export default ProductoGrid;
