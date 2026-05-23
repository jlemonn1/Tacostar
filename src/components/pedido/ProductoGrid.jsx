import React from 'react';
import ProductoCard from './ProductoCard';
import './ProductoGrid.css';

const ProductoGrid = ({ products, onAdd, category }) => {
  if (!products || products.length === 0) {
    return (
      <div className="producto-grid__empty">
        <p>Selecciona una categoría para ver los productos.</p>
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
