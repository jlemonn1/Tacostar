import React from 'react';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterSocials from './FooterSocials';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__watermark" aria-hidden="true">TACOSTAR</div>
      <div className="container">
        <div className="footer__content">
          <FooterBrand />
          <FooterLinks />
          <FooterSocials />
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} TacoStar. Todos los derechos reservados.
          </p>
          <p className="footer__city">Toledo — España</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
