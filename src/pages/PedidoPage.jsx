import React, { useState } from 'react';
import PedidoNavbar from '../components/pedido/PedidoNavbar';
import CategoriaTabs from '../components/pedido/CategoriaTabs';
import ProductoGrid from '../components/pedido/ProductoGrid';
import PersonalizadorModal from '../components/pedido/PersonalizadorModal';
import MenuPrompt from '../components/pedido/MenuPrompt';
import CartDrawer from '../components/pedido/CartDrawer';
import QRModal from '../components/pedido/QRModal';
import { useCart } from '../hooks/useCart';
import { CATEGORY, getProductsByCategory, customTacoConfig } from '../data/orderConfig';
import './PedidoPage.css';

const PedidoPage = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORY.CUSTOM_TACO);
  const [showPersonalizador, setShowPersonalizador] = useState(false);
  const [menuPromptProduct, setMenuPromptProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const {
    cart,
    addCustomItem,
    addFixedItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    total,
    getOrderPayload,
  } = useCart();

  const products = getProductsByCategory(activeCategory);
  const customCount = cart.reduce((sum, item) => item.type === 'custom' ? sum + item.quantity : sum, 0);

  const handleAdd = (product, category) => {
    if (category === CATEGORY.CUSTOM_TACO) {
      setShowPersonalizador(true);
      return;
    }
    if (product.allowsMenu || product.category === 'menuKid') {
      setMenuPromptProduct(product);
      return;
    }
    addFixedItem(product.key);
  };

  const handleCustomAdd = (selection) => {
    addCustomItem(selection);
  };

  const handleMenuConfirm = (options) => {
    if (!menuPromptProduct) return;
    if (menuPromptProduct.category === 'menuKid') {
      addFixedItem(menuPromptProduct.key, { kidDrink: options.drinkSize });
    } else {
      addFixedItem(menuPromptProduct.key, options);
    }
    setMenuPromptProduct(null);
  };

  const handleGenerateQR = () => {
    setShowQR(true);
    setShowCart(false);
  };

  const handleResetOrder = () => {
    clearCart();
    setShowQR(false);
  };

  return (
    <div className="pedido-page">
      <PedidoNavbar itemCount={itemCount} onCartClick={() => setShowCart(true)} />

      <main className="pedido-page__main container">
        <h1 className="pedido-page__title animate-fade-in-up">Haz tu pedido</h1>
        <p className="pedido-page__subtitle animate-fade-in-up delay-1">
          Selecciona una categoría y añade productos a tu cesta
        </p>

        <div className="pedido-page__tabs animate-fade-in-up delay-2">
          <CategoriaTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="pedido-page__grid animate-fade-in-up delay-3">
          {activeCategory === CATEGORY.CUSTOM_TACO ? (
            <div className="pedido-page__custom-cta">
              <div className="pedido-page__custom-card glass graffiti-border">
                <h2 className="pedido-page__custom-title">A tu gusto</h2>
                <p className="pedido-page__custom-desc">
                  Elige tu tamaño, proteínas, base, salsas, extras y gratinación. ¡Crea tu taco perfecto!
                </p>
                <div className="pedido-page__custom-prices">
                  {customTacoConfig.sizes.map(s => (
                    <span key={s.key} className="pedido-page__custom-price-tag">
                      {s.name}: {s.basePrice.toFixed(2).replace('.', ',')}€
                    </span>
                  ))}
                </div>
                <div className="pedido-page__custom-btn-wrap">
                  <button
                    className="pedido-page__custom-btn"
                    onClick={() => setShowPersonalizador(true)}
                  >
                    Crear mi taco
                  </button>
                  {customCount > 0 && (
                    <span className="pedido-page__custom-badge">{customCount}</span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <ProductoGrid products={products} onAdd={handleAdd} category={activeCategory} cart={cart} />
          )}
        </div>
      </main>

      <PersonalizadorModal
        isOpen={showPersonalizador}
        onClose={() => setShowPersonalizador(false)}
        onAdd={handleCustomAdd}
      />

      <MenuPrompt
        isOpen={!!menuPromptProduct}
        product={menuPromptProduct}
        onConfirm={handleMenuConfirm}
        onCancel={() => setMenuPromptProduct(null)}
      />

      <CartDrawer
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
        total={total}
        onGenerateQR={handleGenerateQR}
      />

      <QRModal
        isOpen={showQR}
        onClose={() => setShowQR(false)}
        onReset={handleResetOrder}
        orderData={getOrderPayload()}
      />
    </div>
  );
};

export default PedidoPage;
