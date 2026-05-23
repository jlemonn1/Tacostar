import React, { useState, useCallback } from 'react';
import VisorScanner from '../components/pedido/VisorScanner';
import VisorPedidoDisplay from '../components/pedido/VisorPedidoDisplay';
import './VisorPage.css';

const VisorPage = () => {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = useCallback((data) => {
    try {
      const parsed = JSON.parse(data);
      setScannedData(parsed);
    } catch (e) {
      console.error('QR inválido', e);
      // No alert para no bloquear el hilo; el scanner ya se detuvo
    }
  }, []);

  const handleReset = useCallback(() => {
    setScannedData(null);
  }, []);

  return (
    <div className="visor-page">
      <div className="visor-page__container">
        <div className="visor-page__scanner">
          {!scannedData ? (
            <VisorScanner onScan={handleScan} />
          ) : (
            <div className="visor-page__scanner-placeholder">
              <h3>Pedido escaneado</h3>
              <button className="visor-page__scanner-retry" onClick={handleReset}>
                Escanear otro
              </button>
            </div>
          )}
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
