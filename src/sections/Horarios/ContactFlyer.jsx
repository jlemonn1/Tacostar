import React from 'react';
import { MapPin } from 'lucide-react';
import ContactRow from './ContactRow';
import './ContactFlyer.css';

const ContactFlyer = ({ contact }) => {
  return (
    <div className="contact-flyer">
      <div className="contact-flyer__header">
        <MapPin size={28} className="contact-flyer__icon" />
        <h3 className="contact-flyer__title">CONTACTO</h3>
      </div>
      <div className="contact-flyer__content">
        <ContactRow icon="map" text={contact.address} />
        <ContactRow icon="phone" text={contact.phone} href={contact.phoneLink} />
        <ContactRow icon="camera" text={contact.instagram} href={contact.instagramLink} external />
      </div>
    </div>
  );
};

export default ContactFlyer;
