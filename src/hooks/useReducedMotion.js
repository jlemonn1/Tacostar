import { useState, useEffect } from 'react';

/**
 * useReducedMotion
 * Detecta si el usuario prefiere reduced motion
 * @returns {boolean}
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);

    const handleChange = (e) => setReduced(e.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  return reduced;
}
