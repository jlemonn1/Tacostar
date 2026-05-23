import React from 'react';
import { useMagnetic } from '../../../hooks/useMagnetic';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './MagneticButton.css';

const MagneticButton = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const reduced = useReducedMotion();
  const magneticRef = useMagnetic(0.25, reduced);
  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={magneticRef}
      className={`magnetic-btn magnetic-btn--${variant} ${className}`}
      onClick={onClick}
      href={href}
      role={href ? 'link' : 'button'}
    >
      <span className="magnetic-btn__content">{children}</span>
      <span className="magnetic-btn__glow" aria-hidden="true" />
    </Component>
  );
};

export default MagneticButton;
