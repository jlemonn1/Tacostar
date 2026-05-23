import React, { useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './OpenStatusChip.css';

const HOLD_MS = 2000;

const HOURS = {
  0: [],        // Lunes - Cerrado
  1: [[13.5, 16.5], [20, 24]],  // Martes
  2: [[13.5, 16.5], [20, 24]],  // Miércoles
  3: [[13.5, 16.5], [20, 24]],  // Jueves
  4: [[13.5, 16.5], [20, 25]],  // Viernes (hasta 1:00 = 25)
  5: [[13.5, 16.5], [20, 25]],  // Sábado (hasta 1:00 = 25)
  6: [[13.5, 16.5], [20, 24]],  // Domingo
};

function isCurrentlyOpen() {
  const now = new Date();
  const day = now.getDay(); // 0=Domingo, 1=Lunes...
  const time = now.getHours() + now.getMinutes() / 60;
  const ranges = HOURS[day];
  if (!ranges || ranges.length === 0) return false;
  return ranges.some(([start, end]) => time >= start && time < end);
}

const OpenStatusChip = () => {
  const navigate = useNavigate();
  const holdTimer = useRef(null);
  const progressRef = useRef(null);
  const open = useMemo(() => isCurrentlyOpen(), []);

  const clearHold = useCallback(() => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.transform = 'scaleX(0)';
    }
  }, []);

  const startHold = useCallback(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = `transform ${HOLD_MS}ms linear`;
      progressRef.current.style.transform = 'scaleX(1)';
    }
    holdTimer.current = setTimeout(() => {
      navigate('/visor');
      clearHold();
    }, HOLD_MS);
  }, [navigate, clearHold]);

  const handleMouseDown = useCallback(() => {
    startHold();
  }, [startHold]);

  const handleTouchStart = useCallback(() => {
    startHold();
  }, [startHold]);

  return (
    <span
      className={`open-chip ${open ? 'open-chip--open' : 'open-chip--closed'}`}
      onMouseDown={handleMouseDown}
      onMouseUp={clearHold}
      onMouseLeave={clearHold}
      onTouchStart={handleTouchStart}
      onTouchEnd={clearHold}
    >
      <span ref={progressRef} className="open-chip__progress" aria-hidden="true" />
      {open ? 'ABIERTO' : 'CERRADO'}
    </span>
  );
};

export default OpenStatusChip;
