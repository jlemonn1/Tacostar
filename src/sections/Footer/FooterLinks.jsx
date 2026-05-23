import React from 'react';
import './FooterLinks.css';

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Orígenes' },
  { href: '#menu-completo', label: 'Menú' },
  { href: '#horarios', label: 'Contacto' },
];

const FooterLinks = () => {
  return (
    <nav className="footer-links">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="footer-links__link">
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;
