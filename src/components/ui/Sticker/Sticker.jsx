import React from 'react';
import './Sticker.css';

const Sticker = ({ children, variant = 'red', rotation = -3, size = '', className = '' }) => {
  const sizeClass = size ? `sticker--${size}` : '';
  return (
    <span
      className={`sticker sticker--${variant} ${sizeClass} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </span>
  );
};

export default Sticker;
