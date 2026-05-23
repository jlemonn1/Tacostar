import React from 'react';
import './SprayDrip.css';

const SprayDrip = ({ color = 'red', height = 60, delay = 0, className = '' }) => {
  return (
    <div
      className={`spray-drip spray-drip--${color} ${className}`}
      style={{ height: `${height}px`, animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <div className="spray-drip__drop" />
      <div className="spray-drip__trail" />
    </div>
  );
};

export default SprayDrip;
