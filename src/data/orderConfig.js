// ============================================
// TACOSTAR — Configuración del Sistema de Pedidos
// ============================================

export const CATEGORY = {
  CUSTOM_TACO: 'customTaco',
  TOP_TACO: 'topTaco',
  TOP_GRATEN: 'topGraten',
  TOP_VEGETARIAN: 'topVegetarian',
  COMPLEMENT: 'complement',
  MENU_KID: 'menuKid',
  DESSERT: 'dessert',
};

export const CATEGORIES = [
  { key: CATEGORY.CUSTOM_TACO, label: 'A tu gusto', icon: 'utensils' },
  { key: CATEGORY.TOP_TACO, label: 'Top Tacos', icon: 'flame' },
  { key: CATEGORY.TOP_GRATEN, label: 'Top Gratens', icon: 'cooking-pot' },
  { key: CATEGORY.TOP_VEGETARIAN, label: 'Top Veggie', icon: 'leaf' },
  { key: CATEGORY.COMPLEMENT, label: 'Complementos', icon: 'french-fries' },
  { key: CATEGORY.MENU_KID, label: 'Menú Kids', icon: 'baby' },
  { key: CATEGORY.DESSERT, label: 'Postres', icon: 'ice-cream' },
];

// ─── "A TU GUSTO" ───
export const customTacoConfig = {
  sizes: [
    { key: 'simple', name: 'Taco Simple', basePrice: 5.90, maxProteins: 1, menuPrice: 2.00 },
    { key: 'doble', name: 'Taco Doble', basePrice: 7.90, maxProteins: 2, menuPrice: 2.00 },
    { key: 'maxi', name: 'Taco Maxi', basePrice: 9.90, maxProteins: 3, menuPrice: 2.50 },
    { key: 'graten', name: 'Graten Unisize', basePrice: 8.00, maxProteins: 1, menuPrice: 2.00 },
  ],
  proteins: [
    { key: 'pollo', name: 'Pollo', extraPrice: 0 },
    { key: 'carne_picada', name: 'Carne picada', extraPrice: 0 },
    { key: 'san_jacobo', name: 'San Jacobo', extraPrice: 0 },
    { key: 'nuggets_pollo', name: 'Nuggets de pollo', extraPrice: 0 },
    { key: 'kebab', name: 'Kebab', extraPrice: 0 },
    { key: 'chicken_tenders', name: 'Chicken tenders', extraPrice: 0 },
    { key: 'salchichas', name: 'Salchichas', extraPrice: 0 },
    { key: 'carne_vegetariana', name: 'Carne vegetariana', extraPrice: 0.50 },
    { key: 'nuggets_vegetarianos', name: 'Nuggets vegetarianos', extraPrice: 0.50 },
  ],
  bases: [
    { key: 'base1', name: 'Base 1', description: 'salsa de queso + patatas', extraPrice: 0 },
    { key: 'base2', name: 'Base 2', description: 'salsa de queso + patatas + tchouk-tchouka', extraPrice: 0.50 },
    { key: 'base3', name: 'Base 3', description: 'salsa de queso + patatas + cebolla + tomates + lechuga', extraPrice: 1.00 },
  ],
  sauces: [
    { key: 'pili_pili', name: 'Pili-Pili' },
    { key: 'chilitai', name: 'Chilitai' },
    { key: 'samurai', name: 'Samurai' },
    { key: 'argelina', name: 'Argelina' },
    { key: 'marroqui', name: 'Marroqui' },
    { key: 'biggy_burger', name: 'Biggy Burger' },
    { key: 'cream_cheese', name: 'Cream Cheese' },
    { key: 'andaluza', name: 'Andaluza' },
    { key: 'magic_onion', name: 'Magic Onion' },
    { key: 'salsa_kebab', name: 'Salsa Kebab' },
    { key: 'barbacoa', name: 'Barbacoa' },
  ],
  extras: [
    { key: 'aceitunas_negras', name: 'Aceitunas negras', extraPrice: 0.50 },
    { key: 'cheddar', name: 'Cheddar', extraPrice: 0.50 },
    { key: 'gouda', name: 'Gouda', extraPrice: 0.50 },
    { key: 'pimientos', name: 'Pimientos', extraPrice: 0.50 },
    { key: 'aceitunas_verdes', name: 'Aceitunas verdes', extraPrice: 0.50 },
    { key: 'queso_cabra', name: 'Queso de cabra', extraPrice: 0.50 },
    { key: 'champinones', name: 'Champiñones', extraPrice: 0.50 },
    { key: 'vacaquerie', name: 'Vacaquerie', extraPrice: 0.50 },
    { key: 'jalapenos', name: 'Jalapeños', extraPrice: 0.50 },
    { key: 'bacon', name: 'Bacon', extraPrice: 0.70 },
    { key: 'huevos_cocidos', name: 'Huevos cocidos', extraPrice: 0.70 },
  ],
  gratins: [
    { key: 'mozzarella', name: 'Gratinado Mozzarella', extraPrice: 1.00 },
    { key: 'bacon', name: 'Gratinado Bacon', extraPrice: 1.70 },
    { key: 'cheddar', name: 'Queso Cheddar', extraPrice: 1.50 },
    { key: 'pimientos_aceitunas_cabra', name: 'Pimientos + Aceitunas verdes + Queso de cabra', extraPrice: 2.00 },
    { key: 'queso_cabra', name: 'Queso de cabra', extraPrice: 1.50 },
  ],
};

