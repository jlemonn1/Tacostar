import React from 'react';
import './MenuBaseCard.css';

const MenuBaseCard = ({ name, items }) => {
  return (
    <div className="menu-base-card">
      <h4 className="menu-base-card__name">{name}</h4>
      <ul className="menu-base-card__items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBaseCard;
