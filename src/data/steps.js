// The Loom Process - how a Kota Loom kota is built, layer by layer.
// Order matters: this is the assembly sequence shown on the page.
// Each step carries a real ingredient photo, shot on black to match the brand.
import imgLoaf from "../images/bread.jpeg";
import imgChips from "../images/chips.jpeg";
import imgRussian from "../images/A_sliced_South_African_Russian_202606152203.jpeg";
import imgCheese from "../images/Melted_yellow_cheddar_cheese_cascading_202606152206.jpeg";
import imgEgg from "../images/A_perfectly_fried_egg_with_202606152209.jpeg";
import imgAtchar from "../images/A_vibrant_close-up_of_spicy_202606152208.jpeg";

export const steps = [
  {
    n: "01",
    title: "Quarter Loaf",
    desc: "The foundation. Hollow. Ready.",
    image: imgLoaf,
  },
  {
    n: "02",
    title: "Slap Chips",
    desc: "Golden. Crispy. Laid first. Always.",
    image: imgChips,
  },
  {
    n: "03",
    title: "Russian & Polony",
    desc: "The soul of every kota.",
    image: imgRussian,
  },
  {
    n: "04",
    title: "Cheese",
    desc: "Melted over everything.",
    image: imgCheese,
  },
  {
    n: "05",
    title: "Egg",
    desc: "Crown on top.",
    image: imgEgg,
  },
  {
    n: "06",
    title: "Atchar & Sauce",
    desc: "The final weave. The flavour bind.",
    image: imgAtchar,
  },
];
