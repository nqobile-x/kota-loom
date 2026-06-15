// Kota Loom menu -- prices in South African Rand, taken from the real menu flyer.
// `heat` is 0 to 3 (flame indicator). `tag` is an optional badge.
// `image` is a real photo of that build; the MenuCard renders it above the copy.
import imgClassic from "../images/kota loom.jpeg";
import imgEgg from "../images/a_kasi_kota_and_replace_202606152144.jpeg";
import imgCheese from "../images/kota loom  pack2.jpeg";
import imgLoaded from "../images/KOTA LOOM photoshoot.jpeg";
import imgFullWeave from "../images/Kota loom shoot 3.jpeg";

export const menu = [
  {
    name: "Classic Loom",
    price: 30,
    desc: "Quarter loaf, slap chips, polony, atchaar and sauce. The corner-built classic -- nothing extra, nothing missing.",
    heat: 1,
    tag: "Classic",
    fill: ["Chips", "Polony", "Atchaar", "Sauce"],
    image: imgClassic,
  },
  {
    name: "Egg Loom",
    price: 40,
    desc: "Quarter loaf, slap chips, egg, polony and sauce. A morning staple built for any hour.",
    heat: 1,
    tag: null,
    fill: ["Chips", "Egg", "Polony", "Sauce"],
    image: imgEgg,
  },
  {
    name: "Cheese Loom",
    price: 45,
    desc: "Quarter loaf, slap chips, polony, cheese and sauce. Melted cheese pulled tight through every layer.",
    heat: 1,
    tag: null,
    fill: ["Chips", "Polony", "Cheese", "Sauce"],
    image: imgCheese,
  },
  {
    name: "Loaded Loom",
    price: 50,
    desc: "Quarter loaf, slap chips, russian, vienna, polony, atchaar and sauce. Stacked the way the street likes it.",
    heat: 2,
    tag: "Bestseller",
    fill: ["Chips", "Russian", "Vienna", "Polony", "Atchaar", "Sauce"],
    image: imgLoaded,
  },
  {
    name: "Full Weave",
    price: 70,
    desc: "Quarter loaf, slap chips, russian, vienna, polony, egg, cheese, lettuce, atchaar and sauce. Every layer, nothing left out.",
    heat: 3,
    tag: "Fully loaded",
    fill: ["Chips", "Russian", "Vienna", "Polony", "Egg", "Cheese", "Lettuce", "Atchaar", "Sauce"],
    image: imgFullWeave,
  },
];

export const addOns = [
  { name: "Extra cheese", price: 8 },
  { name: "Extra russian", price: 15 },
  { name: "Add egg", price: 7 },
  { name: "Extra atchaar", price: 6 },
];
