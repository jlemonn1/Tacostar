import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
      href={href}
      role={href ? 'link' : 'button'}
    >
      {children}
    </Component>
  );
};

export default Button;
