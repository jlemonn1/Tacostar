import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './NavLinks.css';

const scrollLinks = [
  { to: 'hero', label: 'Inicio' },
  { to: 'about', label: 'Orígenes' },
  { to: 'menu-completo', label: 'Menú' },
  { to: 'horarios', label: 'Contacto' },
];

const NavLinks = ({ onClick, vertical = false }) => {
  return (
    <ul className={`nav-links ${vertical ? 'nav-links--vertical' : ''}`}>
      {scrollLinks.map((link) => (
        <li key={link.to} className="nav-links__item">
          <Link
            to={link.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="nav-links__link--active"
            className="nav-links__link"
            onClick={onClick}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li className="nav-links__item">
        <RouterLink
          to="/pedido"
          className="nav-links__link nav-links__link--highlight"
          onClick={onClick}
        >
          <ShoppingCart size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} />
          Pedir
        </RouterLink>
      </li>
    </ul>
  );
};

export default NavLinks;
