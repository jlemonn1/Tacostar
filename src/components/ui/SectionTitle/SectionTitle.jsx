import React from 'react';
import SprayText from '../SprayText/SprayText';
import './SectionTitle.css';

const SectionTitle = ({ children, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`section-title section-title--${align} ${className}`}>
      <SprayText tag="h2" className="spray-text--lg">
        {children}
      </SprayText>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
      <div className="section-title__underline" aria-hidden="true" />
    </div>
  );
};

export default SectionTitle;
