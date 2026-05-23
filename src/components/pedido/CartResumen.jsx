import React from 'react';
import { QrCode } from 'lucide-react';
import './CartResumen.css';

const CartResumen = ({ total, onGenerateQR, disabled }) => {
  return (
    <div className="cart-resumen">
      <div className="cart-resumen__row">
        <span className="cart-resumen__label">Total</span>
        <span className="cart-resumen__price">{total.toFixed(2).replace('.', ',')}€</span>
      </div>
      <button
        className="cart-resumen__cta"
        onClick={onGenerateQR}
        disabled={disabled}
      >
        <QrCode size={20} />
        Generar QR
      </button>
    </div>
  );
};

export default CartResumen;
