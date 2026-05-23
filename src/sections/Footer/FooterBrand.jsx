import React from 'react';
import './FooterBrand.css';

const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <img
        src="/images/tacostar-logo.png"
        alt="TacoStar"
        className="footer-brand__logo"
      />
      <span className="footer-brand__name">TACOSTAR</span>
    </div>
  );
};

export default FooterBrand;
