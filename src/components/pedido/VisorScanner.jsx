import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, CameraOff } from 'lucide-react';
import './VisorScanner.css';

const VisorScanner = ({ onScan }) => {
  const scannerRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);

  const stopScanning = useCallback(async () => {
    const scanner = scannerRef.current;
    scannerRef.current = null;
    setIsScanning(false);

    if (scanner && typeof scanner.stop === 'function') {
      try {
        await scanner.stop();
      } catch {
        // ignorar errores al detener
      }
    }
  }, []);

  const startScanning = useCallback(async () => {
    if (scannerRef.current) return;

    try {
      const html5QrCode = new Html5Qrcode('visor-scanner');
      scannerRef.current = html5QrCode;

      setIsScanning(true);
      setError(null);

      await html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: (viewfinderWidth, viewfinderHeight) => {
            const min = Math.min(viewfinderWidth, viewfinderHeight);
            const size = Math.floor(min * 0.8);
            return { width: size, height: size };
          },
        },
        (decodedText) => {
          onScan(decodedText);
          try {
            html5QrCode.pause();
            setTimeout(() => {
              if (scannerRef.current) {
                try {
                  html5QrCode.resume();
                } catch {}
              }
            }, 2000);
          } catch {}
        },
        (errorMessage) => {
          // Solo loguea errores de lectura, no el "no QR found" constante
          if (!errorMessage?.includes('No Multi')) {
            console.warn('[Scanner] error de lectura:', errorMessage);
          }
        }
      );
    } catch (err) {
      console.error(err);
      setError('No se pudo iniciar la cámara. Asegúrate de dar permisos.');
      setIsScanning(false);
    }
  }, [onScan]);

  useEffect(() => {
    const timer = setTimeout(() => {
      startScanning();
    }, 300);

    return () => {
      clearTimeout(timer);
      stopScanning();
    };
  }, [startScanning, stopScanning]);

  // cleanup al desmontar
  useEffect(() => {
    return () => {
      stopScanning();
    };
  }, [stopScanning]);

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
