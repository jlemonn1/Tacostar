import React from 'react';
import './MenuTagList.css';

const MenuTagList = ({ items }) => {
  return (
    <div className="menu-tag-list">
      {items.map((item) => (
        <span key={item} className="menu-tag-list__tag">{item}</span>
      ))}
    </div>
  );
};

export default MenuTagList;
