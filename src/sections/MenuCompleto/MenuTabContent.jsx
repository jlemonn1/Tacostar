import React from 'react';
import MenuBaseTab from './MenuBaseTab';
import MenuTopGratensTab from './MenuTopGratensTab';
import MenuVegetarianTab from './MenuVegetarianTab';
import MenuStartersTab from './MenuStartersTab';
import MenuExtrasTab from './MenuExtrasTab';
import MenuDessertsTab from './MenuDessertsTab';
import './MenuTabContent.css';

const MenuTabContent = ({ activeTab }) => {
  const renderTab = () => {
    switch (activeTab) {
      case 'base': return <MenuBaseTab />;
      case 'top': return <MenuTopGratensTab />;
      case 'vegetarian': return <MenuVegetarianTab />;
      case 'starters': return <MenuStartersTab />;
      case 'extras': return <MenuExtrasTab />;
      case 'desserts': return <MenuDessertsTab />;
      default: return null;
    }
  };

  return (
    <div className="menu-tab-content" key={activeTab}>
      {renderTab()}
    </div>
  );
};

export default MenuTabContent;
