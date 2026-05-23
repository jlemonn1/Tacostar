import { useState, useCallback, useEffect } from 'react';
import { customTacoConfig, fixedProducts, calcCustomPrice, calcFixedPrice } from '../data/orderConfig';

const STORAGE_KEY = 'tacostar_cart';

function migrateCustomItem(item) {
  if (item.type !== 'custom' || !item.custom || item.custom.sizeKey) return item;
  const old = item.custom;
  return {
    ...item,
    custom: {
      sizeKey: customTacoConfig.sizes.find(s => s.name === old.size)?.key || '',
      proteinKeys: (old.proteins || []).map(n => customTacoConfig.proteins.find(p => p.name === n)?.key).filter(Boolean),
      baseKey: customTacoConfig.bases.find(b => b.name === old.base)?.key || '',
      sauceKeys: (old.sauces || []).map(n => customTacoConfig.sauces.find(s => s.name === n)?.key).filter(Boolean),
      extraKeys: (old.extras || []).map(n => customTacoConfig.extras.find(e => e.name === n)?.key).filter(Boolean),
      gratinKey: customTacoConfig.gratins.find(g => g.name === old.gratin)?.key || '',
      withMenu: old.withMenu || false,
      drinkSize: old.drinkSize || '33cl',
    },
  };
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const cart = JSON.parse(raw);
      return cart.map(migrateCustomItem);
    }
  } catch { /* noop */ }
  return [];
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function generateId() {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

export function useCart() {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addCustomItem = useCallback((selection) => {
    const unitPrice = calcCustomPrice(selection);
    const sizeName = customTacoConfig.sizes.find(s => s.key === selection.size)?.name || '';

    const newItem = {
      id: generateId(),
      type: 'custom',
      name: `${sizeName} A tu gusto`,
      unitPrice,
      quantity: 1,
      custom: {
        sizeKey: selection.size,
        proteinKeys: selection.proteins || [],
        baseKey: selection.base,
        sauceKeys: selection.sauces || [],
        extraKeys: selection.extras || [],
        gratinKey: selection.gratin || '',
        withMenu: selection.withMenu || false,
        drinkSize: selection.drinkSize || '33cl',
      },
    };

    setCart(prev => [...prev, newItem]);
    return newItem;
  }, []);

  const addFixedItem = useCallback((productKey, options = {}) => {
    const product = fixedProducts.find(p => p.key === productKey);
    if (!product) return;
    const unitPrice = calcFixedPrice(product, options.withMenu, options.drinkSize);
    const newItem = {
      id: generateId(),
      type: 'fixed',
      name: product.name,
      unitPrice,
      quantity: 1,
      fixed: {
        productKey: product.key,
        category: product.category,
        withMenu: options.withMenu || false,
        drinkSize: options.drinkSize || '33cl',
        kidDrink: options.kidDrink || null,
      },
    };
    setCart(prev => [...prev, newItem]);
    return newItem;
  }, []);

  const removeItem = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const getOrderPayload = useCallback(() => {
    return {
      orderId: generateId(),
      timestamp: new Date().toISOString(),
      items: cart.map(item => ({
        name: item.name,
        unitPrice: item.unitPrice,
        quantity: item.quantity,
        ...(item.type === 'custom' ? { custom: item.custom } : { fixed: item.fixed }),
      })),
      total: parseFloat(total.toFixed(2)),
    };
  }, [cart, total]);

  return {
    cart,
    addCustomItem,
    addFixedItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    total,
    getOrderPayload,
  };
}