// ─── PRODUCTOS FIJOS ───
export const fixedProducts = [
  // TOP TACOS
  { category: CATEGORY.TOP_TACO, key: 'tac_autentico', name: 'Tac Autentico', price: 8.40, tacoSize: 'doble', description: 'carne picada, pollo fresco, argelina, BBQ, extra cheddar', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_TACO, key: 'tac_burger', name: 'Tac Burger', price: 8.90, tacoSize: 'simple', description: 'carne picada, lechuga, tomate, cebolla, biggy, cheddar, gratinado cheddar y cebolla frita', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_TACO, key: 'tac_kratos', name: 'Tac Kratos', price: 9.90, tacoSize: 'doble', description: 'carne picada, salchichas, marroqui, aros de cebolla, gratinado con cheddar', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_TACO, key: 'tacostar', name: 'Tacostar', price: 12.10, tacoSize: 'maxi', description: 'chicken tenders, san-jacobo, kebab, argelina, biggy, gratinado con bacon y mozarella', allowsMenu: true, menuPrice: 2.50 },
  { category: CATEGORY.TOP_TACO, key: 'tac_mo', name: 'Tac Mo', price: 8.90, tacoSize: 'doble', description: 'chicken tenders, kebab, andaluza, argelena, pimientos y aceitunas verdes', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_TACO, key: 'tac_kebab', name: 'Tac Kebab', price: 8.40, tacoSize: 'simple', description: 'carne kebab, base 3, gratinado con mozza y cebolla frita', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_TACO, key: 'chevre_miel', name: 'Chèvre Miel', price: 9.40, tacoSize: 'doble', description: 'pollo x2, gratinado con Q.de cabra y miel', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_TACO, key: 'tac_nemo', name: 'Tac Nemo', price: 9.90, tacoSize: 'doble', description: 'pollo, san jacobo, biggy, gratinado con bacon y raclette', allowsMenu: true, menuPrice: 2.00 },

  // TOP GRATENS
  { category: CATEGORY.TOP_GRATEN, key: 'el_oslo', name: 'El Oslo', price: 9.00, description: 'carne picada, biggy, cheddar, gratinado mozzarella', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_GRATEN, key: 'la_montana', name: 'La Montaña', price: 9.60, description: 'pollo fresco, magic ognion, vacaquerie, gratinado con bacon', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_GRATEN, key: 'la_raclette', name: 'La Raclette', price: 9.50, description: 'chicken tenders, gouda, gratinado con raclette', allowsMenu: true, menuPrice: 2.00 },

  // TOP VEGETARIANS
  { category: CATEGORY.TOP_VEGETARIAN, key: 'special_v', name: 'Special V', price: 9.30, tacoSize: 'doble', description: 'carne vegetariana, lechuga, tomate, cebolla', allowsMenu: true, menuPrice: 2.00 },
  { category: CATEGORY.TOP_VEGETARIAN, key: 'el_veggie', name: 'El Veggie', price: 9.90, tacoSize: 'doble', description: 'carne vegetariana, cebolla, pimientos, aguacate', allowsMenu: true, menuPrice: 2.00 },

  // COMPLEMENTOS
  { category: CATEGORY.COMPLEMENT, key: 'aros_cebolla', name: 'Aros de cebolla', price: 2.00, description: 'Crujientes, dorados y adictivos. No juzgamos si pides doble.', allowsMenu: false },
  { category: CATEGORY.COMPLEMENT, key: 'bolitas_camembert', name: 'Bolitas de camembert', price: 3.00, description: 'Queso fundido en estado puro. Cuidado, explotan de sabor.', allowsMenu: false },
  { category: CATEGORY.COMPLEMENT, key: 'jalapenos_queso', name: 'Jalapeños con queso', price: 3.50, description: 'Para los valientes. Pica, pero pica bien.', allowsMenu: false },
  { category: CATEGORY.COMPLEMENT, key: 'chicken_tenders', name: 'Chicken tenders', price: 6.00, description: 'Pollo crujiente que no necesita presentación.', allowsMenu: false },
  { category: CATEGORY.COMPLEMENT, key: 'fingers_mozzarella', name: 'Fingers de mozzarella', price: 3.00, description: 'Estirar el queso es obligatorio. Instagrammearlo, opcional.', allowsMenu: false },
  { category: CATEGORY.COMPLEMENT, key: 'nuggets_pollo', name: 'Nuggets de pollo', price: 4.00, description: 'De pollo real. Probablemente.', allowsMenu: false },

  // MENU KIDS
  { category: CATEGORY.MENU_KID, key: 'menu_kids', name: 'Menú Kids', price: 5.00, description: 'Mini taco nuggets + nuggets de pollo x5 + patatas + Capri-sun/Agua + helado', allowsMenu: false, kidOptions: { drink: ['Capri-sun', 'Agua'] } },

  // POSTRES
  { category: CATEGORY.DESSERT, key: 'tarta_daim', name: 'Tarta Daim', price: 3.00, description: 'Caramelo sueco + chocolate = felicidad nórdica.', allowsMenu: false },
  { category: CATEGORY.DESSERT, key: 'tarta_toblerone', name: 'Tarta Toblerone', price: 3.00, description: 'Con trozos de nougat. Cuidado con los picos.', allowsMenu: false },
  { category: CATEGORY.DESSERT, key: 'tarta_queso', name: 'Tarta de queso', price: 3.00, description: 'Suave, cremosa y peligrosamente adictiva.', allowsMenu: false },
  { category: CATEGORY.DESSERT, key: 'tarta_oreo', name: 'Tarta de Oreo', price: 3.00, description: 'Para los que la galleta nunca fue suficiente.', allowsMenu: false },
];

