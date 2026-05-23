import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { customTacoConfig } from '../../data/orderConfig';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const custom = item.custom;
  const fixed = item.fixed;

  const details = () => {
    if (custom) {
      const parts = [];
      const size = customTacoConfig.sizes.find(s => s.key === custom.sizeKey);
      if (size) parts.push(size.name);
      if (custom.proteinKeys?.length) {
        const names = custom.proteinKeys.map(k => customTacoConfig.proteins.find(p => p.key === k)?.name).filter(Boolean);
        if (names.length) parts.push(names.join(', '));
      }
      const base = customTacoConfig.bases.find(b => b.key === custom.baseKey);
      if (base) parts.push(base.name);
      if (custom.sauceKeys?.length) {
        const names = custom.sauceKeys.map(k => customTacoConfig.sauces.find(s => s.key === k)?.name).filter(Boolean);
        if (names.length) parts.push(`Salsas: ${names.join(', ')}`);
      }
      if (custom.extraKeys?.length) {
        const names = custom.extraKeys.map(k => customTacoConfig.extras.find(e => e.key === k)?.name).filter(Boolean);
        if (names.length) parts.push(`Extras: ${names.join(', ')}`);
      }
      const gratin = customTacoConfig.gratins.find(g => g.key === custom.gratinKey);
      if (gratin) parts.push(gratin.name);
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
