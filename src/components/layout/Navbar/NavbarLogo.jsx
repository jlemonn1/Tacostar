import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './NavbarLogo.css';

const NavbarLogo = ({ onClick }) => {
  return (
    <RouterLink to="/" className="navbar-logo" onClick={onClick}>
      <div className="navbar-logo__img-wrapper">
        <img src="/images/tacostar-logo.png" alt="TacoStar" className="navbar-logo__img" />
        <div className="navbar-logo__pulse" aria-hidden="true" />
      </div>
      <span className="navbar-logo__text">TACOSTAR</span>
    </RouterLink>
  );
};

export default NavbarLogo;
