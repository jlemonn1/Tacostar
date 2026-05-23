import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import './PedidoNavbar.css';

const PedidoNavbar = ({ itemCount, onCartClick }) => {
  return (
    <nav className="pedido-navbar">
      <div className="pedido-navbar__container container">
        <Link to="/" className="pedido-navbar__back">
          <ArrowLeft size={20} />
          <span>Volver</span>
        </Link>
        <div className="pedido-navbar__brand">
          <img src="/images/tacostar-logo.png" alt="TacoStar" className="pedido-navbar__logo" />
          <span className="pedido-navbar__title">PEDIDOS</span>
        </div>
        <button className="pedido-navbar__cart" onClick={onCartClick} aria-label="Ver cesta">
          <ShoppingCart size={22} />
          {itemCount > 0 && (
            <span className="pedido-navbar__badge">{itemCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default PedidoNavbar;
