// Kota Loom menu -- prices in South African Rand, taken from the real menu flyer.
// `heat` is 0 to 3 (flame indicator). `tag` is an optional badge.
// To add per-item photography later, add an `image` path field here and
// uncomment the <img> slot in Menu.jsx (marked TODO).
export const menu = [
  {
    name: "Classic Loom",
    price: 30,
    desc: "Quarter loaf, slap chips, polony, atchaar and sauce. The corner-built classic -- nothing extra, nothing missing.",
    heat: 1,
    tag: "Classic",
    fill: ["Chips", "Polony", "Atchaar", "Sauce"],
  },
  {
    name: "Egg Loom",
    price: 40,
    desc: "Quarter loaf, slap chips, egg, polony and sauce. A morning staple built for any hour.",
    heat: 1,
    tag: null,
    fill: ["Chips", "Egg", "Polony", "Sauce"],
  },
  {
    name: "Cheese Loom",
    price: 45,
    desc: "Quarter loaf, slap chips, polony, cheese and sauce. Melted cheese pulled tight through every layer.",
    heat: 1,
    tag: null,
    fill: ["Chips", "Polony", "Cheese", "Sauce"],
  },
  {
    name: "Loaded Loom",
    price: 50,
    desc: "Quarter loaf, slap chips, russian, vienna, polony, atchaar and sauce. Stacked the way the street likes it.",
    heat: 2,
    tag: "Bestseller",
    fill: ["Chips", "Russian", "Vienna", "Polony", "Atchaar", "Sauce"],
  },
  {
    name: "Full Weave",
    price: 70,
    desc: "Quarter loaf, slap chips, russian, vienna, polony, egg, cheese, lettuce, atchaar and sauce. Every layer, nothing left out.",
    heat: 3,
    tag: "Fully loaded",
    fill: ["Chips", "Russian", "Vienna", "Polony", "Egg", "Cheese", "Lettuce", "Atchaar", "Sauce"],
  },
];

export const addOns = [
  { name: "Extra cheese", price: 8 },
  { name: "Extra russian", price: 15 },
  { name: "Add egg", price: 7 },
  { name: "Extra atchaar", price: 6 },
];
