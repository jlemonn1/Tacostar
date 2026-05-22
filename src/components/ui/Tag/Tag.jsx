import React from 'react';
import './Tag.css';

const Tag = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={`tag tag--${variant} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
