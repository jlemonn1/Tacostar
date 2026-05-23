import React from 'react';
import './MenuListItem.css';

const MenuListItem = ({ name, price, center = false }) => {
  return (
    <li className={`menu-list-item ${center ? 'menu-list-item--center' : ''}`}>
      <span className="menu-list-item__name">{name}</span>
      {!center && <span className="menu-list-item__dots" />}
      {price && <span className="menu-list-item__price">{price}</span>}
    </li>
  );
};

export default MenuListItem;
