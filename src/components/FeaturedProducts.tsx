import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">
              The Harvest
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Featured Specimens
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block font-body text-xs uppercase tracking-spice text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 pb-0.5"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-foreground/5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
