export const menuData = {
  baseTacos: {
    title: "Menú Base de Tacos",
    description: "Todos los tacos incluyen salsa de queso exclusiva Tacostar y patatas fritas.",
    sizes: [
      { name: "Taco Simple", price: "5,90€" },
      { name: "Taco Doble", price: "7,90€" },
      { name: "Taco Maxi", price: "9,90€" },
      { name: "Taco Graten Unisize", price: "9,00€" }
    ],
    proteins: [
      "Pollo", "Carne picada", "San Jacobo", "Nuggets de pollo",
      "Kebab", "Chicken tenders", "Salchichas", "Carne vegetariana"
    ],
    bases: [
      { name: "Base 1", items: ["Salsa de queso", "Patatas fritas", "Tchouk-tchouka"] },
      { name: "Base 2", items: ["Salsa de queso", "Patatas fritas", "Tomate"] },
      { name: "Base 3", items: ["Salsa de queso", "Patatas fritas", "Lechuga", "Tomate", "Cebolla"] }
    ]
  },

  topGratens: {
    title: "Top Gratens",
    items: [
      {
        name: "TAC BBQ",
        price: "9,40€",
        ingredients: ["Carne picada", "Pollo fresco", "Salsa argelina", "Salsa BBQ", "Extra cheddar"],
        top: true
      },
      {
        name: "TAC SALCHICHA",
        price: "9,00€",
        ingredients: ["Carne picada", "Salchichas", "Salsa marroquí", "Aros de cebolla", "Gratinado cheddar"],
        top: false
      },
      {
        name: "TAC KEBAB",
        price: "9,00€",
        ingredients: ["Carne kebab", "Base 3", "Gratinado mozzarella", "Cebolla frita"],
        top: false
      },
      {
        name: "TAC BURGER",
        price: "9,10€",
        ingredients: ["Carne picada", "Lechuga", "Tomate", "Cebolla", "Salsa Biggy", "Cheddar", "Gratinado cheddar", "Cebolla frita"],
        top: true
      },
      {
        name: "TAC CHICKEN",
        price: "9,00€",
        ingredients: ["Chicken tenders", "San Jacobo", "Carne kebab", "Salsa argelina", "Bacon", "Mozzarella gratinada"],
        top: false
      },
      {
        name: "TAC MIX ESPECIAL",
        price: "9,00€",
        ingredients: ["Chicken tenders", "Kebab", "Salsa andaluza", "Salsa argelina", "Pimientos", "Aceitunas verdes"],
        top: false
      },
      {
        name: "TAC QUESO DE CABRA Y MIEL",
        price: "9,00€",
        ingredients: ["Doble pollo", "Queso de cabra", "Miel gratinada"],
        top: false
      },
      {
        name: "TAC NEMO",
        price: "9,90€",
        ingredients: ["Pollo", "San Jacobo", "Salsa Biggy", "Bacon", "Raclette gratinada"],
        top: true
      },
      {
        name: "TAC MAGIC OGNION",
        price: "9,60€",
        ingredients: ["Pollo fresco", "Salsa Magic Ognion", "Salsa Vacaquerie", "Bacon gratinado"],
        top: false
      },
      {
        name: "TAC RACLETTE",
        price: "9,50€",
        ingredients: ["Carne picada", "Salsa Biggy", "Cheddar", "Mozzarella gratinada"],
        top: true
      },
      {
        name: "LA RACLETTE",
        price: "9,00€",
        ingredients: ["Chicken tenders", "Gouda", "Raclette gratinada"],
        top: false
      }
    ]
  },

  vegetarian: {
    title: "Opciones Vegetarianas",
    items: [
      {
        name: "SPECIAL V",
        price: "9,30€",
        ingredients: ["Carne vegetariana", "Lechuga", "Tomate", "Cebolla"]
      },
      {
        name: "VEGETARIANO AGUACATE",
        price: "9,00€",
        ingredients: ["Carne vegetariana", "Cebolla", "Pimientos", "Aguacate"]
      }
    ]
  },

  extras: {
    title: "Extras y Complementos",
    gratinated: [
      { name: "Gratinado menú normal", price: "+2,00€" },
      { name: "Gratinado mozzarella", price: "+1,00€" },
      { name: "Gratinado bacon", price: "+1,70€" }
    ],
    ingredients: [
      { name: "Pimientos + aceitunas verdes", price: "+1,50€" },
      { name: "Tamaño Maxi", price: "+0,50€" },
      { name: "Menú grande", price: "+2,50€" }
    ],
    sides: [
      { name: "Patatas fritas", price: "1,50€" },
      { name: "Bebida 33cl", price: "1,50€" },
      { name: "Bebida 50cl", price: "2,00€" }
    ]
  },

  menuCombo: {
    title: "Menú y Bebidas",
    description: "Añade +2,00€ a tu taco y llévate patatas fritas + bebida.",
    upgrade: "Cambiar a bebida de 50cl → +0,50€"
  },

  starters: {
    title: "Entrantes y Acompañamientos",
    items: [
      { name: "Aros de cebolla", price: "2,00€" },
      { name: "Bolitas de camembert", price: "3,50€" },
      { name: "Fingers de mozzarella", price: "3,00€" },
      { name: "Nuggets de pollo", price: "9,00€" },
      { name: "Jalapeños con queso", price: "Consultar" }
    ]
  },

  desserts: {
    title: "Postres",
    items: ["Tarta Daim", "Tarta Toblerone", "Tarta de queso", "Tarta Oreo"]
  },

  story: {
    title: "Orígenes",
    paragraphs: [
      "Tacostar nació en 2022 en la provincia de Toledo con el objetivo de traer el concepto original del taco francés a España.",
      "Los fundadores desarrollaron su propia salsa de queso exclusiva, recetas inspiradas en el taco francés tradicional y una selección de ingredientes premium.",
      "El restaurante comenzó como un proyecto local y ha ido creciendo gracias a su propuesta basada en calidad, sabor intenso, personalización y comida rápida estilo francés."
    ]
  },

  contact: {
    name: "Tacostar",
    address: "Bajada de Castilla-La Mancha, 1 Bis, 45003 Toledo",
    phone: "639 14 03 46",
    phoneLink: "tel:+34639140346",
    instagram: "@tacostar10",
    instagramLink: "https://www.instagram.com/tacostar10",
    mapEmbed: "https://www.google.com/maps?q=Bajada+de+Castilla-La+Mancha,+1+Bis,+45003+Toledo&output=embed"
  },

  hours: {
    title: "Horarios de Apertura",
    days: [
      { day: "Lunes", hours: "Cerrado", highlight: false },
      { day: "Martes", hours: "13:30 – 16:30 | 20:00 – 24:00", highlight: false },
      { day: "Miércoles", hours: "13:30 – 16:30 | 20:00 – 24:00", highlight: false },
      { day: "Jueves", hours: "13:30 – 16:30 | 20:00 – 24:00", highlight: false },
      { day: "Viernes", hours: "13:30 – 16:30 | 20:00 – 1:00", highlight: true },
      { day: "Sábado", hours: "13:30 – 16:30 | 20:00 – 1:00", highlight: true },
      { day: "Domingo", hours: "13:30 – 16:30 | 20:00 – 24:00", highlight: false }
    ]
  }
};
