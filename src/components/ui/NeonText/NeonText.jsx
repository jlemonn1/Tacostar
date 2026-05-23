import React from 'react';
import './NeonText.css';

const NeonText = ({ children, tag = 'span', color = 'yellow', className = '', flicker = true }) => {
  const Tag = tag;
  return (
    <Tag className={`neon-text neon-text--${color} ${flicker ? 'neon-text--flicker' : ''} ${className}`}>
      {children}
    </Tag>
  );
};

export default NeonText;
