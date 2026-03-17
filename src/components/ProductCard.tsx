import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className="group relative bg-card transition-shadow duration-500 hover:shadow-product-hover"
    >
      {product.isLimited && (
        <span className="absolute top-4 left-4 z-10 font-body text-[9px] uppercase tracking-spice bg-sumac text-sumac-foreground px-2.5 py-1">
          Limited
        </span>
      )}
      {product.isBestseller && !product.isLimited && (
        <span className="absolute top-4 left-4 z-10 font-body text-[9px] uppercase tracking-spice bg-accent text-accent-foreground px-2.5 py-1">
          Bestseller
        </span>
      )}

      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-secondary flex items-center justify-center p-8">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            src={product.image}
            alt={product.name}
            className="h-full w-auto object-contain drop-shadow-lg"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="p-5">
        <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">
          {product.origin}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-xl mt-1 hover:text-accent transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground/30"
              }`}
            />
          ))}
          <span className="font-body text-[10px] text-muted-foreground ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="font-body text-sm tabular-nums">
            ${product.price.toFixed(2)}
          </span>
          <span className="font-body text-[10px] text-muted-foreground uppercase tracking-spice">{product.weight}</span>
        </div>
      </div>

      {/* Hover add to bag bar */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-expo">
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="w-full bg-foreground text-primary-foreground font-body text-[10px] uppercase tracking-spice py-3.5 hover:bg-foreground/90 transition-colors"
        >
          Add to Bag — ${product.price.toFixed(2)}
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
