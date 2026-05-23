import React, { useState, useEffect } from 'react';
import NavbarLogo from './NavbarLogo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <NavbarLogo onClick={closeMenu} />
        <div className="navbar__desktop">
          <NavLinks onClick={closeMenu} />
        </div>
        <MobileMenu isOpen={isOpen} onToggle={toggleMenu} onClose={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
