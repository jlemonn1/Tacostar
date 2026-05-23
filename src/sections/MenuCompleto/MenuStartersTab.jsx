import React from 'react';
import { menuData } from '../../data/menuData';
import MenuListItem from './MenuListItem';
import './MenuStartersTab.css';

const MenuStartersTab = () => {
  const { starters } = menuData;

  return (
    <div className="menu-starters-tab">
      <ul className="menu-starters-tab__list">
        {starters.items.map((item) => (
          <MenuListItem key={item.name} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
};

export default MenuStartersTab;
