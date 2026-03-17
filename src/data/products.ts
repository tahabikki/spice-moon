import bottlePepper from "@/assets/bottle-pepper.png";
import bottleSaffron from "@/assets/bottle-saffron.png";
import bottleTurmeric from "@/assets/bottle-turmeric.png";
import bottleCardamom from "@/assets/bottle-cardamom.png";
import bottlePaprika from "@/assets/bottle-paprika.png";
import bottleCinnamon from "@/assets/bottle-cinnamon.png";
import bottleCumin from "@/assets/bottle-cumin.png";
import bottleStarAnise from "@/assets/bottle-staranise.png";

export interface Product {
  id: string;
  name: string;
  origin: string;
  price: number;
  image: string;
  category: "bottles" | "packs" | "organic" | "gift";
  taste: "sweet" | "spicy" | "smoky" | "earthy" | "floral";
  inStock: boolean;
  isLimited?: boolean;
  isBestseller?: boolean;
  weight: string;
  description: string;
  rating: number;
  reviews: number;
  tips: string;
}

export const products: Product[] = [
  {
    id: "tellicherry-peppercorn",
    name: "Tellicherry Peppercorn",
    origin: "Kerala, India",
    price: 18.0,
    image: bottlePepper,
    category: "bottles",
    taste: "spicy",
    inStock: true,
    isBestseller: true,
    weight: "85g",
    description: "Bold, complex heat with citrus undertones. Harvested at peak maturity for maximum piperine content.",
    rating: 4.9,
    reviews: 142,
    tips: "Crack fresh over steaks, pasta, or roasted vegetables. Toast lightly in a dry pan to release volatile oils before grinding.",
  },
  {
    id: "kashmiri-saffron",
    name: "Kashmiri Saffron",
    origin: "Kashmir, India",
    price: 64.0,
    image: bottleSaffron,
    category: "bottles",
    taste: "floral",
    inStock: true,
    isLimited: true,
    weight: "2g",
    description: "Grade I Mongra saffron. Intense aroma, deep crimson threads. Each gram contains approximately 450 stigmas.",
    rating: 5.0,
    reviews: 89,
    tips: "Steep in warm water or milk for 10 minutes before adding to risottos, paella, or desserts. A few threads transform any dish.",
  },
  {
    id: "lakadong-turmeric",
    name: "Lakadong Turmeric",
    origin: "Meghalaya, India",
    price: 22.0,
    image: bottleTurmeric,
    category: "organic",
    taste: "earthy",
    inStock: true,
    isBestseller: true,
    weight: "120g",
    description: "7-9% curcumin content — the highest of any turmeric variety. Grown at 1,200m altitude in the Jaintia Hills.",
    rating: 4.8,
    reviews: 203,
    tips: "Combine with black pepper and fat for maximum curcumin absorption. Essential for golden milk, curries, and marinades.",
  },
  {
    id: "green-cardamom",
    name: "Green Cardamom",
    origin: "Guatemala",
    price: 28.0,
    image: bottleCardamom,
    category: "bottles",
    taste: "sweet",
    inStock: true,
    weight: "60g",
    description: "Intensely aromatic with eucalyptus and camphor notes. Hand-picked before full maturity for peak volatile oil content.",
    rating: 4.7,
    reviews: 98,
    tips: "Crush pods lightly and add to rice dishes, chai, or Scandinavian pastries. Remove pods before serving.",
  },
  {
    id: "smoked-paprika",
    name: "Pimentón de la Vera",
    origin: "Extremadura, Spain",
    price: 16.0,
    image: bottlePaprika,
    category: "bottles",
    taste: "smoky",
    inStock: true,
    weight: "90g",
    description: "DOP-certified. Oak-smoked for two weeks using traditional methods dating to the 16th century.",
    rating: 4.8,
    reviews: 167,
    tips: "Add to soups, stews, and eggs for instant depth. Mix with olive oil for a smoky finishing drizzle.",
  },
  {
    id: "ceylon-cinnamon",
    name: "Ceylon Cinnamon",
    origin: "Sri Lanka",
    price: 24.0,
    image: bottleCinnamon,
    category: "organic",
    taste: "sweet",
    inStock: true,
    weight: "75g",
    description: "True cinnamon (Cinnamomum verum). Delicate, complex sweetness with negligible coumarin levels.",
    rating: 4.9,
    reviews: 134,
    tips: "Grate fresh into oatmeal, coffee, or baked goods. Use sticks to infuse syrups, mulled wine, or slow-cooked meats.",
  },
  {
    id: "royal-cumin",
    name: "Royal Cumin",
    origin: "Rajasthan, India",
    price: 14.0,
    image: bottleCumin,
    category: "packs",
    taste: "earthy",
    inStock: true,
    weight: "100g",
    description: "Whole seeds, sun-dried. Warm, nutty aroma with a distinctive edge. Essential for tempering.",
    rating: 4.6,
    reviews: 76,
    tips: "Dry-roast in a hot pan until fragrant, then grind fresh. Perfect for tacos, hummus, and Indian curries.",
  },
  {
    id: "star-anise",
    name: "Star Anise",
    origin: "Vietnam",
    price: 19.0,
    image: bottleStarAnise,
    category: "bottles",
    taste: "sweet",
    inStock: true,
    weight: "50g",
    description: "Whole stars with intense licorice aroma. High in anethole — the compound responsible for its distinctive flavor.",
    rating: 4.7,
    reviews: 63,
    tips: "Add whole stars to broths, braised meats, and poaching liquids. Remove before serving. Ground, it's essential in five-spice.",
  },
];

export const categories = [
  { id: "bottles", label: "Bottles", description: "Single-origin spices in premium glass bottles" },
  { id: "packs", label: "Packs", description: "Curated spice sets for every cuisine" },
  { id: "organic", label: "Organic", description: "Certified organic, traceable to source" },
  { id: "gift", label: "Gift Sets", description: "Beautifully packaged for special occasions" },
];

export const tastes = ["sweet", "spicy", "smoky", "earthy", "floral"] as const;
