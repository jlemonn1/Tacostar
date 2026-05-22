import React from 'react';
import './GraffitiCard.css';

const GraffitiCard = ({ title, price, items, top = false, className = '' }) => {
  return (
    <div className={`graffiti-card ${top ? 'graffiti-card--top' : ''} ${className}`}>
      {top && <span className="graffiti-card__badge">TOP</span>}
      <div className="graffiti-card__header">
        <h3 className="graffiti-card__title">{title}</h3>
        <span className="graffiti-card__price">{price}</span>
      </div>
      <ul className="graffiti-card__list">
        {items.map((item, i) => (
          <li key={i} className="graffiti-card__item">{item}</li>
        ))}
      </ul>
      <div className="graffiti-card__drip" aria-hidden="true" />
    </div>
  );
};

export default GraffitiCard;
