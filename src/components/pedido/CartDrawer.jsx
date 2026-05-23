import React from 'react';
import { X, Plus } from 'lucide-react';
import CartItem from './CartItem';
import CartResumen from './CartResumen';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, total, onGenerateQR }) => {
  return (
    <>
      <div className={`cart-drawer-overlay ${isOpen ? 'cart-drawer-overlay--open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'cart-drawer--open' : ''}`}>
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Tu Pedido</h2>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Cerrar cesta">
            <X size={24} />
          </button>
        </div>

        <div className="cart-drawer__body">
          {cart.length === 0 ? (
            <div className="cart-drawer__empty">
              <p>La cesta está vacía</p>
              <p className="cart-drawer__empty-hint">Añade productos desde el menú</p>
            </div>
          ) : (
            <ul className="cart-drawer__list">
              {cart.map(item => (
                <li key={item.id} className="cart-drawer__list-item">
                  <CartItem
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                  />
                </li>
              ))}
              <li className="cart-drawer__list-item cart-drawer__add-more-wrap">
                <button className="cart-drawer__add-more" onClick={onClose}>
                  <Plus size={16} />
                  Agregar más
                </button>
              </li>
            </ul>
          )}
        </div>

        <div className="cart-drawer__footer">
          <CartResumen total={total} onGenerateQR={onGenerateQR} disabled={cart.length === 0} />
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
