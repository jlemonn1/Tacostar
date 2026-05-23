import { useEffect, useRef, useCallback } from 'react';

/**
 * useMagnetic
 * @param {number} strength - Intensidad del efecto magnético (0.3 = suave, 0.6 = fuerte)
 * @param {boolean} reducedMotion - Si true, desactiva
 * @returns {React.RefObject}
 */
export function useMagnetic(strength = 0.3, reducedMotion = false) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  const animate = useCallback(() => {
    current.current.x = lerp(current.current.x, target.current.x, 0.15);
    current.current.y = lerp(current.current.y, target.current.y, 0.15);

    if (ref.current) {
      ref.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices (no hover)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      target.current = {
        x: distX * strength,
        y: distY * strength,
      };
    };

    const handleMouseLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, strength, reducedMotion]);

  return ref;
}
