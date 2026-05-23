import React from 'react';
import { MapPin, Phone, Camera } from 'lucide-react';
import './ContactRow.css';

const iconMap = {
  map: MapPin,
  phone: Phone,
  camera: Camera,
};

const ContactRow = ({ icon, text, href, external = false }) => {
  const Icon = iconMap[icon] || MapPin;
  const Component = href ? 'a' : 'div';
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Component
      href={href}
      className={`contact-row ${href ? 'contact-row--link' : ''}`}
      {...externalProps}
    >
      <Icon size={20} className="contact-row__icon" />
      <span className="contact-row__text">{text}</span>
    </Component>
  );
};

export default ContactRow;
