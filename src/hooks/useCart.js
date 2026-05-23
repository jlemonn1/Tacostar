import { useState, useCallback, useEffect } from 'react';
import { customTacoConfig, fixedProducts, calcCustomPrice, calcFixedPrice } from '../data/orderConfig';

const STORAGE_KEY = 'tacostar_cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
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
    const proteinNames = (selection.proteins || []).map(pk => customTacoConfig.proteins.find(p => p.key === pk)?.name).filter(Boolean);
    const baseName = customTacoConfig.bases.find(b => b.key === selection.base)?.name || '';
    const sauceNames = (selection.sauces || []).map(sk => customTacoConfig.sauces.find(s => s.key === sk)?.name).filter(Boolean);
    const extraNames = (selection.extras || []).map(ek => customTacoConfig.extras.find(e => e.key === ek)?.name).filter(Boolean);
    const gratinName = selection.gratin ? (customTacoConfig.gratins.find(g => g.key === selection.gratin)?.name || '') : '';

    const newItem = {
      id: generateId(),
      type: 'custom',
      name: `${sizeName} A tu gusto`,
      unitPrice,
      quantity: 1,
      custom: {
        size: sizeName,
        proteins: proteinNames,
        base: baseName,
        sauces: sauceNames,
        extras: extraNames,
        gratin: gratinName,
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
