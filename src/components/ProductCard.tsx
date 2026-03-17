import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative border border-foreground/5 bg-card p-5 md:p-6 transition-shadow duration-500 hover:shadow-product-hover"
    >
      {product.isLimited && (
        <span className="absolute top-4 left-4 z-10 font-body text-[9px] uppercase tracking-spice bg-sumac text-sumac-foreground px-2 py-1">
          Limited
        </span>
      )}

      <div className="aspect-square overflow-hidden bg-secondary">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover mix-blend-multiply"
          loading="lazy"
        />
      </div>

      <div className="mt-4 flex justify-between items-end">
        <div>
          <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">
            Origin: {product.origin}
          </p>
          <h3 className="font-display text-xl mt-1">{product.name}</h3>
        </div>
        <span className="font-body text-sm tabular-nums">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Hover utility bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button className="w-full bg-foreground text-primary-foreground font-body text-[10px] uppercase tracking-spice py-3 hover:bg-foreground/90 transition-colors">
          01 / Add to Bag
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
