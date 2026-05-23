import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const custom = item.custom;
  const fixed = item.fixed;

  const details = () => {
    if (custom) {
      const parts = [];
      if (custom.size) parts.push(custom.size);
      if (custom.proteins?.length) parts.push(custom.proteins.join(', '));
      if (custom.base) parts.push(custom.base);
      if (custom.sauces?.length) parts.push(`Salsas: ${custom.sauces.join(', ')}`);
      if (custom.extras?.length) parts.push(`Extras: ${custom.extras.join(', ')}`);
      if (custom.gratin) parts.push(custom.gratin);
      if (custom.withMenu) parts.push(`Menú ${custom.drinkSize}`);
      return parts.join(' · ');
    }
    if (fixed) {
      const parts = [];
      if (fixed.withMenu) parts.push(`Menú ${fixed.drinkSize}`);
      if (fixed.kidDrink) parts.push(`Bebida: ${fixed.kidDrink}`);
      return parts.join(' · ');
    }
    return '';
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <span className="cart-item__name">{item.name}</span>
        {details() && <span className="cart-item__details">{details()}</span>}
      </div>
      <div className="cart-item__controls">
        <div className="cart-item__qty">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label="Menos">
            <Minus size={14} />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Más">
            <Plus size={14} />
          </button>
        </div>
        <span className="cart-item__price">{(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}€</span>
        <button className="cart-item__remove" onClick={() => onRemove(item.id)} aria-label="Eliminar">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
