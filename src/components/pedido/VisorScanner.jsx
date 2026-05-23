import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, CameraOff } from 'lucide-react';
import './VisorScanner.css';

const VisorScanner = ({ onScan }) => {
  const scannerRef = useRef(null);
  const onScanRef = useRef(onScan);
  const scanAreaId = useRef(`visor-scanner-${Math.random().toString(36).substr(2, 9)}`);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    onScanRef.current = onScan;
  }, [onScan]);

  const stopScanning = useCallback(async () => {
    if (!scannerRef.current) return;

    const scanner = scannerRef.current;
    scannerRef.current = null;
    setIsScanning(false);

    try {
      if (scanner && typeof scanner.stop === 'function') {
        await scanner.stop();
      }
    } catch {
      // Ignorar errores al detener
    }
  }, []);

  const startScanning = useCallback(async () => {
    if (scannerRef.current) return;

    console.log('[Scanner] Iniciando...');

    try {
      const html5QrCode = new Html5Qrcode(scanAreaId.current);
      scannerRef.current = html5QrCode;

      setIsScanning(true);
      setError(null);

      await html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          if (!scannerRef.current) return; // Ya procesado
          console.log('[Scanner] QR detectado');
          stopScanning();
          onScanRef.current(decodedText);
        },
        (_errorMessage) => {
          // Ignorar errores de escaneo continuo (no hay QR en pantalla)
        }
      );

      console.log('[Scanner] Cámara iniciada correctamente.');
    } catch (err) {
      console.error('[Scanner] Fallo al iniciar:', err);
      setError('No se pudo iniciar la cámara. Asegúrate de dar permisos.');
      setIsScanning(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      startScanning();
    }, 300);

    return () => {
      clearTimeout(timer);
      stopScanning();
    };
  }, [startScanning, stopScanning]);

  return (
    <div className="visor-scanner">
      <div id={scanAreaId.current} className="visor-scanner__viewport" />
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
