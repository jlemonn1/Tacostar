import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone, Camera } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { to: 'hero', label: 'Inicio' },
  { to: 'about', label: 'Orígenes' },
  { to: 'top-gratens', label: 'Top Gratens' },
  { to: 'menu-builder', label: 'Crea tu Taco' },
  { to: 'menu-completo', label: 'Menú' },
  { to: 'horarios', label: 'Horarios' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar__logo"
          onClick={closeMenu}
        >
          <img src="/images/tacostar-logo.png" alt="TacoStar" className="navbar__logo-img" />
          <span className="navbar__logo-text">TACOSTAR</span>
        </Link>

        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="navbar__item">
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="navbar__link--active"
                className="navbar__link"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar__item navbar__item--socials">
            <a href="tel:+34639140346" className="navbar__icon" aria-label="Llamar">
              <Phone size={20} />
            </a>
            <a href="https://www.instagram.com/tacostar10" target="_blank" rel="noopener noreferrer" className="navbar__icon" aria-label="Instagram">
              <Camera size={20} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
