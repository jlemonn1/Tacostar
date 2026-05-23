import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, CameraOff } from 'lucide-react';
import './VisorScanner.css';

const VisorScanner = ({ onScan }) => {
  const scannerRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let scanner;
    const start = async () => {
      try {
        scanner = new Html5Qrcode('visor-scanner');
        scannerRef.current = scanner;
        await scanner.start(
          { facingMode: 'environment' },
          { fps: 10, qrbox: { width: 220, height: 220 } },
          (decodedText) => {
            onScan(decodedText);
            // Detener brevemente para no escanear repetidamente
            scanner.pause();
            setTimeout(() => scanner.resume(), 2000);
          },
          () => {}
        );
        setIsScanning(true);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('No se pudo iniciar la cámara. Asegúrate de dar permisos.');
        setIsScanning(false);
      }
    };

    start();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, [onScan]);

  return (
    <div className="visor-scanner">
      <div id="visor-scanner" className="visor-scanner__viewport" />
      {!isScanning && !error && (
        <div className="visor-scanner__loading">
          <Camera size={48} className="animate-pulse" />
          <p>Iniciando cámara...</p>
        </div>
      )}
      {error && (
        <div className="visor-scanner__error">
          <CameraOff size={48} />
          <p>{error}</p>
        </div>
      )}
      <div className="visor-scanner__frame">
        <span className="visor-scanner__corner visor-scanner__corner--tl" />
        <span className="visor-scanner__corner visor-scanner__corner--tr" />
        <span className="visor-scanner__corner visor-scanner__corner--bl" />
        <span className="visor-scanner__corner visor-scanner__corner--br" />
      </div>
    </div>
  );
};

export default VisorScanner;
