import React from 'react';
import { Menu, X, Phone, Camera } from 'lucide-react';
import NavLinks from './NavLinks';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onToggle, onClose }) => {
  return (
    <>
      <button
        className="mobile-menu__toggle"
        onClick={onToggle}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__overlay" onClick={onClose} aria-hidden="true" />
        <div className="mobile-menu__panel">
          <NavLinks onClick={onClose} vertical />
          <div className="mobile-menu__socials">
            <a href="tel:+34639140346" className="mobile-menu__icon" aria-label="Llamar">
              <Phone size={20} />
            </a>
            <a href="https://www.instagram.com/tacostar10" target="_blank" rel="noopener noreferrer" className="mobile-menu__icon" aria-label="Instagram">
              <Camera size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
