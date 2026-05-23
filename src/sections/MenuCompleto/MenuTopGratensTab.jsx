import React from 'react';
import { menuData } from '../../data/menuData';
import MenuCard from './MenuCard';
import './MenuTopGratensTab.css';

const MenuTopGratensTab = () => {
  const { topGratens } = menuData;

  return (
    <div className="menu-top-gratens-tab">
      <div className="menu-top-gratens-tab__grid">
        {topGratens.items.map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            price={item.price}
            ingredients={item.ingredients}
            top={item.top}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuTopGratensTab;
