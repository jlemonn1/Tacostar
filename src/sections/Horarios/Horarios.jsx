import React from 'react';
import { Clock, MapPin, Phone, Camera } from 'lucide-react';
import ScrollReveal from '../../components/effects/ScrollReveal/ScrollReveal';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import MapFrame from '../../components/layout/MapFrame/MapFrame';
import { menuData } from '../../data/menuData';
import './Horarios.css';

const Horarios = () => {
  const { hours, contact } = menuData;

  return (
    <section id="horarios" className="horarios section">
      <div className="container">
        <SectionTitle subtitle="Encuéntranos en la calle">
          HORARIOS & CONTACTO
        </SectionTitle>

        <div className="horarios__grid">
          <ScrollReveal direction="left">
            <div className="horarios__flyer">
              <div className="horarios__flyer-header">
                <Clock size={28} className="horarios__flyer-icon" />
                <h3 className="horarios__flyer-title">{hours.title}</h3>
              </div>
              <ul className="horarios__list">
                {hours.days.map((day) => (
                  <li
                    key={day.day}
                    className={`horarios__day ${day.highlight ? 'horarios__day--highlight' : ''}`}
                  >
                    <span className="horarios__day-name">{day.day}</span>
                    <span className="horarios__day-hours">{day.hours}</span>
                    {day.highlight && <span className="horarios__day-badge">FIN DE</span>}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="horarios__flyer horarios__flyer--contact">
              <div className="horarios__flyer-header">
                <MapPin size={28} className="horarios__flyer-icon" />
                <h3 className="horarios__flyer-title">CONTACTO</h3>
              </div>
              <div className="horarios__contact">
                <div className="horarios__contact-row">
                  <MapPin size={20} />
                  <span>{contact.address}</span>
                </div>
                <a href={contact.phoneLink} className="horarios__contact-row horarios__contact-row--link">
                  <Phone size={20} />
                  <span>{contact.phone}</span>
                </a>
                <a
                  href={contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="horarios__contact-row horarios__contact-row--link"
                >
                  <Camera size={20} />
                  <span>{contact.instagram}</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="horarios__map-wrapper">
            <h3 className="horarios__map-title">DONDE ESTAMOS</h3>
            <MapFrame src={contact.mapEmbed} title="Ubicación TacoStar" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Horarios;
