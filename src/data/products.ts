import spicePepper from "@/assets/spice-pepper.jpg";
import spiceSaffron from "@/assets/spice-saffron.jpg";
import spiceTurmeric from "@/assets/spice-turmeric.jpg";
import spiceCardamom from "@/assets/spice-cardamom.jpg";
import spicePaprika from "@/assets/spice-paprika.jpg";
import spiceCinnamon from "@/assets/spice-cinnamon.jpg";
import spiceCumin from "@/assets/spice-cumin.jpg";

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
  weight: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "tellicherry-peppercorn",
    name: "Tellicherry Peppercorn",
    origin: "Kerala, India",
    price: 18.0,
    image: spicePepper,
    category: "bottles",
    taste: "spicy",
    inStock: true,
    weight: "85g",
    description: "Bold, complex heat with citrus undertones. Harvested at peak maturity for maximum piperine content.",
  },
  {
    id: "kashmiri-saffron",
    name: "Kashmiri Saffron",
    origin: "Kashmir, India",
    price: 64.0,
    image: spiceSaffron,
    category: "bottles",
    taste: "floral",
    inStock: true,
    isLimited: true,
    weight: "2g",
    description: "Grade I Mongra saffron. Intense aroma, deep crimson threads. Each gram contains approximately 450 stigmas.",
  },
  {
    id: "lakadong-turmeric",
    name: "Lakadong Turmeric",
    origin: "Meghalaya, India",
    price: 22.0,
    image: spiceTurmeric,
    category: "organic",
    taste: "earthy",
    inStock: true,
    weight: "120g",
    description: "7-9% curcumin content — the highest of any turmeric variety. Grown at 1,200m altitude in the Jaintia Hills.",
  },
  {
    id: "green-cardamom",
    name: "Green Cardamom",
    origin: "Guatemala",
    price: 28.0,
    image: spiceCardamom,
    category: "bottles",
    taste: "sweet",
    inStock: true,
    weight: "60g",
    description: "Intensely aromatic with eucalyptus and camphor notes. Hand-picked before full maturity for peak volatile oil content.",
  },
  {
    id: "smoked-paprika",
    name: "Pimentón de la Vera",
    origin: "Extremadura, Spain",
    price: 16.0,
    image: spicePaprika,
    category: "bottles",
    taste: "smoky",
    inStock: true,
    weight: "90g",
    description: "DOP-certified. Oak-smoked for two weeks using traditional methods dating to the 16th century.",
  },
  {
    id: "ceylon-cinnamon",
    name: "Ceylon Cinnamon",
    origin: "Sri Lanka",
    price: 24.0,
    image: spiceCinnamon,
    category: "organic",
    taste: "sweet",
    inStock: true,
    weight: "75g",
    description: "True cinnamon (Cinnamomum verum). Delicate, complex sweetness with negligible coumarin levels.",
  },
  {
    id: "royal-cumin",
    name: "Royal Cumin",
    origin: "Rajasthan, India",
    price: 14.0,
    image: spiceCumin,
    category: "packs",
    taste: "earthy",
    inStock: true,
    weight: "100g",
    description: "Whole seeds, sun-dried. Warm, nutty aroma with a distinctive edge. Essential for tempering.",
  },
];

export const categories = [
  { id: "bottles", label: "Bottles", count: 4 },
  { id: "packs", label: "Packs", count: 1 },
  { id: "organic", label: "Organic", count: 2 },
  { id: "gift", label: "Gift Sets", count: 0 },
];
