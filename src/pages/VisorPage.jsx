import React, { useState } from 'react';
import VisorScanner from '../components/pedido/VisorScanner';
import VisorPedidoDisplay from '../components/pedido/VisorPedidoDisplay';
import './VisorPage.css';

const VisorPage = () => {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (data) => {
    try {
      const parsed = JSON.parse(data);
      setScannedData(parsed);
    } catch (e) {
      console.error('QR inválido', e);
      alert('Código QR no válido');
    }
  };

  const handleReset = () => {
    setScannedData(null);
  };

  return (
    <div className="visor-page">
      <div className="visor-page__container">
        <div className="visor-page__scanner">
          <VisorScanner onScan={handleScan} />
        </div>
        <div className="visor-page__display">
          {scannedData ? (
            <VisorPedidoDisplay data={scannedData} onReset={handleReset} />
          ) : (
            <div className="visor-page__placeholder">
              <h2 className="visor-page__placeholder-title">Visor de Cocina</h2>
              <p className="visor-page__placeholder-text">
                Apunta la cámara al QR del pedido para ver los detalles aquí.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisorPage;
