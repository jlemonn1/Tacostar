import React from 'react';
import { Plus } from 'lucide-react';
import './ProductoCard.css';

const ProductoCard = ({ product, onAdd, category, hideSizeBadge, cart = [] }) => {
  const handleAdd = () => {
    onAdd(product, category);
  };

  const quantityInCart = cart.reduce((sum, item) => {
    if (item.type === 'fixed' && item.fixed?.productKey === product.key) {
      return sum + item.quantity;
    }
    return sum;
  }, 0);

  return (
    <div className="producto-card glass graffiti-border">
      <div className="producto-card__left">
        <h3 className="producto-card__name">{product.name}</h3>
        {product.description && (
          <p className="producto-card__desc">{product.description}</p>
        )}
        {product.tacoSize && !hideSizeBadge && (
          <span className="producto-card__badge">{product.tacoSize === 'simple' ? 'Taco Simple' : product.tacoSize === 'doble' ? 'Taco Doble' : 'Taco Maxi'}</span>
        )}
      </div>
      <div className="producto-card__right">
        <span className="producto-card__price">{product.price.toFixed(2).replace('.', ',')}€</span>
        <div className="producto-card__add-wrap">
          <button className="producto-card__add" onClick={handleAdd} aria-label={`Añadir ${product.name}`}>
            <Plus size={20} />
          </button>
          {quantityInCart > 0 && (
            <span className="producto-card__qty-badge">{quantityInCart}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
