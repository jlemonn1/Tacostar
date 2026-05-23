import React from 'react';
import { RotateCcw, Clock, Hash } from 'lucide-react';
import './VisorPedidoDisplay.css';

const VisorPedidoDisplay = ({ data, onReset }) => {
  if (!data || !data.items) return null;

  const formatDate = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    return d.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', day: '2-digit', month: '2-digit' });
  };

  return (
    <div className="visor-display">
      <div className="visor-display__header">
        <div className="visor-display__meta">
          <span className="visor-display__meta-item">
            <Hash size={14} /> {data.orderId?.slice(-6).toUpperCase() || '---'}
          </span>
          <span className="visor-display__meta-item">
            <Clock size={14} /> {formatDate(data.timestamp)}
          </span>
        </div>
        <button className="visor-display__reset" onClick={onReset}>
          <RotateCcw size={16} /> Escanear otro
        </button>
      </div>

      <ul className="visor-display__list">
        {data.items.map((item, idx) => (
          <li key={idx} className="visor-display__item">
            <div className="visor-display__item-main">
              <span className="visor-display__item-name">{item.name}</span>
              <span className="visor-display__item-qty">x{item.quantity}</span>
            </div>
            {item.custom && (
              <div className="visor-display__item-details">
                {item.custom.size && <span>{item.custom.size}</span>}
                {item.custom.proteins?.length > 0 && <span>Proteínas: {item.custom.proteins.join(', ')}</span>}
                {item.custom.base && <span>Base: {item.custom.base}</span>}
                {item.custom.sauces?.length > 0 && <span>Salsas: {item.custom.sauces.join(', ')}</span>}
                {item.custom.extras?.length > 0 && <span>Extras: {item.custom.extras.join(', ')}</span>}
                {item.custom.gratin && <span>{item.custom.gratin}</span>}
                {item.custom.withMenu && <span>Menú {item.custom.drinkSize}</span>}
              </div>
            )}
            {item.fixed && (
              <div className="visor-display__item-details">
                {item.fixed.withMenu && <span>Menú {item.fixed.drinkSize}</span>}
                {item.fixed.kidDrink && <span>Bebida: {item.fixed.kidDrink}</span>}
              </div>
            )}
            <div className="visor-display__item-price">
              {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}€
            </div>
          </li>
        ))}
      </ul>

      <div className="visor-display__total">
        <span className="visor-display__total-label">Total del pedido</span>
        <span className="visor-display__total-amount">{data.total?.toFixed(2).replace('.', ',')}€</span>
      </div>
    </div>
  );
};

export default VisorPedidoDisplay;
