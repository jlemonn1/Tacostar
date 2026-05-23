import React from 'react';
import { menuData } from '../../data/menuData';
import MenuListItem from './MenuListItem';
import './MenuDessertsTab.css';

const MenuDessertsTab = () => {
  const { desserts } = menuData;

  return (
    <div className="menu-desserts-tab">
      <div className="menu-desserts-tab__section">
        <h3 className="menu-desserts-tab__title">Tartas</h3>
        <ul className="menu-desserts-tab__list">
          {desserts.items.map((item) => (
            <MenuListItem key={item} name={item} center />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuDessertsTab;
