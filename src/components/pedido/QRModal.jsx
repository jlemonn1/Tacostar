import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, RotateCcw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import './QRModal.css';

const QRModal = ({ isOpen, onClose, onReset, orderData }) => {
  if (!isOpen || !orderData) return null;

  const jsonString = JSON.stringify(orderData);

  return (
    <div className="qr-modal-overlay" onClick={onClose}>
      <div className="qr-modal" onClick={e => e.stopPropagation()}>
        <button className="qr-modal__close" onClick={onClose} aria-label="Cerrar">
          <X size={24} />
        </button>

        <h2 className="qr-modal__title">¡Pedido listo!</h2>
        <p className="qr-modal__subtitle">Escanea este QR en el visor de cocina</p>

        <div className="qr-modal__code">
          <QRCodeSVG
            value={jsonString}
            size={300}
            level="H"
            bgColor="#0B0C10"
            fgColor="#F1FAEE"
            includeMargin={false}
          />
        </div>

        <div className="qr-modal__info">
          <span className="qr-modal__total-label">Total:</span>
          <span className="qr-modal__total-price">{orderData.total.toFixed(2).replace('.', ',')}€</span>
        </div>

        <div className="qr-modal__actions">
          <button className="qr-modal__btn qr-modal__btn--secondary" onClick={onReset}>
            <RotateCcw size={16} /> Nuevo pedido
          </button>
          <Link to="/" className="qr-modal__btn qr-modal__btn--primary" onClick={onClose}>
            <Home size={16} /> Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