// Helpers
export function getProductsByCategory(category) {
  if (category === CATEGORY.CUSTOM_TACO) return [];
  return fixedProducts.filter(p => p.category === category);
}

export function getProductByKey(key) {
  return fixedProducts.find(p => p.key === key);
}

export function calcCustomPrice(selection) {
  const size = customTacoConfig.sizes.find(s => s.key === selection.size);
  let price = size ? size.basePrice : 0;

  (selection.proteins || []).forEach(pKey => {
    const prot = customTacoConfig.proteins.find(p => p.key === pKey);
    if (prot) price += prot.extraPrice;
  });

  const base = customTacoConfig.bases.find(b => b.key === selection.base);
  if (base) price += base.extraPrice;

  (selection.extras || []).forEach(eKey => {
    const extra = customTacoConfig.extras.find(e => e.key === eKey);
    if (extra) price += extra.extraPrice;
  });

  if (selection.gratin) {
    const gratin = customTacoConfig.gratins.find(g => g.key === selection.gratin);
    if (gratin) price += gratin.extraPrice;
  }

  if (selection.withMenu && size) {
    price += size.menuPrice;
    if (selection.drinkSize === '50cl') price += 0.50;
  }

  return price;
}

export function calcFixedPrice(product, withMenu, drinkSize) {
  let price = product.price;
  if (withMenu && product.allowsMenu) {
    price += product.menuPrice || 2.00;
    if (drinkSize === '50cl') price += 0.50;
  }
  return price;
}
