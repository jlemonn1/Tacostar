import React from 'react';
import { Camera, Phone, MapPin } from 'lucide-react';
import { menuData } from '../../data/menuData';
import './Footer.css';

const Footer = () => {
  const { contact } = menuData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <img
              src="/images/tacostar-logo.png"
              alt="TacoStar"
              className="footer__logo"
            />
            <span className="footer__name">TACOSTAR</span>
          </div>
          <div className="footer__links">
            <a href="#hero" className="footer__link">Inicio</a>
            <a href="#about" className="footer__link">Orígenes</a>
            <a href="#menu-completo" className="footer__link">Menú</a>
            <a href="#horarios" className="footer__link">Contacto</a>
          </div>
          <div className="footer__socials">
            <a href={contact.instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Camera size={22} />
            </a>
            <a href={contact.phoneLink} aria-label="Llamar">
              <Phone size={22} />
            </a>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" aria-label="Mapa">
              <MapPin size={22} />
            </a>
          </div>
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
