import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './NavbarLogo.css';

const NavbarLogo = ({ onClick }) => {
  const location = useLocation();

  const handleClick = () => {
    if (onClick) onClick();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterLink to="/" className="navbar-logo" onClick={handleClick}>
      <div className="navbar-logo__img-wrapper">
        <img src="/images/tacostar-logo.png" alt="TacoStar" className="navbar-logo__img" />
        <div className="navbar-logo__pulse" aria-hidden="true" />
      </div>
      <span className="navbar-logo__text">TACOSTAR</span>
    </RouterLink>
  );
};

export default NavbarLogo;
