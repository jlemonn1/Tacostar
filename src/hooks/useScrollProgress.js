import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useScrollProgress
 * @returns {{ ref: React.RefObject, progress: number }}
 * progress: 0 (top of element at bottom of viewport) → 1 (bottom of element at top of viewport)
 */
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  const calculate = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;

    // Progress: 0 when element top enters viewport bottom
    // Progress: 1 when element bottom leaves viewport top
    const start = windowHeight;
    const end = -elementHeight;
    const current = rect.top;
    const rawProgress = (start - current) / (start - end);
    const clamped = Math.max(0, Math.min(1, rawProgress));
    setProgress(clamped);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calculate);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    calculate();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [calculate]);

  return { ref, progress };
}
