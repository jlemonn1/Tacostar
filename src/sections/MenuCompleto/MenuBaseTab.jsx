import React from 'react';
import { menuData } from '../../data/menuData';
import MenuListItem from './MenuListItem';
import MenuTagList from './MenuTagList';
import MenuBaseCard from './MenuBaseCard';
import './MenuBaseTab.css';

const MenuBaseTab = () => {
  const { baseTacos } = menuData;

  return (
    <div className="menu-base-tab">
      <div className="menu-base-tab__intro">
        <p>{baseTacos.description}</p>
      </div>

      <div className="menu-base-tab__section">
        <h3 className="menu-base-tab__title">Tamaños</h3>
        <ul className="menu-base-tab__list">
          {baseTacos.sizes.map((s) => (
            <MenuListItem key={s.name} name={s.name} price={s.price} />
          ))}
        </ul>
      </div>

      <div className="menu-base-tab__section">
        <h3 className="menu-base-tab__title">Proteínas</h3>
        <MenuTagList items={baseTacos.proteins} />
      </div>

      <div className="menu-base-tab__section">
        <h3 className="menu-base-tab__title">Bases</h3>
        <div className="menu-base-tab__bases">
          {baseTacos.bases.map((b) => (
            <MenuBaseCard key={b.name} name={b.name} items={b.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuBaseTab;
