import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useParallax
 * @param {number} speed - Multiplicador de velocidad (0.1 = lento, 1.5 = rápido)
 * @param {boolean} reducedMotion - Si true, desactiva el efecto
 * @returns {{ ref: React.RefObject, style: React.CSSProperties }}
 *
 * Desktop: usa window.scrollY
 * Mobile: usa DeviceOrientation (gyro) si está disponible y permitido
 */
export function useParallax(speed = 0.5, reducedMotion = false) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(null);
  const gyroRef = useRef({ beta: 0, gamma: 0 });

  const handleScroll = useCallback(() => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const scrollProgress = -rect.top;
    const newOffset = scrollProgress * (1 - speed);
    setOffset(newOffset);
  }, [speed, reducedMotion]);

  const smoothUpdate = useCallback(() => {
    handleScroll();
    rafRef.current = requestAnimationFrame(smoothUpdate);
  }, [handleScroll]);

  useEffect(() => {
    if (reducedMotion) return;

    // Desktop: scroll-based
    rafRef.current = requestAnimationFrame(smoothUpdate);

    // Mobile: gyroscope enhancement (progressive enhancement)
    let orientationHandler = null;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile && window.DeviceOrientationEvent) {
      orientationHandler = (e) => {
        if (reducedMotion) return;
        // beta: front-to-back (-180 to 180), gamma: left-to-right (-90 to 90)
        gyroRef.current = {
          beta: (e.beta || 0) / 90,
          gamma: (e.gamma || 0) / 90,
        };
        // Blend scroll offset with gyro
        const gyroOffset = (gyroRef.current.beta * 30 + gyroRef.current.gamma * 15);
        setOffset((prev) => prev + gyroOffset * (1 - speed) * 0.1);
      };

      // iOS 13+ requires permission
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // Permission will be requested on first user interaction elsewhere; we just listen
        window.addEventListener('deviceorientation', orientationHandler);
      } else {
        window.addEventListener('deviceorientation', orientationHandler);
      }
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (orientationHandler) {
        window.removeEventListener('deviceorientation', orientationHandler);
      }
    };
  }, [smoothUpdate, reducedMotion, speed]);

  const style = reducedMotion
    ? {}
    : { transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform' };

  return { ref, style };
}
