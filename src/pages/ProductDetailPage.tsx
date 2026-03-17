import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && (p.taste === product.taste || p.category === product.category)).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-spice text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-secondary flex items-center justify-center p-12 md:p-20 aspect-square"
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-4">
                {product.isLimited && (
                  <span className="font-body text-[9px] uppercase tracking-spice bg-sumac text-sumac-foreground px-2.5 py-1">Limited</span>
                )}
                {product.isBestseller && (
                  <span className="font-body text-[9px] uppercase tracking-spice bg-accent text-accent-foreground px-2.5 py-1">Bestseller</span>
                )}
                <span className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <p className="font-body text-[10px] uppercase tracking-spice text-accent mb-2">Origin: {product.origin}</p>
              <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                    />
                  ))}
                </div>
                <span className="font-body text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-foreground/5">
                <div>
                  <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-1">Weight</p>
                  <p className="font-body text-sm">{product.weight}</p>
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-1">Taste</p>
                  <p className="font-body text-sm capitalize">{product.taste}</p>
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-1">Category</p>
                  <p className="font-body text-sm capitalize">{product.category}</p>
                </div>
              </div>

              {/* Tips */}
              <div className="mb-8">
                <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">Usage Tips</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{product.tips}</p>
              </div>

              {/* Price & Add to cart */}
              <div className="flex items-center gap-6">
                <span className="font-display text-3xl">${product.price.toFixed(2)}</span>
                <div className="flex items-center border border-foreground/10">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-muted-foreground hover:text-foreground">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-body text-sm tabular-nums w-10 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-muted-foreground hover:text-foreground">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-foreground text-primary-foreground font-body text-xs uppercase tracking-spice py-4 hover:bg-foreground/90 transition-colors"
                >
                  Add to Bag
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-24 border-t border-foreground/5">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl mb-10">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
