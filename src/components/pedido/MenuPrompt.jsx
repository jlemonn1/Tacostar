import React, { useState } from 'react';
import { X } from 'lucide-react';
import './MenuPrompt.css';

const MenuPrompt = ({ isOpen, product, onConfirm, onCancel }) => {
  const [withMenu, setWithMenu] = useState(false);
  const [drinkSize, setDrinkSize] = useState('33cl');

  if (!isOpen || !product) return null;

  const handleConfirm = () => {
    onConfirm({ withMenu, drinkSize });
    setWithMenu(false);
    setDrinkSize('33cl');
  };

  const handleCancel = () => {
    onCancel();
    setWithMenu(false);
    setDrinkSize('33cl');
  };

  return (
    <div className="menu-prompt-overlay" onClick={handleCancel}>
      <div className="menu-prompt" onClick={e => e.stopPropagation()}>
        <button className="menu-prompt__close" onClick={handleCancel} aria-label="Cerrar">
          <X size={20} />
        </button>
        <h3 className="menu-prompt__title">{product.name}</h3>
        <p className="menu-prompt__price">{product.price.toFixed(2).replace('.', ',')}€</p>

        {product.allowsMenu && (
          <div className="menu-prompt__section">
            <label className="menu-prompt__label">¿Añadir menú?</label>
            <div className="menu-prompt__toggle">
              <button
                className={`menu-prompt__option ${!withMenu ? 'menu-prompt__option--active' : ''}`}
                onClick={() => setWithMenu(false)}
              >
                Solo producto
              </button>
              <button
                className={`menu-prompt__option ${withMenu ? 'menu-prompt__option--active' : ''}`}
                onClick={() => setWithMenu(true)}
              >
                + Menú (+{(product.menuPrice || 2.0).toFixed(2).replace('.', ',')}€)
              </button>
            </div>
            {withMenu && (
              <div className="menu-prompt__drink">
                <label className="menu-prompt__label">Bebida</label>
                <div className="menu-prompt__toggle">
                  <button
                    className={`menu-prompt__option ${drinkSize === '33cl' ? 'menu-prompt__option--active' : ''}`}
                    onClick={() => setDrinkSize('33cl')}
                  >
                    33 cl (incluida)
                  </button>
                  <button
                    className={`menu-prompt__option ${drinkSize === '50cl' ? 'menu-prompt__option--active' : ''}`}
                    onClick={() => setDrinkSize('50cl')}
                  >
                    50 cl (+0,50€)
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {product.category === 'menuKid' && product.kidOptions && (
          <div className="menu-prompt__section">
            <label className="menu-prompt__label">Bebida del niño</label>
            <div className="menu-prompt__toggle">
              {product.kidOptions.drink.map(d => (
                <button
                  key={d}
                  className={`menu-prompt__option ${drinkSize === d ? 'menu-prompt__option--active' : ''}`}
                  onClick={() => setDrinkSize(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        <button className="menu-prompt__confirm" onClick={handleConfirm}>
          Añadir al pedido
        </button>
      </div>
    </div>
  );
};

export default MenuPrompt;
