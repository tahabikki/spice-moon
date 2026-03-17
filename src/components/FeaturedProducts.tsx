import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">
              Curated Selection
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block font-body text-xs uppercase tracking-spice text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 pb-0.5"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block font-body text-xs uppercase tracking-spice border border-foreground px-8 py-3 hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
