import React from 'react';
import { Camera, Phone, MapPin } from 'lucide-react';
import { menuData } from '../../data/menuData';
import './FooterSocials.css';

const FooterSocials = () => {
  const { contact } = menuData;

  return (
    <div className="footer-socials">
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
  );
};

export default FooterSocials;
