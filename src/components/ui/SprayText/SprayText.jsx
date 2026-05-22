import React from 'react';
import './SprayText.css';

const SprayText = ({ children, tag = 'h2', className = '', delay = 0 }) => {
  const Tag = tag;
  return (
    <Tag
      className={`spray-text ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
};

export default SprayText;
