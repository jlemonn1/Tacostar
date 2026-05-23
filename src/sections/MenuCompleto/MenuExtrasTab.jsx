import React from 'react';
import { menuData } from '../../data/menuData';
import MenuListItem from './MenuListItem';
import NeonText from '../../components/ui/NeonText/NeonText';
import './MenuExtrasTab.css';

const MenuExtrasTab = () => {
  const { extras, menuCombo } = menuData;

  return (
    <div className="menu-extras-tab">
      <div className="menu-extras-tab__section">
        <h3 className="menu-extras-tab__title">Gratinados</h3>
        <ul className="menu-extras-tab__list">
          {extras.gratinated.map((item) => (
            <MenuListItem key={item.name} name={item.name} price={item.price} />
          ))}
        </ul>
      </div>

      <div className="menu-extras-tab__section">
        <h3 className="menu-extras-tab__title">Ingredientes extra</h3>
        <ul className="menu-extras-tab__list">
          {extras.ingredients.map((item) => (
            <MenuListItem key={item.name} name={item.name} price={item.price} />
          ))}
        </ul>
      </div>

      <div className="menu-extras-tab__section">
        <h3 className="menu-extras-tab__title">Patatas y bebidas</h3>
        <ul className="menu-extras-tab__list">
          {extras.sides.map((item) => (
            <MenuListItem key={item.name} name={item.name} price={item.price} />
          ))}
        </ul>
      </div>

      <div className="menu-extras-tab__highlight">
        <h3 className="menu-extras-tab__title">
          <NeonText tag="span" color="yellow">Menú y Bebidas</NeonText>
        </h3>
        <p className="menu-extras-tab__text">{menuCombo.description}</p>
        <p className="menu-extras-tab__accent">{menuCombo.upgrade}</p>
      </div>
    </div>
  );
};

export default MenuExtrasTab;
