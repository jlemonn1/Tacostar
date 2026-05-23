import React from 'react';
import { Plus } from 'lucide-react';
import './ProductoCard.css';

const ProductoCard = ({ product, onAdd, category }) => {
  const handleAdd = () => {
    onAdd(product, category);
  };

  return (
    <div className="producto-card glass graffiti-border">
      <div className="producto-card__top">
        <h3 className="producto-card__name">{product.name}</h3>
        {product.description && (
          <p className="producto-card__desc">{product.description}</p>
        )}
        {product.tacoSize && (
          <span className="producto-card__badge">{product.tacoSize === 'simple' ? 'Taco Simple' : product.tacoSize === 'doble' ? 'Taco Doble' : 'Taco Maxi'}</span>
        )}
      </div>
      <div className="producto-card__footer">
        <span className="producto-card__price">{product.price.toFixed(2).replace('.', ',')}€</span>
        <button className="producto-card__add" onClick={handleAdd} aria-label={`Añadir ${product.name}`}>
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;
