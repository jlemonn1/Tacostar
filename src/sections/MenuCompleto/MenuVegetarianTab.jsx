import React from 'react';
import { menuData } from '../../data/menuData';
import MenuCard from './MenuCard';
import './MenuVegetarianTab.css';

const MenuVegetarianTab = () => {
  const { vegetarian } = menuData;

  return (
    <div className="menu-vegetarian-tab">
      <div className="menu-vegetarian-tab__grid">
        {vegetarian.items.map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            price={item.price}
            ingredients={item.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuVegetarianTab;
